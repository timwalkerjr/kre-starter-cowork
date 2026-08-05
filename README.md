# KRE Security LLC. — Tokenized Astro Starter

This repository is the tokenized KRE Security starter site: a T. Walker Co schema pack v1.1,
collection-driven Astro build. It is the **source-of-truth repo** for the "KRE Security LLC. cowork"
Pagesmith project (id `d22f750a-df91-4073-9ee7-acbb25f32343`).

## What this is

- Astro site driven by content collections (`src/content.config.ts`), not one-off page files.
- Content migrated verbatim from the live `kre-security-llc` site on 2026-08-05.
- Build verified locally: 34 pages generated successfully.

## Collections

| Collection | Count | Notes |
|---|---|---|
| services | 17 | 2 draft (`first-aid-training`, `security-services-pa`) |
| localServicePages | 1 | `armed-security-guards-quakertown-pa` |
| articles | 7 | Blog/news posts |
| faqs | 10 | Private investigations FAQ set |
| reviews | 4 | Client testimonials |

## Dynamic templates

Pages are generated from content collection entries via these templates — do not recreate
per-page `.astro` files for services, local service pages, or articles:

- `src/pages/[...slug].astro` — services + local service pages
- `src/pages/post/[...slug].astro` — articles
- `src/pages/blog.astro` — article listing
- `src/pages/testimonials.astro` — reviews listing
- `src/components/security-company-faq/FaqContent.astro` — FAQ accordion

## ⚠️ Important: Pagesmith is the deploy source of truth

**"Export from Pagesmith" overwrites this repo wholesale.** Do not hand-edit files here while
Pagesmith is the source of truth for the live site — any local changes will be lost on the next
export. Before clicking **Pull from GitHub** in Pagesmith, re-verify that `main`'s tip commit is
the one you expect; a stale or unexpected tip is a sign this repo has drifted from what Pagesmith
thinks is deployed.

If you need to make a content or template change:
1. Confirm whether Pagesmith or this repo is currently authoritative.
2. Make the change in the authoritative system first.
3. Sync the other side deliberately, not by accident.
