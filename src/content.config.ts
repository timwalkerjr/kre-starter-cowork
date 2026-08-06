// T. Walker Co content collections — schema pack v1.1, TRIMMED for KRE Security.
// Only the 5 collections this client actually uses are defined: services,
// localServicePages, articles, faqs, reviews. The canonical 12-collection pack lives in
// the static-starter-pipeline skill; add a collection here only when the client needs it.
// Source of truth: schema pack v1.0 (Webflow "wmroofit-20260615" syncflowai schema, 2026-08-04),
// as landed on the Joseph A. Simon Pagesmith clone. See project docs schema-pack-notes.md and
// schema-pack-content.config.ts.md for the full field mapping and adaptation rationale.
// v1.1 additions (KRE build, 2026-08-05):
//   - heroFields gains heroBadge + heroTagline (KRE design uses status-dot badge text and a
//     secondary tagline in heroes; needed for verbatim migration fidelity).
//   - reviews gains authorContext (attribution line: role/company/location under the author name).
//   - articles gains displayDate + readingTime (legacy listing shows year-less date strings like
//     "Apr 3" and read-time labels; preserved verbatim rather than guessed into real dates).
// All other fields identical to v1.0. Canonical collection names kept so SGAI/publishflowai
// payloads work unchanged.

import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

/* ---------- shared field groups ---------- */

const seoFields = {
  seoTitle: z.string().optional(),            // 50-65 chars
  seoMetaDescription: z.string().optional(),  // 140-160 chars
  jsonLdSchema: z.string().optional(),        // raw JSON-LD string, injected verbatim
};

const heroFields = {
  heroBadge: z.string().optional(),           // short status/badge text above the h1 (KRE: "[ Fire Watch: Active ]")
  heroTitle: z.string().optional(),           // 6-12 word benefit headline, distinct from title
  heroSubtext: z.string().optional(),         // 1-2 sentence hero support copy
  heroTagline: z.string().optional(),         // optional secondary tagline line
};

const syncFields = {
  airtableRecordId: z.string().optional(),    // sync-state join key (syncflowai/publishflowai)
  draft: z.boolean().default(false),          // Astro-side addition; drip publishing support
};

const ctaFaqFields = {
  callToAction: z.string().optional(),        // pre-baked CTA HTML for the CTA section
  faqs: z.string().optional(),                // pre-baked FAQ HTML for the FAQ section
};

/* ---------- taxonomy ---------- */


/* ---------- core page-generating collections ---------- */

const services = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/services' }),
  // Body = long-form service page content.
  schema: z.object({
    title: z.string(),
    category: z.string().optional(),
    menuName: z.string().optional(),
    ...heroFields,
    shortSummary: z.string().optional(),
    mainImage: z.string().optional(),
    ...ctaFaqFields,
    ...seoFields,
    ...syncFields,
  }),
});


const localServicePages = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/local-service-pages' }),
  schema: z.object({
    title: z.string(),
    category: z.string().optional(),
    relatedServiceArea: z.string().optional(),
    ...heroFields,
    shortSummary: z.string().optional(),
    mainImage: z.string().optional(),
    ...ctaFaqFields,
    ...seoFields,
    ...syncFields,
  }),
});

const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    category: z.string().optional(),
    ...heroFields,
    shortSummary: z.string().optional(),
    featuredImage: z.string().optional(),
    publishedDate: z.coerce.date().optional(),
    displayDate: z.string().optional(),        // v1.1: verbatim legacy date label (may lack year)
    readingTime: z.string().optional(),        // v1.1: verbatim read-time label
    author: z.string().optional(),
    ...ctaFaqFields,
    ...seoFields,
    ...syncFields,
  }),
});



/* ---------- supporting content collections ---------- */

const faqs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/faqs' }),
  // The QUESTION is `title`; the answer is the markdown BODY.
  schema: z.object({
    title: z.string(),
    category: z.string().optional(),
    order: z.number().int().optional(),
    ...syncFields,
  }),
});

const reviews = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/reviews' }),
  // Body = review text.
  schema: z.object({
    title: z.string(),
    category: z.string().optional(),
    author: z.string().optional(),
    authorContext: z.string().optional(),      // v1.1: attribution line under the name (role/company/location)
    source: z.enum(['Google', 'Facebook', 'Yelp', 'Direct', 'Other']).optional(),
    reviewDate: z.coerce.date().optional(),
    rating: z.number().int().min(1).max(5).optional(),
    mainImage: z.string().optional(),
    service: z.string().optional(),
    serviceArea: z.string().optional(),
    ...syncFields,
  }),
});


/* ---------- data collections (no pages generated) ---------- */



export const collections = {
  services,
  localServicePages,
  articles,
  faqs,
  reviews,
};
