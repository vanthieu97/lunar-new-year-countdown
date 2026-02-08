# Lunar New Year Countdown

A single-page web app that counts down to the next Lunar New Year in your chosen country's timezone, then shows a fireworks animation and the first three days of the festival.

## Features

- **Country selection** — Choose a country that celebrates Lunar New Year (China, Vietnam, South Korea, Singapore, and more).
- **Timezone-aware countdown** — Countdown is based on midnight in the selected country's timezone.
- **Weeks remaining** — Displays how many full weeks are left until the next Lunar New Year (above the main countdown).
- **At midnight** — When the countdown reaches zero, a fireworks animation plays.
- **Days 1–3** — After the fireworks, the app shows "First / Second / Third day of Lunar New Year" with 初一 / 初二 / 初三.
- **From day 4** — Shows the countdown to the *next* Lunar New Year and the weekly count to that date.

## How to run

No build step. Open the HTML file in a browser:

```bash
cd lunar-new-year-countdown
# Then open index.html in your browser, or use a local server:
npx serve .
# or
python3 -m http.server 8000
```

Then visit `http://localhost:8000` (or the URL shown by `serve`).

## Testing when countdown hits zero

Use URL query parameters to simulate LNY so you can test the countdown, fireworks, and Day 1–3:

| URL | What you see |
|-----|----------------|
| `?test=midnight` | **10-second countdown** (00:00:00:10 → 0), then **fireworks** and sound, then **First day** view. |
| `?test=day1` | First day of Lunar New Year (初一). |
| `?test=day2` | Second day (初二). |
| `?test=day3` | Third day (初三). |

Example: `http://localhost:3000/?test=midnight` — you’ll see the countdown reach zero, then the celebration. Tap or click to hear the sound. Change the country to test different languages.

## Files

- `index.html` — Page structure and country selector.
- `styles.css` — Red & gold Lunar New Year theme and layout.
- `script.js` — Countdown logic, timezones, LNY dates, fireworks, and day 1/2/3 handling.

Lunar New Year dates used for the countdown are fixed for 2025–2036 (Gregorian). Timezones use IANA names (e.g. `Asia/Shanghai`, `Asia/Ho_Chi_Minh`).
