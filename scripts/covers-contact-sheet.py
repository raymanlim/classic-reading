"""把 public/covers 下的待处理图片拼成一张带编号的对照表，便于人工识别书目。

为什么需要它：投放的封面图可能是 UUID / 哈希文件名（如 `01ff022c-….png`），
不含任何书名信息，`covers-ingest.mjs` 的词元匹配会全部得到 0.00 置信度。
此时只能靠看图识别 —— 但不要逐张读原图（每张 1024×1536，上下文消耗大），
先拼成一张接触印相表，读一次即可全部识别。

用法：python scripts/covers-contact-sheet.py
输出：_stage/_covers-src/_contact-sheet.jpg
"""
import glob
import os
import sys

from PIL import Image, ImageDraw

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
COVERS = os.path.join(ROOT, "public", "covers")
OUT_DIR = os.path.join(ROOT, "_stage", "_covers-src")
OUT = os.path.join(OUT_DIR, "_contact-sheet.jpg")

# 待处理 = 非 webp 的图片
targets = []
for p in sorted(glob.glob(os.path.join(COVERS, "*"))):
    name = os.path.basename(p)
    ext = os.path.splitext(name)[1].lower()
    if ext in (".webp", ".md"):
        continue
    if ext not in (".png", ".jpg", ".jpeg", ".avif"):
        continue
    targets.append(p)

if not targets:
    print("没有待处理图片")
    sys.exit(0)

print(f"待处理 {len(targets)} 张：")
for i, p in enumerate(targets):
    with Image.open(p) as im:
        print(f"  [{i + 1}] {os.path.basename(p)}  {im.width}x{im.height}  {im.mode}")

CELL_W = 430
CELL_H = 660
LABEL_H = 34
COLS = 4
ROWS = (len(targets) + COLS - 1) // COLS

sheet = Image.new(
    "RGB",
    (COLS * CELL_W, ROWS * (CELL_H + LABEL_H)),
    (245, 245, 245),
)
draw = ImageDraw.Draw(sheet)

for i, p in enumerate(targets):
    col = i % COLS
    row = i // COLS
    x0 = col * CELL_W
    y0 = row * (CELL_H + LABEL_H)

    # 编号标签
    draw.rectangle([x0, y0, x0 + CELL_W, y0 + LABEL_H], fill=(20, 20, 20))
    draw.text((x0 + 10, y0 + 9), f"[{i + 1}] {os.path.basename(p)[:38]}", fill=(255, 255, 255))

    with Image.open(p) as im:
        im = im.convert("RGB")
        im.thumbnail((CELL_W - 16, CELL_H - 16), Image.LANCZOS)
        # 居中贴入
        ox = x0 + (CELL_W - im.width) // 2
        oy = y0 + LABEL_H + (CELL_H - im.height) // 2
        sheet.paste(im, (ox, oy))

os.makedirs(OUT_DIR, exist_ok=True)
sheet.save(OUT, "JPEG", quality=88)
print(f"\n对照表已写出：{OUT}")
print(f"尺寸：{sheet.width}x{sheet.height}")
