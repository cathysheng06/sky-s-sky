# sky-s-sky

Cathy Sheng's personal site. Plain HTML/CSS/JS, no build step — deployed as-is via GitHub Pages.

## Structure

```
index.html              markup for the whole site (Work page + Life page, toggled by JS, no reload)
assets/
  css/style.css          all styles (light + dark theme tokens)
  js/
    theme.js              dark-mode toggle
    pages.js               switches between the Work and Life sections, keeps #hash routing in sync
    slideshow.js         the "Sights" photo slideshow on the Life page, loads captions from data/slides.json
  images/                 photos used in the Sights slideshow (see below)
data/
  slides.json            slideshow photo list: {src, cap} pairs, in display order
```

## Images

`assets/images/` needs these 15 files (filenames must match exactly — referenced from `data/slides.json`):

| filename | caption |
|---|---|
| `ropes-course.jpg` | an old ropes course, fenced off |
| `ibm-butterfly.jpg` | a butterfly outside my IBM window |
| `koi-sidewalk.jpg` | koi, painted on the sidewalk |
| `prairyerth-flowers.jpg` | PrairyErth, left in the flowers |
| `sunset-cedars.jpg` | sunset through the cedars |
| `cat-sketch.jpg` | my pencil sketch of a cat |
| `look-behind.jpg` | they look behind at every step |
| `hobbit-library.jpg` | hobbit house little library |
| `shoot-your-shot.jpg` | shoot your shot |
| `bay-ocean.jpg` | one bay, one ocean, one guy and his infinite thoughts |
| `kid-paintings-fence.jpg` | fence of elementary kid paintings |
| `love-spraypainted.jpg` | love, spray-painted |
| `fu-pomelo.jpg` | 福, on a pomelo |
| `morals-plaque.jpg` | self-assured morals plaque, the irony, evil ai |
| `bamboo-carving.jpg` | names, loves, and forevers carved into bamboo, Duke Gardens |

File extension can be `.jpg`, `.png`, etc. — just update the matching `src` in `data/slides.json` if it's not `.jpg`.
