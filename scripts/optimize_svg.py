import re
import xml.etree.ElementTree as ET

# Read potrace_inverted.svg
with open('potrace_inverted.svg', 'r') as f:
    content = f.read()

# Extract d attribute
d_match = re.search(r'd="([^"]+)"', content)
if not d_match:
    raise ValueError("Path d not found")

d = d_match.group(1)

# Find all numbers in d to get min and max coordinates
nums = [float(x) for x in re.findall(r'[-+]?\d*\.?\d+', d)]
# Numbers come in pairs (x, y)
xs = nums[0::2]
ys = nums[1::2]

min_x, max_x = min(xs), max(xs)
min_y, max_y = min(ys), max(ys)
width = max_x - min_x
height = max_y - min_y

print(f"X: {min_x:.2f} to {max_x:.2f} (w={width:.2f})")
print(f"Y: {min_y:.2f} to {max_y:.2f} (h={height:.2f})")

# Calculate centering in 512x512
# We want the icon to occupy ~78% of the 512 box (around 400px height)
target_height = 400.0
scale = target_height / height
scaled_w = width * scale
scaled_h = target_height

# Slight optical center: triangle centroid is slightly towards the left, so shift slightly right
target_cx = 256.0 + 8.0 # 8px optical adjustment
target_cy = 256.0

current_cx = (min_x + max_x) / 2.0
current_cy = (min_y + max_y) / 2.0

trans_x = target_cx - (current_cx * scale)
trans_y = target_cy - (current_cy * scale)

print(f"Scale: {scale:.4f}, TransX: {trans_x:.2f}, TransY: {trans_y:.2f}")

# Transform the path points directly so no runtime SVG transform is needed!
# We can re-parse commands and coordinates
tokens = re.findall(r'([A-Za-z]|[-+]?\d*\.?\d+)', d)

new_tokens = []
i = 0
while i < len(tokens):
    tok = tokens[i]
    if tok.isalpha():
        new_tokens.append(tok)
        i += 1
    else:
        # pair of numbers: x, y
        x = float(tokens[i])
        y = float(tokens[i+1])
        new_x = x * scale + trans_x
        new_y = y * scale + trans_y
        new_tokens.append(f"{new_x:.2f}")
        new_tokens.append(f"{new_y:.2f}")
        i += 2

new_d = " ".join(new_tokens)

# 1. Output src/app/icon.svg (Adaptive SVG favicon)
svg_icon = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <defs>
    <filter id="subtle-glow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#000000" flood-opacity="0.25"/>
    </filter>
  </defs>
  <style>
    .brand-triangle {{
      fill: #0F172A;
      transition: fill 0.2s ease;
    }}
    @media (prefers-color-scheme: dark) {{
      .brand-triangle {{
        fill: #FFFFFF;
      }}
    }}
  </style>
  <path class="brand-triangle" filter="url(#subtle-glow)" fill-rule="evenodd" d="{new_d}" />
</svg>'''

with open('src/app/icon.svg', 'w', encoding='utf-8') as f:
    f.write(svg_icon)

with open('public/favicon.svg', 'w', encoding='utf-8') as f:
    f.write(svg_icon)

# 2. Output public/logo-brand.svg (Electric Gradient version for UI)
svg_brand = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <defs>
    <linearGradient id="electricGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00D9C0" />
      <stop offset="50%" stop-color="#38BDF8" />
      <stop offset="100%" stop-color="#6366F1" />
    </linearGradient>
    <filter id="electric-glow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="8" stdDeviation="16" flood-color="#00D9C0" flood-opacity="0.35"/>
    </filter>
  </defs>
  <path fill="url(#electricGrad)" filter="url(#electric-glow)" fill-rule="evenodd" d="{new_d}" />
</svg>'''

with open('public/logo-brand.svg', 'w', encoding='utf-8') as f:
    f.write(svg_brand)

# 3. Output public/logo-white.svg
svg_white = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%">
  <path fill="#FFFFFF" fill-rule="evenodd" d="{new_d}" />
</svg>'''

with open('public/logo-white.svg', 'w', encoding='utf-8') as f:
    f.write(svg_white)

print("Saved SVG icons successfully!")
