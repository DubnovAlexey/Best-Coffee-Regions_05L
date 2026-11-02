# The Best Coffee Regions

**English** · [עברית](README.he.md) · [Русский](README.ru.md)

A page about six famous coffee regions — Brazil, Colombia, India, Ethiopia, Costa Rica and Kenya. The cards are rendered from a data file, and each region has its own music.

**Live demo:** https://dubnovalexey.github.io/Best-Coffee-Regions_05L/

## How it is built

- `js/data.js` — the regions: name, description, track and a link to read more.
- `js/render.js` — builds the cards from the data; `js/audio-player.js` — the music; `js/main.js` connects everything.

## Music

Each region plays its own track.

- India — Carbon Based Lifeforms, "Photosynthesis"
- Kenya — Kazdoura, "Khayal"

The music belongs to its authors and is used only in this non-commercial study project. If you hold the rights to a track and want it removed, please open an issue and I will remove it.

## Tech stack

HTML5 · CSS3 · JavaScript (DOM, data-driven rendering) · `<audio>` · GitHub Pages

## Run locally

Open `index.html` in a browser.

## Roadmap

- An interactive SVG world map with the coffee belt.
- A taste profile for each region (acidity, body, sweetness), a filter and a short "which coffee suits me" quiz.
