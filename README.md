# JLB Outdoor Solutions — Website

A fast, static React site for JLB Outdoor Solutions, built with Vite + Tailwind CSS.
Includes a ballpark cost estimator, portfolio, testimonials, and contact form — all
content-managed through plain JSON files so you can update it without touching
component code.

## 1. First-time setup (do this once)

You'll need [Node.js](https://nodejs.org) installed (version 18 or newer — the free LTS download is fine).

```bash
cd jlb-outdoor-solutions
npm install
```

This downloads all the packages the site depends on (React, Vite, Tailwind, etc.) into a
`node_modules` folder. It only needs to happen once, or again any time you pull code onto
a new computer.

## 2. Run it locally while you work

```bash
npm run dev
```

This starts a local server (usually `http://localhost:5173`) and live-reloads as you edit
files. Leave this running in a terminal while you make changes.

## 3. Deploy to GitHub Pages

**One-time setup:**

1. Create a new GitHub repository (e.g. `jlb-outdoor-solutions`).
2. Push this folder to it:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/jlb-outdoor-solutions.git
   git push -u origin main
   ```
3. In the repo on GitHub: **Settings → Pages → Source → GitHub Actions**. That's it.
4. Open `vite.config.js` and confirm the `base` line matches your repo name exactly:
   ```js
   base: '/jlb-outdoor-solutions/',
   ```
   If you rename the repo, update this to match (with slashes on both ends), or the site's
   CSS/JS won't load once deployed.

**After that, deploying is automatic:** every time you push to the `main` branch, a GitHub
Action builds the site and publishes it — no `npm run deploy` needed. You can watch it run
under the **Actions** tab of your repo. It usually finishes in under 2 minutes.

Your site will be live at:
`https://YOUR-USERNAME.github.io/jlb-outdoor-solutions/`

### Using a custom domain instead
If you buy a domain (e.g. `jlboutdoorsolutions.com`), set it up under **Settings → Pages →
Custom domain**, then change `vite.config.js` to `base: '/'`.

## 4. Updating content — no code required

All editable content lives in `src/data/`. Edit these files, save, commit, and push — the
site rebuilds automatically. You can edit these directly on GitHub.com (open the file, click
the pencil icon) if you don't want to open a code editor.

### `src/data/siteConfig.json`
Business name, phone, email, hours, service area text. Edit this whenever your contact info
changes.

### `src/data/services.json`
Every service and its estimator pricing. Each entry looks like:
```json
{
  "id": "concrete-flatwork",
  "name": "Concrete Flatwork",
  "lowRate": 7.5,
  "highRate": 10.5,
  "minJob": 600,
  ...
}
```
Change `lowRate` / `highRate` any time your pricing changes — the estimator updates
automatically, no other code needs to change. `minJob` is a price floor so tiny jobs don't
quote unrealistically low.

### `src/data/portfolio.json`
Each project is a JSON object. To add a finished job:
1. Drop a photo into `public/portfolio/` (e.g. `smith-driveway.jpg`).
2. Add an entry:
   ```json
   {
     "id": "smith-driveway",
     "title": "Smith Family Driveway",
     "service": "concrete-flatwork",
     "location": "St. Louis, MO",
     "description": "600 sq ft driveway replacement, broom finish.",
     "imageUrl": "/portfolio/smith-driveway.jpg"
   }
   ```
   Leave `imageUrl` as `""` (empty) and the site shows a clean "Photo coming soon" placeholder
   instead of a broken image — so it's safe to add project entries before you have the photo.

### `src/data/testimonials.json`
Same idea — name, location, service, quote, and a 1–5 star rating.

## 5. A note on the contact form

Since GitHub Pages only serves static files (no backend server), the contact form opens the
visitor's email app with the details pre-filled — it does **not** silently submit anywhere.
This works everywhere with zero setup, but if you'd rather receive submissions directly
without the visitor needing an email client open, look into a free form backend like
[Formspree](https://formspree.io) (a few lines of change in `src/components/Contact.jsx`) —
happy to wire that up if you want it later.

## 6. Project structure

```
src/
  components/     — page sections (Header, Hero, Services, Estimator, etc.)
  data/           — all editable content (JSON)
  assets/         — logo
public/
  portfolio/      — drop project photos here
```

## 7. Updating the ballpark pricing methodology

The rates in `services.json` were set using 2026 Midwest market data for each trade, with a
15% markup applied on top of baseline market averages, and are meant as a starting point —
revisit them once you have real job costs under your belt. The estimator always shows a
disclaimer that these are ballpark numbers only; don't remove that banner in
`Estimator.jsx` — it's there to protect you from a customer holding you to a number that
was never a real quote.
