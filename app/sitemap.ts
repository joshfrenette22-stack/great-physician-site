import { MetadataRoute } from 'next'

const BASE_URL = 'https://great-physician-site.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}/`,
      priority: 1.0,
      changeFrequency: 'weekly',
    },
    {
      url: `${BASE_URL}/about`,
      priority: 0.8,
      changeFrequency: 'monthly',
    },
    {
      url: `${BASE_URL}/services`,
      priority: 0.9,
      changeFrequency: 'monthly',
    },
    {
      url: `${BASE_URL}/how-it-works`,
      priority: 0.8,
      changeFrequency: 'monthly',
    },
    {
      url: `${BASE_URL}/contact`,
      priority: 0.8,
      changeFrequency: 'monthly',
    },
    {
      url: `${BASE_URL}/faq`,
      priority: 0.7,
      changeFrequency: 'monthly',
    },
    {
      url: `${BASE_URL}/resources`,
      priority: 0.7,
      changeFrequency: 'weekly',
    },
    {
      url: `${BASE_URL}/why-great-physician`,
      priority: 0.6,
      changeFrequency: 'monthly',
    },
    {
      url: `${BASE_URL}/schedule`,
      priority: 0.8,
      changeFrequency: 'monthly',
    },
    {
      url: `${BASE_URL}/schedule/new`,
      priority: 0.7,
      changeFrequency: 'monthly',
    },
    {
      url: `${BASE_URL}/schedule/returning`,
      priority: 0.7,
      changeFrequency: 'monthly',
    },
  ]
}
