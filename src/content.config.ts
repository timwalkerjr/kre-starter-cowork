// T. Walker Co canonical content collections — Pagesmith/Astro schema pack v1.1 (KRE Security)
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

const siteCategories = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/site-categories' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string().optional(),
    parent: z.string().optional(),
    ...syncFields,
  }),
});

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

const serviceAreas = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/service-areas' }),
  schema: z.object({
    title: z.string(),
    category: z.string().optional(),
    cityName: z.string().optional(),
    ...heroFields,
    shortSummary: z.string().optional(),
    mainImage: z.string().optional(),
    coverageList: z.string().optional(),
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

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    category: z.string().optional(),
    ...heroFields,
    shortSummary: z.string().optional(),
    mainImage: z.string().optional(),
    projectDate: z.coerce.date().optional(),
    gallery: z.array(z.string()).optional(),
    testimonial: z.string().optional(),
    testimonialAuthor: z.string().optional(),
    servicePerformed: z.string().optional(),
    serviceArea: z.string().optional(),
    overlayColor: z.string().optional(),
    ...ctaFaqFields,
    ...seoFields,
    ...syncFields,
  }),
});

const genPages = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/gen-pages' }),
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

const teamMembers = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/team-members' }),
  schema: z.object({
    title: z.string(),
    category: z.string().optional(),
    ...heroFields,
    jobTitle: z.string().optional(),
    bioSummary: z.string().optional(),
    mainImage: z.string().optional(),
    credentials: z.string().optional(),
    email: z.string().email().optional(),
    phone: z.string().optional(),
    twitterLink: z.string().url().optional(),
    facebookLink: z.string().url().optional(),
    linkedinLink: z.string().url().optional(),
    callToAction: z.string().optional(),
    ...seoFields,
    ...syncFields,
  }),
});

/* ---------- data collections (no pages generated) ---------- */

const sitewideInfo = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/sitewide-info' }),
  schema: z.object({
    legalBusinessName: z.string().optional(),
    phone: z.string().optional(),
    email: z.string().email().optional(),
    address: z.string().optional(),
    logo: z.string().optional(),
    logoDark: z.string().optional(),
    defaultCtaHtml: z.string().optional(),
    defaultFaqsHtml: z.string().optional(),
    valuePropsHtml: z.string().optional(),
    yearFounded: z.number().int().optional(),
    licenseNumbers: z.string().optional(),
    hoursOfOperation: z.string().optional(),
    emergencyResponseText: z.string().optional(),
    shortBrandStatement: z.string().optional(),
    longBrandStatement: z.string().optional(),
    socialFacebook: z.string().url().optional(),
    socialInstagram: z.string().url().optional(),
    socialYoutube: z.string().url().optional(),
    socialGoogleBusiness: z.string().url().optional(),
    reviewSubmissionGoogle: z.string().url().optional(),
    reviewSubmissionFacebook: z.string().url().optional(),
    mapEmbedUrl: z.string().url().optional(),
    trustBadgesHtml: z.string().optional(),
    airtableRecordId: z.string().optional(),
  }),
});

const brandVoice = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/brand-voice' }),
  schema: z.object({
    coreVoice: z.string().optional(),
    toneSummary: z.string().optional(),
    style: z.string().optional(),
    targetAudience: z.string().optional(),
    keyMessages: z.string().optional(),
    writingExamples: z.string().optional(),
    toneAdjectives: z.string().optional(),
    vocabulary: z.string().optional(),
    signaturePhrases: z.string().optional(),
    pageStructure: z.string().optional(),
    seoConventions: z.string().optional(),
    airtableRecordId: z.string().optional(),
  }),
});

export const collections = {
  siteCategories,
  services,
  serviceAreas,
  localServicePages,
  articles,
  projects,
  genPages,
  faqs,
  reviews,
  teamMembers,
  sitewideInfo,
  brandVoice,
};
