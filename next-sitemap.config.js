// next-sitemap.config.js
module.exports = {
  siteUrl: process.env.CANONICAL_URL_COM || 'https://www.luigimoccia.com',
  generateRobotsTxt: true,
  outputDir: './public', // Specify the output directory
  changefreq: 'monthly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/api/*', '/secret-page'], // Adjust exclusions as needed
  alternateRefs: [
    {
      href: process.env.CANONICAL_URL_CA || 'https://www.luigimoccia.ca',
      hreflang: 'en-ca',
    },
    {
      href: process.env.CANONICAL_URL_COM || 'https://www.luigimoccia.com',
      hreflang: 'en-us',
    },
  ],
  additionalPaths: async (config) => [
    { loc: '/', changefreq: 'monthly', priority: 1.0 },
    { loc: '/about', changefreq: 'monthly', priority: 0.7 },
    { loc: '/contact', changefreq: 'monthly', priority: 0.7 },
    { loc: '/services', changefreq: 'monthly', priority: 0.7 },
  ],
  transform: async (config, path) => {
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};
