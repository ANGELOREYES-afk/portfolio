# Angelo Reyes — Portfolio

Static portfolio site. No build step, no dependencies, no trackers — plain HTML, one
stylesheet, one small JS file for the theme toggle. It runs anywhere that can serve files.

```
index.html                  home — hero, work, experience, skills, contact
projects/baja-daq.html      Vehicle DAQ & dynamometer control (Baja SAE 2027)
projects/scata-arm.html     SCATA — liquid-cooled proximal-actuated robot arm
projects/orp-sensor.html    ORP galvanic cell salinity instrument
projects/pixel-generation.html  Diffusion model + BLE iOS app
projects/plant-dielectra.html   DIELECTRA plant-chemistry PCB
docs/                       LaTeX sources (actuator force calculations)
assets/css/site.css         all styling; light + dark via CSS custom properties
assets/js/site.js           theme toggle (auto → light → dark), persisted
assets/img/                 photographs
```

## Preview locally

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Deploy to GitHub Pages

Published as a project site at `angeloreyes-afk.github.io/portfolio`. Create an empty
repo named `portfolio` (no README), then:

```bash
git remote add origin https://github.com/ANGELOREYES-afk/portfolio.git
git branch -M main
git push -u origin main
```

`.nojekyll` is included so GitHub Pages serves every file as-is instead of running Jekyll.

## Editing

Content is written directly into the HTML — there is no CMS or templating layer, which is
the point. To add a project, copy `projects/baja-daq.html` as a starting skeleton and add a
matching `.card` link in the `#work` section of `index.html`.

Adding a photo: drop it in `assets/img/` and reference it with a `<figure>` block. Compress
first — these are shipped as-is:

```bash
sips -s format jpeg -s formatOptions 78 -Z 1400 input.png --out assets/img/name.jpg
```
