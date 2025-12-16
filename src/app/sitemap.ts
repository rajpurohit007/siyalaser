import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://siyalasertech.com'

  return [
    // Home page
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
    },

    // Product pages
    {
      url: `${baseUrl}/product/multi-sawing`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/product/fancy-galvo`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/product/4p-fiber`,
      lastModified: new Date(),
      priority: 0.9,
    },
  ]
}
