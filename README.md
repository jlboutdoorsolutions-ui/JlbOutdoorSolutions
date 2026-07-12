# JLB Outdoor Solutions — Website

A plain static React site. No database, no backend server, no login system.
Content lives in a few JSON files you edit directly. When you're ready to
publish a change, you rebuild and re-upload — that's it.

## What changed from the old version

The old project (the one in the zip you uploaded) was a full-stack app built
on a platform called **Manus** — React + a database + AWS file storage + its
own login/auth system, all wired to Manus's backend. It would not run
anywhere else without rebuilding that entire backend layer, and every photo
on the old site was a temporary stock placeholder hosted on Manus's own CDN,
not anything you controlled.

This version keeps the same design, pages, copy, and estimator math, but
strips out everything that depended on Manus: no database, no server, no
admin login. Testimonials, portfolio photos, and estimator pricing are now
plain files in `src/data/` and `public/images/` that you edit directly and
that live in your own project folder — nothing is hosted on someone else's
platform.

The tradeoff: there's no "submit a testimonial" button on the live site or
admin dashboard anymore, because that needs a server. You add content by
editing files and re-publishing. Since that's how you said you wanted to
work, that's the trade I made.

## Requirements

- [Node.js](https://nodejs.org) 18 or newer (includes `npm`)

## Getting started

```bash
npm install
npm run dev
```

This starts a local dev server (Vite will print a `localhost` URL) that
live-reloads as you edit files.

To build the production version (a folder of static HTML/CSS/JS you can
upload anywhere):

```bash
npm run build
```

This creates a `dist/` folder. That folder is your entire website.

## Editing content

### Testimonials

Edit `src/data/testimonials.json`. Each entry looks like:

```json
{
  "id": 4,
  "clientName": "Jane Smith",
  "location": "Wentzville, MO",
  "rating": 5,
  "review": "JLB redid our whole backyard...",
  "service": "Pavers",
  "featured": true
}
```

Only testimonials with `"featured": true` show up on the homepage. Give each
one a unique `id` (just the next number up).

### Portfolio photos

Edit `src/data/portfolio.json`, and drop the actual image files in
`public/images/portfolio/`. Reference them like `"imageUrl": "/images/portfolio/your-file.jpg"`.
`category` has to match one of the filter buttons on the Portfolio page
exactly (case-sensitive): `Pavers`, `Concrete Flatwork`, `Soil Health`,
`Seasonal Cleanup`, `Yard Installation & Grading`, `Lot Clearing & Skid Steer`,
`Snow Removal`.

### Other photos (hero banners, service images, logo)

All in `public/images/`, organized by folder (`hero/`, `services/`,
`logo/`). Every current image is a plain green placeholder that says
"REPLACE THIS IMAGE" and tells you the exact filename/path it's standing in
for — open any page in the dev server and you'll see exactly which
placeholder needs which photo. To swap one out, just replace the file at
that same path and keep the same filename (or update the filename in the
relevant page file under `src/pages/` if you rename it).

### Estimator pricing

Edit `src/data/estimator.json`. Each service has:

- `basePrice` — flat starting cost
- `pricePerUnit` — cost per sq ft (or per acre for lot clearing)
- `minUnits` / `maxUnits` — the slider's range
- `defaultUnits` — what it opens with

The tool shows a range, not one number: low = 85% of the calculated price,
high = 125%. If you want a tighter or wider spread, that multiplier is in
`src/pages/Estimator.tsx` (search for `0.85` and `1.25`) — it's a plain
number, easy to change.

### Business info (phone, email, hours, address)

Edit `src/data/site.json`. This one file feeds the header, footer, and
contact page, so you only have to update it in one place.

## The contact form

Since there's no backend, the form posts to a free third-party service
called [Formspree](https://formspree.io) instead of a database:

1. Sign up free at formspree.io and create a form.
2. It'll give you a URL like `https://formspree.io/f/xyzabcde`.
3. Paste that into `formspreeEndpoint` in `src/data/site.json`.

Free tier is 50 submissions/month, which is almost certainly more than
enough for an inbound contact form. Submissions land in your Formspree inbox
and can be forwarded to your email.

## Deploying

Once you run `npm run build`, the `dist/` folder is a complete static site.
The easiest hosts for this, all free for a simple business site:

- **Netlify** — drag and drop the `dist/` folder onto app.netlify.com
- **Vercel** — similar, connect it to a GitHub repo for auto-deploys on push
- **Cloudflare Pages** — same idea

Any of these will also let you point your own domain at it.

## Project structure

```
src/
  data/            <- the files you actually edit
    site.json
    testimonials.json
    portfolio.json
    estimator.json
  pages/           <- one file per page
  components/      <- Navigation, Footer, shared UI bits
public/
  images/          <- all photos, organized by folder
```
