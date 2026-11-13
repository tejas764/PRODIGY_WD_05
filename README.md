<p align="center">
  <a href="README.md"><strong>OVERVIEW</strong></a> &nbsp; · &nbsp;
  <a href="DEMO.md"><strong>DEMO & SCREENSHOTS</strong></a> &nbsp; · &nbsp;
  <a href="DEMO.md#demo-setup"><strong>SETUP & DEPLOYMENT</strong></a>
</p>

# Weather App

A browser weather lookup using OpenWeatherMap, with city search and optional device location.

**Stack:** HTML · CSS · JavaScript

[Features](#features) · [Run locally](#run-locally) · [Project structure](#project-structure) · [Current status](#current-status)

## Features

- Search current conditions by city
- Use browser geolocation with permission
- Display weather description, temperature in Celsius, humidity, and wind speed
- Show feedback for failed requests

## Run locally

```bash
git clone https://github.com/tejas764/PRODIGY_WD_05.git
cd PRODIGY_WD_05
```

Open `wd_05.html` in a browser. For a local HTTP preview, run `python -m http.server 8000` from the repository (requires Python), then visit http://localhost:8000/wd_05.html. No npm installation or build step is required.

## Project structure

| File | Purpose |
| --- | --- |
| [wd_05.html](wd_05.html) | Page layout and inline styles |
| [wd_05.js](wd_05.js) | Weather requests and geolocation |

## Current status

Configure your own OpenWeatherMap key in the `apiKey` setting in `wd_05.js` for local use. The committed key should be reviewed and rotated by its owner. Client-side keys are visible to visitors; a deployed version should use an appropriately restricted key or a server-side proxy. Location access requires localhost or HTTPS and browser permission. Internet access is required for weather data.

## Contributing

Keep changes focused, describe how to reproduce or verify them, and preserve existing attribution. Never include credentials or personal datasets in a contribution.
