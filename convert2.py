from PIL import Image
path_in = r"C:\Users\ACER\.gemini\antigravity\brain\10dc3e18-924d-4ea2-bf6f-fe8b6165a0ee\goa_taxi_hero_bg_mobile_vertical_1775896018616.png"
out_mob = r"d:\Documents\projects\wasim's website\images\goa_taxi_hero_bg_mobile.webp"

img = Image.open(path_in)
w, h = img.size

mob_h = int(h * (800 / w))
img_mob = img.resize((800, mob_h), Image.Resampling.LANCZOS)
img_mob.save(out_mob, 'WEBP', quality=85)
print('Done mobile')
