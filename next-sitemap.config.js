// next-sitemap.config.js

const defaultSiteUrl = 'https://www.luigimoccia.com';  // Default to .com

module.exports = {
  siteUrl: defaultSiteUrl, // Default `siteUrl` for sitemap
  generateRobotsTxt: true,
  outputDir: './public',
  changefreq: 'monthly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/api/*', '/secret-page'],
  alternateRefs: [
    {
      href: 'https://www.luigimoccia.ca',
      hreflang: 'en-ca',
    },
    {
      href: 'https://www.luigimoccia.com',
      hreflang: 'en-us',
    },
  ],
  transform: async (config, path) => {
    const isCaDomain = typeof window !== 'undefined' && window.location.hostname.includes('ca');
    const siteUrl = isCaDomain ? 'https://www.luigimoccia.ca' : 'https://www.luigimoccia.com';

    return {
      loc: `${siteUrl}${path}`, // Set loc based on the current hostname
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};
