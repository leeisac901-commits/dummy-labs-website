import type { Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import { notFound } from 'next/navigation'

function getPost(slug: string) {
  const filePath = path.join(process.cwd(), 'content/posts', `${slug}.md`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  return { ...data, content } as { title: string; date: string; description: string; category: string; content: string }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: `${post.title} — Dummy Labs`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
    },
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const html = await marked(post.content, { gfm: true, breaks: false })

  return (
    <div className="min-h-screen text-slate-200" style={{ fontFamily: 'var(--font-geist-sans)' }}>
      <nav className="border-b border-white/6 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center">
              <span className="font-mono text-[10px] font-bold text-cyan-400">DL</span>
            </div>
            <span className="font-mono text-sm font-semibold tracking-wide text-white">DUMMY LABS</span>
          </a>
          <a href="/blog" className="font-mono text-[11px] tracking-widest uppercase text-slate-500 hover:text-slate-300 transition-colors">← Blog</a>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-[9px] tracking-widest uppercase text-cyan-400/60 border border-cyan-400/20 px-2 py-0.5 rounded">{post.category}</span>
            <span className="font-mono text-[9px] text-slate-600">{post.date}</span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">{post.title}</h1>
          <p className="text-slate-400 leading-relaxed">{post.description}</p>
        </div>

        <article
          className="prose-blog"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </main>

      <footer className="border-t border-white/6 px-6 py-8 mt-16">
        <div className="max-w-5xl mx-auto">
          <span className="font-mono text-[10px] text-slate-700 tracking-widest uppercase">Dummy Labs LLC · Built by humans and AI</span>
        </div>
      </footer>
    </div>
  )
}
