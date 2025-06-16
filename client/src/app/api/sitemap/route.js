import { NextResponse } from 'next/server';

export async function GET() {
  // Base URL of your website
  const baseUrl = 'https://ssnlc.in';
  
  // Define your routes - you can make this dynamic by fetching from your API
  const routes = [
    { url: '/', lastmod: new Date().toISOString().split('T')[0], changefreq: 'daily', priority: '1.0' },
    { url: '/about', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: '0.7' },
    { url: '/academics', lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: '0.8' },
    { url: '/events', lastmod: new Date().toISOString().split('T')[0], changefreq: 'daily', priority: '0.8' },
    { url: '/contact', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: '0.7' },
    { url: '/faculty', lastmod: new Date().toISOString().split('T')[0], changefreq: 'monthly', priority: '0.7' },
    { url: '/gallery', lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: '0.6' },
    { url: '/announcements', lastmod: new Date().toISOString().split('T')[0], changefreq: 'daily', priority: '0.8' },
    { url: '/important-links', lastmod: new Date().toISOString().split('T')[0], changefreq: 'weekly', priority: '0.6' },
  ];

  // Generate sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  // Return sitemap XML with proper content type
  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
} 