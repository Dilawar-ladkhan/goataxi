from PIL import Image
path_in = r"C:\Users\ACER\.gemini\antigravity\brain\10dc3e18-924d-4ea2-bf6f-fe8b6165a0ee\goa_taxi_hero_bg_sharp_1775894204532.png"
out_desk = r"d:\Documents\projects\wasim's website\images\goa_taxi_hero_bg.webp"
out_mob = r"d:\Documents\projects\wasim's website\images\goa_taxi_hero_bg_mobile.webp"

img = Image.open(path_in)
w, h = img.size

if w < 1920:
    new_w = 1920
    new_h = int(h * (1920 / w))
    img_desk = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
else:
    img_desk = img
img_desk.save(out_desk, 'WEBP', quality=85)

mob_h = int(h * (800 / w))
img_mob = img.resize((800, mob_h), Image.Resampling.LANCZOS)
img_mob.save(out_mob, 'WEBP', quality=80)
print('Done')
