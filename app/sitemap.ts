import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

function getBlogPosts(): Array<{ slug: string; date: string }> {
  const postsDir = path.join(process.cwd(), 'content/posts')
  try {
    return fs.readdirSync(postsDir)
      .filter(f => f.endsWith('.md'))
      .map(f => {
        const content = fs.readFileSync(path.join(postsDir, f), 'utf-8')
        const { data } = matter(content)
        return { slug: f.replace('.md', ''), date: data.date ?? new Date().toISOString() }
      })
  } catch {
    return []
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getBlogPosts()
  const blogEntries: MetadataRoute.Sitemap = posts.map(p => ({
    url: `https://dummy-labs.com/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [
    { url: 'https://dummy-labs.com', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: 'https://dummy-labs.com/blog', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://dummy-labs.com/team', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://dummy-labs.com/privacy', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: 'https://dummy-labs.com/terms', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    ...blogEntries,
  ]
}
