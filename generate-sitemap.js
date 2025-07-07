// generate-sitemap.js
// Usage: node generate-sitemap.js
// Generates sitemap.xml in /public based on your main routes

const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://visionsubsea.com';
const ROUTES = [
  '/',
  '/about',
  '/assetInfrastructure',
  '/marineResponse',
  '/waterTank',
  '/nearshoreMooring',
  '/sonarImaging',
  '/habitatSurvey',
  '/consulting',
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${ROUTES.map(route => `  <url>\n    <loc>${BASE_URL}${route}</loc>\n  </url>`).join('\n')}\n</urlset>\n`;

const outputPath = path.join(__dirname, 'public', 'sitemap.xml');
fs.writeFileSync(outputPath, sitemap, 'utf8');
console.log('Sitemap generated at', outputPath);
