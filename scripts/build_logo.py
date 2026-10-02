from PIL import Image, ImageFilter
import numpy as np

# 1. Load original icon.png
orig = Image.open('src/app/icon.png').convert('L')
orig_arr = np.array(orig)

# The original has white shape with antialiased edges
# In original, pixels > 0 are the shape
# Let's extract clean alpha
h, w = orig_arr.shape
rgba = np.zeros((h, w, 4), dtype=np.uint8)
rgba[:, :, 0] = 255
rgba[:, :, 1] = 255
rgba[:, :, 2] = 255
rgba[:, :, 3] = orig_arr

base_img = Image.fromarray(rgba, mode='RGBA')
bbox = base_img.getbbox()
cropped = base_img.crop(bbox)

# Target square canvas 1024x1024
max_dim = max(cropped.width, cropped.height)
scale = (1024.0 * 0.82) / max_dim
new_w = int(cropped.width * scale)
new_h = int(cropped.height * scale)
scaled_cropped = cropped.resize((new_w, new_h), Image.Resampling.LANCZOS)

master = Image.new('RGBA', (1024, 1024), (0, 0, 0, 0))
# Center with slight optical adjustment
offset_x = (1024 - new_w) // 2 + 12
offset_y = (1024 - new_h) // 2
master.paste(scaled_cropped, (offset_x, offset_y), scaled_cropped)

# Save master & transparent PNGs
master.save('public/logo-512.png', 'PNG')
print('Created public/logo-512.png')

icon_512 = master.resize((512, 512), Image.Resampling.LANCZOS)
icon_512.save('src/app/icon.png', 'PNG')
print('Created src/app/icon.png')

apple_icon = master.resize((180, 180), Image.Resampling.LANCZOS)
apple_icon.save('src/app/apple-icon.png', 'PNG')
print('Created src/app/apple-icon.png')

fav_64 = master.resize((64, 64), Image.Resampling.LANCZOS)
fav_64.save('public/favicon.png', 'PNG')
print('Created public/favicon.png')

fav_32 = master.resize((32, 32), Image.Resampling.LANCZOS)
fav_32.save('public/favicon.ico', format='ICO', sizes=[(16, 16), (32, 32), (48, 48)])
print('Created public/favicon.ico')

# 2. Extract border contour for SVG
alpha = np.array(master)[:, :, 3]
binary = alpha >= 120
im_bin = Image.fromarray((binary * 255).astype(np.uint8))
im_eroded = im_bin.filter(ImageFilter.MinFilter(3))
border = binary & ~(np.array(im_eroded) > 0)

border_pts = set(zip(*np.where(border)))
start_pt = min(border_pts, key=lambda p: (p[0], p[1]))

ordered = [start_pt]
curr = start_pt
visited = {curr}

while True:
    found = None
    for r in range(1, 5):
        candidates = []
        for dy in range(-r, r + 1):
            for dx in range(-r, r + 1):
                p = (curr[0] + dy, curr[1] + dx)
                if p in border_pts and p not in visited:
                    candidates.append((dy * dy + dx * dx, p))
        if candidates:
            candidates.sort()
            found = candidates[0][1]
            break
    if found is None:
        break
    ordered.append(found)
    visited.add(found)
    curr = found

pts = np.array([[p[1], p[0]] for p in ordered], dtype=float)

# Subsample smoothly (step 4 gives clean curves without excessive vertex count)
pts_sub = pts[::4]
pts_512 = pts_sub * (512.0 / 1024.0)
d_path = 'M ' + ' L '.join(f'{x:.1f},{y:.1f}' for x, y in pts_512) + ' Z'

# 3. Create public/logo-brand.svg with electric gradient
svg_brand = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <defs>
    <linearGradient id="electricGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00D9C0" />
      <stop offset="50%" stop-color="#38BDF8" />
      <stop offset="100%" stop-color="#6366F1" />
    </linearGradient>
  </defs>
  <path fill="url(#electricGrad)" d="{d_path}" />
</svg>'''

with open('public/logo-brand.svg', 'w', encoding='utf-8') as f:
    f.write(svg_brand)
print(f'Created public/logo-brand.svg ({len(pts_sub)} points)')

# 4. Create adaptive SVG favicons:
# Supports dark mode tabs (#FFFFFF / electric glow) and light mode tabs (#0A0A0B / dark contrast)
svg_adaptive = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <defs>
    <linearGradient id="brandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00D9C0" />
      <stop offset="100%" stop-color="#6366F1" />
    </linearGradient>
  </defs>
  <style>
    .logo-shape {{
      fill: #0A0A0B;
      transition: fill 0.2s ease;
    }}
    @media (prefers-color-scheme: dark) {{
      .logo-shape {{
        fill: #FFFFFF;
      }}
    }}
  </style>
  <path class="logo-shape" d="{d_path}" />
</svg>'''

with open('src/app/icon.svg', 'w', encoding='utf-8') as f:
    f.write(svg_adaptive)
print('Created src/app/icon.svg')

with open('public/favicon.svg', 'w', encoding='utf-8') as f:
    f.write(svg_adaptive)
print('Created public/favicon.svg')
