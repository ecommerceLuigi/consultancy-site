// next-sitemap.js
module.exports = {
    siteUrl: process.env.CANONICAL_URL_COM || 'https://www.luigimoccia.com',
    generateRobotsTxt: true, // Automatically generate robots.txt
    changefreq: 'monthly',
    priority: 0.7,
    sitemapSize: 5000,
    exclude: ['/api/*', '/secret-page'], // Add any paths to exclude from the sitemap
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
  };
  