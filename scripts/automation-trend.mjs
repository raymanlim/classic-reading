#!/usr/bin/env node
/**
 * automation-trend.mjs —— 全自动化任务运行时长与成功率趋势统计
 *
 * 零依赖，只用 Node 内置模块。
 *
 * 数据源：~/.workbuddy-ai/logs/<YYYY-MM-DD>/<workspace>__<hash>.log
 *   - 每轮起点：日志行里的 "subRunId":"<automationId>:<epochMs>:<n>"
 *     （automationId + 触发 epoch 唯一确定一轮，精度到毫秒）
 *   - 每轮终点：同一日志文件内，以 --gap 分钟为间隔切出的活动块末行
 *   - 活跃度：块内 `] execute start |`（工具执行）计数
 *     （模型调用日志无稳定前缀，实测不可靠，故不采用）
 *
 * 用法：
 *   node scripts/automation-trend.mjs                 # 近 30 天，输出 md + json
 *   node scripts/automation-trend.mjs --days 7
 *   node scripts/automation-trend.mjs --gap 12 --out-dir .workbuddy-ai/reports/automation-trend
 *   node scripts/automation-trend.mjs --json          # 只打印 JSON 到 stdout
 *   node scripts/automation-trend.mjs --strict        # 最近一轮有异常则退出码 1（供看门狗使用）
 *
 * 状态判定（以时长为主判据；工具执行次数只作提示，因部分任务不走 BashTool，不参与判定）：
 *   aborted    时长 < 60s 且 0 次工具执行  —— 会话没真正跑起来（如 10-18 整日）
 *   truncated  时长 < 60s 但工具执行 > 0   —— 多半是跨文件续跑导致测量被截断，需人工确认
 *   thin       时长 60–120s 且 0 次工具执行 —— 偏短，观察项
 *   ok         其余
 */

import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import readline from 'node:readline';

const argv = process.argv.slice(2);
const arg = (name, dflt) => {
  const i = argv.indexOf(`--${name}`);
  return i >= 0 && argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[i + 1] : dflt;
};
const flag = (name) => argv.includes(`--${name}`);

const DAYS = Number(arg('days', 30));
const GAP_MIN = Number(arg('gap', 12));
const LOG_ROOT = arg('logs', path.join(os.homedir(), '.workbuddy-ai', 'logs'));
const OUT_DIR = arg('out-dir', path.join(process.cwd(), '.workbuddy-ai', 'reports', 'automation-trend'));
const JSON_ONLY = flag('json');

const TS_RE = /^\[(\d{4})\/(\d{2})\/(\d{2}) (\d{2}):(\d{2}):(\d{2})\.(\d{3})\]/;
const SUB_RE = /"subRunId":"([0-9a-f-]+):(\d+):(\d+)"/;
const NAME_RE = /"automationName":"([^"]*)"/;

const tsToMs = (m) =>
  Date.UTC(+m[1], +m[2] - 1, +m[3], +m[4], +m[5], +m[6]) + +m[7] - 8 * 3600 * 1000;

const fmtMin = (ms) => (ms / 60000);
const pad = (n) => String(n).padStart(2, '0');
const hhmm = (ms) => {
  const d = new Date(ms + 8 * 3600 * 1000);
  return `${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}`;
};
const ymd = (ms) => {
  const d = new Date(ms + 8 * 3600 * 1000);
  return `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}`;
};

function listDateDirs() {
  if (!fs.existsSync(LOG_ROOT)) return [];
  return fs
    .readdirSync(LOG_ROOT)
    .filter((d) => /^\d{4}-\d{2}-\d{2}$/.test(d))
    .sort()
    .slice(-DAYS);
}

/** 单文件扫描：收集时间轴 + 轮次起点 + 每轮活跃度 */
async function scanFile(file, runs, seen) {
  const times = [];
  let active = null;

  const rl = readline.createInterface({
    input: fs.createReadStream(file, { encoding: 'utf8' }),
    crlfDelay: Infinity,
  });

  for await (const line of rl) {
    const tm = TS_RE.exec(line);
    if (!tm) continue;
    const t = tsToMs(tm);
    times.push(t);

    const sm = SUB_RE.exec(line);
    if (sm) {
      const key = `${sm[1]}|${sm[2]}`;
      if (!seen.has(key)) {
        seen.add(key);
        const nm = NAME_RE.exec(line);
        const run = {
          key,
          automationId: sm[1],
          epoch: Number(sm[2]),
          name: nm ? nm[1] : sm[1].slice(0, 8),
          start: t,
          file,
          execs: 0,
          lines: 0,
        };
        runs.set(key, run);
        active = run;
      } else {
        active = runs.get(key);
      }
      continue;
    }

    if (active) {
      active.lines++;
      if (line.includes('] execute start |')) active.execs++;
    }
  }

  times.sort((a, b) => a - b);
  return times;
}

function blocksOf(times, gapMs) {
  const out = [];
  if (!times.length) return out;
  let s = times[0];
  let p = times[0];
  for (let i = 1; i < times.length; i++) {
    if (times[i] - p > gapMs) {
      out.push([s, p]);
      s = times[i];
    }
    p = times[i];
  }
  out.push([s, p]);
  return out;
}

