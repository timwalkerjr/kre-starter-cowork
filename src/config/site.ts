export const SITE = {
  name: 'KRE Security LLC.',
  title: 'KRE Security | Security Companies PA | Hamburg, PA',
  description: 'Qualified, educated and professional security services protection, and investigation services for Berks, Lehigh, Montgomery, Bucks county and surrounding areas.',
  lang: 'en',
  url: 'https://www.kresecurity.com/',
  twitterHandle: '@kresecurity',
  socials: {
    facebook: 'https://www.facebook.com/KRE-Security-LLC-105764734683407',
    facebook_investigations: 'https://www.facebook.com/KREsecinvestigations/',
  },
} as const;

export type SiteConfig = typeof SITE;
