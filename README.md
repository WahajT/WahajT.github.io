# Wahaj Tahir — Portfolio

Personal portfolio, rebuilt from a purchased HTML template into a fast,
SEO-first **Astro** static site. Deploys to GitHub Pages
(`https://wahajt.github.io`) via GitHub Actions.

## Stack

| Concern | Choice |
| --- | --- |
| Framework | [Astro](https://astro.build) 5 — zero JS by default, HTML pre-rendered |
| Styling | Plain CSS + custom-property design tokens (`src/styles/`) |
| Content | Typed content collection for project case studies (`src/content/projects/`) |
| Images | `astro:assets` → AVIF/WebP, responsive, dimensioned |
| Fonts | Self-hosted **Inter Variable** (`@fontsource-variable/inter`, latin subset) |
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
- **`src/data/experience.ts`** — every job title, date range and achievement
  bullet is a reconstructed placeholder. Replace with real details; lead each
  bullet with impact + a number.
- **`src/content/projects/phonecheck.md` / `mobocheck.md`** — replace the
  bracketed metrics and the `TODO` paragraphs with real figures and context.
- **`public/resume.pdf`** — currently a 1-page placeholder. Drop in the real CV.
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
