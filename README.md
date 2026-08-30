# Wahaj Tahir — Portfolio

Personal portfolio, rebuilt from a purchased HTML template into a fast,
SEO-first **Astro** static site. Deploys to GitHub Pages
(`https://wahajt.github.io`) via GitHub Actions.

## Stack

| Concern | Choice |
| --- | --- |
| Framework | [Astro](https://astro.build) 5 — zero JS by default, HTML pre-rendered |
| Styling | Plain CSS + custom-property design tokens (`src/styles/tokens.css`) — "editorial premium" direction: display headings, section watermark numerals, film-grain texture, soft depth |
| Theme | Follows the visitor's OS `prefers-color-scheme` — no toggle. Brand accent `#7338CF` in both modes (nudged to `#b491ec` for accent *text* on dark so it clears WCAG AA) |
| Content | Typed content collection for project case studies (`src/content/projects/`) |
| Images | `astro:assets` → WebP, responsive, dimensioned |
| Fonts | Self-hosted variable fonts, latin subset only: **Space Grotesk** (display) + **Inter** (body) |
| Icons | Inline SVG (`src/components/Icon.astro`) — no icon font |
| SEO | `src/components/Seo.astro` — per-page title/OG/Twitter + JSON-LD; `@astrojs/sitemap` |
| Contact | [Web3Forms](https://web3forms.com) (static-friendly) with a `mailto:` fallback |
| Hosting | GitHub Pages, deployed by `.github/workflows/deploy.yml` |

## Local development

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # → dist/
npm run preview    # serve the production build
npm run og         # regenerate public/og/*.png + favicons from scripts/generate-og.mjs
```

## Editing content

Everything is data-driven — no need to touch components for normal updates.

| What | Where |
| --- | --- |
| Name, headline, availability, socials, résumé path, contact key | `src/data/site.ts` |
| Work history (timeline) | `src/data/experience.ts` |
| Skills (grouped) | `src/data/skills.ts` |
| Testimonials | `src/data/testimonials.ts` |
| Project case studies | `src/content/projects/*.md` (frontmatter + Markdown body) |
| Images | `src/assets/**` (imported), static files in `public/**` |

### ⚠️ Placeholders to replace before publishing

Search the repo for `TODO(wahaj)`. The important ones:

- **`src/data/site.ts`** — confirm `location`, tune the `availability` wording,
  paste a **Web3Forms** access key (`web3formsKey`) to enable the contact form,
  add a Google Search Console token in `src/layouts/Base.astro`.
- **`src/data/site.ts` → `aboutMedia`** — the About section has a 16:9 media
  panel. Default is a placeholder; set `type: 'video'` (+ `src`, `poster`) or
  `type: 'image'` (+ `src`) and drop the file in `/public`. Aim for a 10–20s,
  &lt;5 MB, H.264 MP4.
- **`src/data/site.ts` → `lookingFor` / `responseTime` / `contactReasons`** —
  the "What I'm looking for" block and the contact form's reason dropdown.
  Make every line in `lookingFor` accurate to your actual search (notice
  period and work-eligibility rows are placeholders).
- **Brand logo** — `src/assets/logo-mark.png` (WT monogram) is used in the
  header and footer; `logo-full.png` is the full lockup if you want it
  elsewhere. Replace with a crisper/transparent export (ideally SVG) when you
  have one.
- **`src/data/experience.ts` / `skills.ts`** — now populated from the résumé.
  Add hard numbers to the achievement bullets where you have measured them
  (only Selteq has one so far).
- **`src/content/projects/phonecheck.md` / `mobocheck.md`** — narrative and
  stack are aligned to the real roles; the `impact` bullets and a few context
  lines are still `TODO`. Also confirm the PhoneCheck / Mobocheck framing
  (product name vs client vs internal reference — see the comment in each file).
- **`src/data/site.ts`** — `lookingFor` notice-period and work-eligibility rows
  are guesses; confirm them.
- **`src/data/testimonials.ts`** — add `url`s to the LinkedIn recommendations.

## Deployment

1. Push to `main`.
2. In **Settings → Pages**, set **Source: GitHub Actions** (one time).
3. The workflow builds and publishes `dist/`.

For a custom domain: set `site` in `astro.config.mjs`, add `public/CNAME`, and
configure DNS.

## SEO checklist after first deploy

- [ ] Verify the site in [Google Search Console](https://search.google.com/search-console) and submit `sitemap-index.xml`.
- [ ] Test the social card with the [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) and [opengraph.xyz](https://www.opengraph.xyz).
- [ ] Run [PageSpeed Insights](https://pagespeed.web.dev) — target Performance ≥ 98, others 100.
- [ ] Validate the JSON-LD with the [Rich Results Test](https://search.google.com/test/rich-results).
- [ ] Add the URL to your GitHub profile, LinkedIn, and repo "About".
