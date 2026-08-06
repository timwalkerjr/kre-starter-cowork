/**
 * JSON-LD structured data for KRE Security LLC.
 *
 * One canonical business node lives here and every page references it by @id
 * instead of restating it. Page templates call the helpers below; a page can
 * still override completely by setting `jsonLdSchema` in its entry frontmatter.
 *
 * FACT DISCIPLINE — every value below is taken from the site's own content
 * (config/site.ts, Footer.astro, contact/ContactOffices.astro). Do NOT add
 * aggregateRating, review counts, opening hours, or certifications here unless
 * they are verified with the client. Absent structured data is fine; invented
 * structured data is a liability.
 */

import { SITE } from '@/config/site';

/** Canonical @id for the business node. Pages reference this rather than repeat it. */
export const ORG_ID = `${SITE.url}#organization`;

/** Counties KRE states it serves (home page Coverage section). */
const AREAS_SERVED = [
  'Berks County', 'Lehigh County', 'Montgomery County', 'Bucks County',
  'Schuylkill County', 'Lebanon County', 'Lancaster County', 'Dauphin County',
  'Carbon County', 'Northampton County', 'Chester County', 'Delaware County',
  'Philadelphia County',
].map((name) => ({ '@type': 'AdministrativeArea', name, addressRegion: 'PA' }));

/** The main office + branches, verified from contact/ContactOffices.astro. */
const LOCATIONS = [
  {
    '@type': 'Place',
    name: 'KRE Security Main Office',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '16600 Pottsville Pike',
      addressLocality: 'Hamburg',
      addressRegion: 'PA',
      postalCode: '19526',
      addressCountry: 'US',
    },
    telephone: '610-562-0971',
  },
  {
    '@type': 'Place',
    name: 'KRE Security LLC — Reading Office',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '530 Walnut Street, 1st Floor Ste. 2',
      addressLocality: 'Reading',
      addressRegion: 'PA',
      postalCode: '19601',
      addressCountry: 'US',
    },
    telephone: '610-562-0971',
  },
  {
    '@type': 'Place',
    name: 'Harrisburg / Susquehanna Valley Regional Office',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '3405 North 6th Street, Suite 204',
      addressLocality: 'Harrisburg',
      addressRegion: 'PA',
      postalCode: '17110',
      addressCountry: 'US',
    },
    telephone: '717-480-2961',
    faxNumber: '484-660-3571',
  },
];

/**
 * The business node. SecurityService is a LocalBusiness subtype, which is the
 * most specific accurate type for a licensed guard / investigations firm.
 */
export function organizationNode(siteUrl: string) {
  return {
    '@type': ['SecurityService', 'LocalBusiness'],
    '@id': ORG_ID,
    name: SITE.name,
    legalName: 'KRE Security LLC.',
    description: SITE.description,
    url: siteUrl,
    telephone: '610-562-0971',
    email: 'scheduling@kresecurity.com',
    foundingDate: '1990-08',
    address: LOCATIONS[0].address,
    location: LOCATIONS,
    areaServed: AREAS_SERVED,
    sameAs: [SITE.socials.facebook, SITE.socials.facebook_investigations],
    // PA Private Detective Act license, stated on the site.
    identifier: {
      '@type': 'PropertyValue',
      name: 'Pennsylvania Agency License',
      value: 'No. 84',
    },
    contactPoint: [
      { '@type': 'ContactPoint', telephone: '610-562-0971', contactType: 'customer service', areaServed: 'US', availableLanguage: 'English' },
      { '@type': 'ContactPoint', telephone: '717-450-7632', contactType: 'customer service', name: 'Lancaster / Lebanon County' },
      { '@type': 'ContactPoint', telephone: '717-480-2961', contactType: 'customer service', name: 'Harrisburg / Susquehanna Valley' },
      { '@type': 'ContactPoint', telephone: '570-399-1010', contactType: 'customer service', name: 'Schuylkill County' },
    ],
  };
}

/** Breadcrumb trail. Pass [{name, path}] with paths already trailing-slashed. */
export function breadcrumbNode(siteUrl: string, crumbs: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: new URL(c.path, siteUrl).href,
    })),
  };
}

/** Wrap nodes in a @graph so one script tag carries the whole page's data. */
export function graph(siteUrl: string, nodes: object[]) {
  return { '@context': 'https://schema.org', '@graph': [organizationNode(siteUrl), ...nodes] };
}

/** A service offered by the firm (root-level service pages). */
export function serviceGraph(siteUrl: string, opts: {
  name: string; description?: string; path: string; image?: string;
}) {
  const url = new URL(opts.path, siteUrl).href;
  return graph(siteUrl, [
    {
      '@type': 'Service',
      '@id': `${url}#service`,
      name: opts.name,
      ...(opts.description ? { description: opts.description } : {}),
      ...(opts.image ? { image: opts.image } : {}),
      serviceType: opts.name,
      provider: { '@id': ORG_ID },
      areaServed: AREAS_SERVED,
      url,
    },
    { '@type': 'WebPage', '@id': url, url, name: opts.name, isPartOf: { '@id': `${siteUrl}#website` } },
    breadcrumbNode(siteUrl, [{ name: 'Home', path: '/' }, { name: opts.name, path: opts.path }]),
  ]);
}