function endFor(times, start, gapMs) {
  const bs = blocksOf(times, gapMs);
  for (const [a, b] of bs) if (start >= a && start <= b) return b;
  let best = null;
  for (const [a, b] of bs) if (a >= start && (best === null || a < best)) best = a;
  return best;
}

const median = (xs) => {
  if (!xs.length) return null;
  const s = [...xs].sort((a, b) => a - b);
  const m = s.length >> 1;
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
};
const p90 = (xs) => {
  if (!xs.length) return null;
  const s = [...xs].sort((a, b) => a - b);
  return s[Math.min(s.length - 1, Math.floor(s.length * 0.9))];
};
const mean = (xs) => (xs.length ? xs.reduce((a, b) => a + b, 0) / xs.length : null);
const r1 = (x) => (x === null || x === undefined ? '—' : x.toFixed(1));

function statusOf(run, durMs) {
  const min = durMs / 60000;
  if (min < 1) return run.execs === 0 ? 'aborted' : 'truncated';
  if (min < 2 && run.execs === 0) return 'thin';
  return 'ok';
}

async function main() {
  const dirs = listDateDirs();
  const runs = new Map();
  const seen = new Set();

  for (const d of dirs) {
    const dir = path.join(LOG_ROOT, d);
    let files = [];
    try {
      files = fs.readdirSync(dir).filter((f) => f.endsWith('.log'));
    } catch {
      continue;
    }
    for (const f of files) {
      const fp = path.join(dir, f);
      let st;
      try {
        st = fs.statSync(fp);
      } catch {
        continue;
      }
      if (st.size < 1024) continue;
      const times = await scanFile(fp, runs, seen);
      for (const run of runs.values()) {
        if (run.file !== fp || run.end !== undefined) continue;
        const e = endFor(times, run.start, GAP_MIN * 60000);
        if (e !== null) run.end = e;
      }
    }
  }

  const records = [];
  for (const run of runs.values()) {
    if (run.end === undefined) continue;
    const durMs = run.end - run.start;
    records.push({
      automationId: run.automationId,
      name: run.name,
      date: ymd(run.start),
      start: hhmm(run.start),
      end: hhmm(run.end),
      durationMin: +fmtMin(durMs).toFixed(1),
      execs: run.execs,
      status: statusOf(run, durMs),
      startMs: run.start,
    });
  }
  records.sort((a, b) => a.startMs - b.startMs);

  const byTask = new Map();
  for (const r of records) {
    if (!byTask.has(r.automationId)) byTask.set(r.automationId, []);
    byTask.get(r.automationId).push(r);
  }

  const windowEnd = records.length ? records[records.length - 1].startMs : Date.now();
  const D7 = 7 * 86400 * 1000;

  const summary = [];
  for (const [id, rs] of byTask) {
    const ok = rs.filter((r) => r.status === 'ok');
    const durs = ok.map((r) => r.durationMin);
    const last = rs[rs.length - 1];
    const starts = rs.map((r) => r.start);
    const recent = ok.filter((r) => r.startMs > windowEnd - D7).map((r) => r.durationMin);
    const prev = ok.filter((r) => r.startMs > windowEnd - 2 * D7 && r.startMs <= windowEnd - D7).map((r) => r.durationMin);
    const rm = median(recent);
    const pm = median(prev);
    let trend = 'n/a';
    if (rm !== null && pm !== null && pm > 0) {
      const d = (rm - pm) / pm;
      trend = d > 0.15 ? 'up' : d < -0.15 ? 'down' : 'flat';
    }
    summary.push({
      automationId: id,
      name: last.name,
      runs: rs.length,
      okRuns: ok.length,
      successRate: rs.length ? ok.length / rs.length : 0,
      meanMin: mean(durs),
      medianMin: median(durs),
      p90Min: p90(durs),
      minMin: durs.length ? Math.min(...durs) : null,
      maxMin: durs.length ? Math.max(...durs) : null,
      recent7Median: rm,
      prev7Median: pm,
      trend,
      typicalStart: starts.sort()[starts.length >> 1],
      lastDate: last.date,
      lastStatus: last.status,
      lastMin: last.durationMin,
      anomalies: rs.filter((r) => r.status !== 'ok'),
    });
  }
  summary.sort((a, b) => b.runs - a.runs || a.name.localeCompare(b.name));

  const payload = {
    generatedAt: new Date().toISOString(),
    window: { days: DAYS, logDirs: dirs, from: dirs[0] ?? null, to: dirs[dirs.length - 1] ?? null, gapMin: GAP_MIN },
    totals: {
      tasks: summary.length,
      runs: records.length,
      okRuns: records.filter((r) => r.status === 'ok').length,
      anomalies: records.filter((r) => r.status !== 'ok').length,
    },
    summary,
    records,
  };

  if (JSON_ONLY) {
    process.stdout.write(JSON.stringify(payload, null, 2) + '\n');
    return;
  }

  fs.mkdirSync(OUT_DIR, { recursive: true });
  const stamp = ymd(Date.now());
  const jsonPath = path.join(OUT_DIR, `trend-${stamp}.json`);
  const mdPath = path.join(OUT_DIR, `trend-${stamp}.md`);
  fs.writeFileSync(jsonPath, JSON.stringify(payload, null, 2), 'utf8');

  const L = [];
  L.push(`# 自动化任务运行趋势 · ${stamp}`);
  L.push('');
  L.push(
    `窗口 ${payload.window.from} ~ ${payload.window.to}（${dirs.length} 天）｜任务 ${summary.length} 个｜` +
      `共 ${records.length} 轮，其中异常 ${payload.totals.anomalies} 轮`
  );
  L.push('');
  L.push('## 一、各任务概览');
  L.push('');
  const arrow = { up: '↑ 变慢', down: '↓ 变快', flat: '→ 持平', 'n/a': '—' };
  L.push('| 任务 | 计划时刻 | 轮次 | 成功率 | 中位 | P90 | 近 7 天中位 | 趋势 | 最近一轮 |');
  L.push('|---|---|---|---|---|---|---|---|---|');
  for (const s of summary) {
    L.push(
      `| ${s.name} | ${s.typicalStart} | ${s.runs} | ${(s.successRate * 100).toFixed(0)}% | ` +
        `${r1(s.medianMin)} | ${r1(s.p90Min)} | ${r1(s.recent7Median)} | ${arrow[s.trend]} | ` +
        `${s.lastDate} ${s.lastStatus === 'ok' ? '✅' : '⚠️'} ${r1(s.lastMin)} min |`
    );
  }
  L.push('');
  L.push('## 二、异常轮次');
  L.push('');
  const anomalies = records.filter((r) => r.status !== 'ok');
  if (!anomalies.length) {
    L.push('窗口内无异常。');
  } else {
    L.push('| 日期 | 任务 | 起止 | 时长 | 工具执行 | 判定 |');
    L.push('|---|---|---|---|---|---|');
    for (const a of anomalies) {
      L.push(`| ${a.date} | ${a.name} | ${a.start}–${a.end} | ${a.durationMin} min | ${a.execs} | ${a.status} |`);
    }
  }
  L.push('');
  L.push('## 三、逐轮明细');
  L.push('');
  L.push('| 日期 | 任务 | 起 | 止 | 时长(min) | 工具 | 判定 |');
  L.push('|---|---|---|---|---|---|---|');
  for (const r of [...records].reverse()) {
    L.push(`| ${r.date} | ${r.name} | ${r.start} | ${r.end} | ${r.durationMin} | ${r.execs} | ${r.status} |`);
  }
  L.push('');
  L.push('## 四、口径');
  L.push('');
  L.push('- 起点取自日志中的 `subRunId`（automationId + 触发 epoch，毫秒精度）；');
  L.push(`- 终点取同一日志文件内以 ${GAP_MIN} 分钟为间隔切出的活动块末行；跨文件续跑会低估；`);
  L.push('- `aborted`：时长 < 60 秒且零工具执行，通常意味着会话没真正拉起；');
  L.push('- `truncated`：时长 < 60 秒但确有工具执行，多半是跨文件续跑导致终点被截断，需人工确认；');
  L.push('- `thin`：60–120 秒且零工具执行，偏短，列为观察项；');
  L.push('- 工具执行次数只统计 BashTool，部分任务不走该通道，故仅作提示、不参与判定；');
  L.push('- 中位/P90 只统计 `ok` 轮，避免异常轮把分布拉偏；');
  L.push('- 趋势 = 近 7 天 `ok` 轮中位数对比前 7 天，变动超 ±15% 才判定为变快/变慢。');
  fs.writeFileSync(mdPath, L.join('\n') + '\n', 'utf8');

  console.log(`窗口 ${payload.window.from} ~ ${payload.window.to}｜任务 ${summary.length}｜轮次 ${records.length}｜异常 ${payload.totals.anomalies}`);
  for (const s of summary) {
    console.log(
      `  ${s.name.padEnd(30)} ${s.typicalStart}  ${String(s.runs).padStart(2)} 轮  ` +
        `${(s.successRate * 100).toFixed(0).padStart(3)}%  中位 ${r1(s.medianMin)} min  ` +
        `P90 ${r1(s.p90Min)} min  近7天 ${r1(s.recent7Median)} (${s.trend})`
    );
  }
  console.log(`\n已写出：\n  ${mdPath}\n  ${jsonPath}`);

  if (flag('strict')) {
    const lastDay = records.length ? records[records.length - 1].date : null;
    const bad = records.filter((r) => r.date === lastDay && r.status === 'aborted');
    if (bad.length) {
      console.error(`\n[strict] ${lastDay} 存在 ${bad.length} 轮异常：`);
      for (const b of bad) console.error(`  ${b.start} ${b.name} (${b.status}, ${b.durationMin} min)`);
      process.exitCode = 1;
    }
  }
}

main().catch((e) => {
  console.error('统计失败：', e.message);
  process.exit(1);
});
