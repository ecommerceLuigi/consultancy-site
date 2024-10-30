// next-sitemap.config.js
module.exports = {
  siteUrl: process.env.CANONICAL_URL_COM || 'https://www.luigimoccia.com', // Ensure this is the correct URL
  generateRobotsTxt: true,
  changefreq: 'monthly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/api/*', '/secret-page'], // Adjust this based on your needs
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