/** A geo/local service page — same as a service, but scoped to one place. */
export function localServiceGraph(siteUrl: string, opts: {
  name: string; description?: string; path: string; image?: string; areaName?: string;
}) {
  const url = new URL(opts.path, siteUrl).href;
  return graph(siteUrl, [
    {
      '@type': 'Service',
      '@id': `${url}#service`,
      name: opts.name,
      ...(opts.description ? { description: opts.description } : {}),
      ...(opts.image ? { image: opts.image } : {}),
      provider: { '@id': ORG_ID },
      areaServed: opts.areaName
        ? { '@type': 'Place', name: opts.areaName, address: { '@type': 'PostalAddress', addressRegion: 'PA', addressCountry: 'US' } }
        : AREAS_SERVED,
      url,
    },
    breadcrumbNode(siteUrl, [{ name: 'Home', path: '/' }, { name: opts.name, path: opts.path }]),
  ]);
}

/** A news/blog article. */
export function articleGraph(siteUrl: string, opts: {
  headline: string; description?: string; path: string; image?: string;
  datePublished?: string; author?: string;
}) {
  const url = new URL(opts.path, siteUrl).href;
  return graph(siteUrl, [
    {
      '@type': 'Article',
      '@id': `${url}#article`,
      headline: opts.headline,
      ...(opts.description ? { description: opts.description } : {}),
      ...(opts.image ? { image: opts.image } : {}),
      ...(opts.datePublished ? { datePublished: opts.datePublished } : {}),
      mainEntityOfPage: url,
      publisher: { '@id': ORG_ID },
      author: opts.author ? { '@type': 'Organization', name: opts.author } : { '@id': ORG_ID },
      url,
    },
    breadcrumbNode(siteUrl, [
      { name: 'Home', path: '/' },
      { name: 'News', path: '/blog/' },
      { name: opts.headline, path: opts.path },
    ]),
  ]);
}

/** The blog index. */
export function blogGraph(siteUrl: string, posts: { title: string; path: string }[]) {
  const url = new URL('/blog/', siteUrl).href;
  return graph(siteUrl, [
    {
      '@type': 'Blog',
      '@id': `${url}#blog`,
      name: 'KRE Security News',
      url,
      publisher: { '@id': ORG_ID },
      blogPost: posts.map((p) => ({ '@type': 'BlogPosting', headline: p.title, url: new URL(p.path, siteUrl).href })),
    },
    breadcrumbNode(siteUrl, [{ name: 'Home', path: '/' }, { name: 'News', path: '/blog/' }]),
  ]);
}

/** The FAQ page. Answers must be plain text, not markup. */
export function faqGraph(siteUrl: string, qas: { question: string; answer: string }[]) {
  const url = new URL('/security-company-faq/', siteUrl).href;
  return graph(siteUrl, [
    {
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      mainEntity: qas.map((qa) => ({
        '@type': 'Question',
        name: qa.question,
        acceptedAnswer: { '@type': 'Answer', text: qa.answer },
      })),
    },
    breadcrumbNode(siteUrl, [{ name: 'Home', path: '/' }, { name: 'FAQ', path: '/security-company-faq/' }]),
  ]);
}

/**
 * Testimonials. Individual Review nodes only — NO aggregateRating and no
 * per-review ratingValue, because neither is verified. Adding either would be
 * fabricated review data.
 */
export function reviewsGraph(siteUrl: string, reviews: { author: string; body: string }[]) {
  const url = new URL('/testimonials/', siteUrl).href;
  return graph(siteUrl, [
    {
      '@type': 'WebPage',
      '@id': url,
      url,
      name: 'Testimonials',
      mainEntity: { '@id': ORG_ID },
    },
    ...reviews.map((r, i) => ({
      '@type': 'Review',
      '@id': `${url}#review-${i + 1}`,
      itemReviewed: { '@id': ORG_ID },
      author: { '@type': 'Person', name: r.author },
      reviewBody: r.body,
    })),
    breadcrumbNode(siteUrl, [{ name: 'Home', path: '/' }, { name: 'Testimonials', path: '/testimonials/' }]),
  ]);
}

/** Contact page. */
export function contactGraph(siteUrl: string) {
  const url = new URL('/contact/', siteUrl).href;
  return graph(siteUrl, [
    { '@type': 'ContactPage', '@id': url, url, name: 'Contact KRE Security', mainEntity: { '@id': ORG_ID } },
    breadcrumbNode(siteUrl, [{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact/' }]),
  ]);
}

/** Home page — business node plus the WebSite node that others reference. */
export function homeGraph(siteUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      organizationNode(siteUrl),
      { '@type': 'WebSite', '@id': `${siteUrl}#website`, url: siteUrl, name: SITE.name, publisher: { '@id': ORG_ID } },
    ],
  };
}

/** A simple content page: WebPage + breadcrumb, referencing the business. */
export function pageGraph(siteUrl: string, opts: { name: string; path: string; description?: string; type?: string }) {
  const url = new URL(opts.path, siteUrl).href;
  return graph(siteUrl, [
    {
      '@type': opts.type ?? 'WebPage',
      '@id': url,
      url,
      name: opts.name,
      ...(opts.description ? { description: opts.description } : {}),
      mainEntity: { '@id': ORG_ID },
    },
    breadcrumbNode(siteUrl, [{ name: 'Home', path: '/' }, { name: opts.name, path: opts.path }]),
  ]);
}
