# ruanvdmerwe.github.io

Personal site for Ruan van der Merwe, built with [Astro](https://astro.build).
Auto-deploys to GitHub Pages from the `master` branch.

## Local development

Requires Node 20+ and npm 10+.

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # writes dist/ — runs astro check + astro build
npm run preview    # serve the production build locally
```

## One-time GitHub Pages setup

This site deploys via GitHub Actions, not from a branch. After the first push of
this new tree, go to **Settings → Pages** on the GitHub repo and:

1. Under **Build and deployment → Source**, choose **GitHub Actions**.
2. There is no second step. Push to `master`; the `Deploy to GitHub Pages`
   workflow installs, builds, and publishes to `https://ruanvdmerwe.github.io`.

The old `gh-pages` branch (if any) is no longer used and can be deleted.

## Adding content

Every kind of content is just a Markdown file in `src/content/<collection>/`.
Schemas in `src/content.config.ts` validate frontmatter at build time, so typos
get caught early.

### Blog post

Create `src/content/blog/<slug>.md` (or `.mdx` if you want to embed components):

```md
---
title: "Post title"
description: "One-sentence summary used for SEO and previews."
pubDate: 2026-06-01
updatedDate: 2026-06-03   # optional
tags: ["meta-learning", "speech"]
draft: false              # set true to hide from production
math: true                # set true to load KaTeX on this page
---

Body in Markdown. Inline math like $\nabla_\theta \mathcal{L}$ and display math:

$$
\theta_{t+1} = \theta_t - \eta \nabla_\theta \mathcal{L}(\theta_t)
$$
```

### Paper

Create `src/content/papers/<slug>.md`:

```md
---
title: "Paper title"
authors: ["Ruan van der Merwe", "Co-Author"]
venue: "Conference / Workshop / Journal name and pages"
year: 2025
type: conference        # or workshop | journal | preprint
selected: true          # show on the home page
order: 1                # tiebreaker among same-year papers
arxiv: "https://arxiv.org/abs/XXXX.XXXXX"
pdf: "/papers/my-paper.pdf"
code: "https://github.com/..."
doi: "https://doi.org/..."
bibtex: |
  @inproceedings{key2025,
    title = {Paper title},
    author = {van der Merwe, R. and Co-Author, A.},
    year = {2025}
  }
---

Abstract or short description goes here. This becomes the body shown under the
title on the papers page.
```

### Project

Create `src/content/projects/<slug>.md`:

```md
---
title: "Project name"
summary: "One- or two-sentence pitch."
role: "Your role"
period: "2024 — present"
selected: true              # show on home page
order: 1
tags: ["product", "speech"]
links:
  site: "https://example.com"
  code: "https://github.com/..."
  paper: "https://arxiv.org/abs/..."
  demo: "https://..."
---

Longer description in Markdown.
```

### Talk or media appearance

Create `src/content/talks/<slug>.md`:

```md
---
title: "Talk title"
event: "Conference or outlet name"
date: 2025-09-15
location: "City, Country"
type: talk                # or workshop | media | panel
link: "https://example.com/recording"
summary: "What you talked about, in one or two sentences."
---
```

### Updating the CV

Edit `src/data/cv.yaml`. The `/cv` page reads it at build time. The page has a
print-friendly stylesheet — `Cmd/Ctrl + P → Save as PDF` produces a clean
two-column resume.

## Tweaking the design

- Site title, description, author, email, social links: `src/consts.ts`.
- Colors and typography: CSS variables in `src/styles/global.css` + theme
  tokens in `tailwind.config.mjs`.
- Print rules for the CV: `src/styles/print.css`.

## What ships

- `/` &mdash; about + recent writing + selected papers + selected projects
- `/writing` &mdash; reverse-chronological post list, grouped by year
- `/writing/<slug>` &mdash; individual post with reading time and prev/next
- `/papers` &mdash; all publications with PDF / arXiv / code / BibTeX
- `/projects` &mdash; project list
- `/talks` &mdash; talks & media timeline
- `/cv` &mdash; long-form CV with print-friendly layout
- `/rss.xml` &mdash; RSS feed for blog posts
- `/sitemap-index.xml` &mdash; auto-generated sitemap
