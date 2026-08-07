# Structured data (JSON-LD)

All schema lives in **`src/lib/schema.ts`**. There is one canonical business
node; every page references it by `@id` rather than restating it, and each page
adds only its own page-specific node.

## How a page gets schema

Templates generate it from entry frontmatter, so new content is covered with no
extra work:

| Page | Helper | Nodes emitted |
|---|---|---|
| Home | `homeGraph` | SecurityService+LocalBusiness, WebSite |
| Service pages (`/[slug]/`) | `serviceGraph` | Service, WebPage, BreadcrumbList |
| Geo page (localServicePages) | `localServiceGraph` | Service (scoped areaServed), BreadcrumbList |
| Articles (`/post/[slug]/`) | `articleGraph` | Article, BreadcrumbList |
| Blog index | `blogGraph` | Blog (+ BlogPosting refs), BreadcrumbList |
| FAQ page | `faqGraph` | FAQPage built from the `faqs` collection |
| Testimonials | `reviewsGraph` | Review nodes from the `reviews` collection |
| Contact / About / other statics | `contactGraph`, `pageGraph` | ContactPage / AboutPage / WebPage |

**Per-entry override:** set `jsonLdSchema` in an entry's frontmatter to raw JSON
and it replaces the generated graph entirely for that page.

## The business node

`SecurityService` + `LocalBusiness` (SecurityService is the most specific
accurate type for a licensed guard and investigations firm). Includes all three
offices, 13 counties served, PA Agency License No. 84, founding date 1990-08,
and the four regional contact lines.

Every value is taken from the site's own content — `src/config/site.ts`,
`Footer.astro`, and `contact/ContactOffices.astro`. If you change a phone number
or address on the site, change it here too.

## What is deliberately absent

No `aggregateRating`, no per-review `ratingValue`, no `openingHours`, and no
`JobPosting` on the employment page. **None of these are verified**, and
fabricated structured data is worse than none — it is the kind of thing that
earns a manual action in Search Console.

Add them only with real numbers from the client:

- **aggregateRating / ratingValue** — needs the real count and average from
  KRE's Google Business Profile. Genuine rich-result win once you have it.
- **openingHours** — the site says "24/7 Scheduling Available," which is a
  scheduling claim, not verified business hours. Confirm before encoding.
- **JobPosting** — needs real openings with titles, dates, and locations.

## Verifying

After a deploy, check a few page types in Google's Rich Results Test and the
Schema Markup Validator. A local check that every block parses:

```bash
npm run build
grep -ro 'application/ld+json' dist | wc -l
```

33 of 34 built pages carry a block. The one without is the
`/copy-of-in-home-security-1/` redirect stub, which correctly has none.
