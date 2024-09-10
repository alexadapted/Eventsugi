import type { GetServerSideProps, NextPage } from 'next'
import { services } from '~/utils/services'

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = 'https://www.eventsugi.com'

  const updatedAt = new Date()

  const pages = [
    {
      url: baseUrl,
      updatedAt,
      priority: 1
    },
    {
      url: baseUrl + '/about',
      updatedAt,
      priority: 0.8
    },
    {
      url: baseUrl + '/contact-us',
      updatedAt,
      priority: 0.8
    },
    {
      url: baseUrl + '/corporate-events',
      updatedAt,
      priority: 0.8
    },
    {
      url: baseUrl + '/digital-marketing',
      updatedAt,
      priority: 0.8
    },
    {
      url: baseUrl + '/digital-marketing/google-ads',
      updatedAt,
      priority: 0.8
    },
    {
      url: baseUrl + '/digital-marketing/seo',
      updatedAt,
      priority: 0.8
    },
    {
      url: baseUrl + '/digital-marketing/social-media',
      updatedAt,
      priority: 0.8
    },
    {
      url: baseUrl + '/privacy',
      updatedAt,
      priority: 0.8
    },
    {
      url: baseUrl + '/services',
      updatedAt,
      priority: 0.8
    },
    ...services
      .filter(s => s.key !== 'digital-marketing')
      .map(s => ({
        url: baseUrl + '/' + s.key,
        updatedAt,
        priority: 0.8
      })),
    {
      url: baseUrl + '/social-events',
      updatedAt,
      priority: 0.8
    },
    {
      url: baseUrl + '/social-events/birthday',
      updatedAt,
      priority: 0.8
    },
    {
      url: baseUrl + '/event-planning',
      updatedAt,
      priority: 0.8
    },
    {
      url: baseUrl + '/portfolio',
      updatedAt,
      priority: 0.8
    },
    {
      url: baseUrl + '/testimonials',
      updatedAt,
      priority: 0.8
    },
    {
      url: baseUrl + '/faqs',
      updatedAt,
      priority: 0.8
    },
    {
      url: baseUrl + '/sitemap',
      updatedAt,
      priority: 0.8
    }
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map(page => {
          return `
            <url>
              <loc>${page.url.replaceAll('&', '&amp;')}</loc>
              <lastmod>${page.updatedAt.toISOString()}</lastmod>
              <priority>${page.priority}</priority>
            </url>
          `
        })
        .join('')}
    </urlset>`

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {}
  }
}

const Sitemap: NextPage = () => null

export default Sitemap
