import type { Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export const metadata: Metadata = {
  title: 'Blog — Dummy Labs',
  description: 'Build logs, launch recaps, and honest numbers from a daily-shipping product studio.',
}

function getPosts() {
  const postsDir = path.join(process.cwd(), 'content/posts')
  if (!fs.existsSync(postsDir)) return []
  return fs.readdirSync(postsDir)
    .filter(f => f.endsWith('.md'))
    .map(filename => {
      const raw = fs.readFileSync(path.join(postsDir, filename), 'utf-8')
      const { data } = matter(raw)
      return { slug: filename.replace('.md', ''), ...data } as { slug: string; title: string; date: string; description: string; category: string }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export default function Blog() {
  const posts = getPosts()

  return (
    <div className="min-h-screen text-slate-200" style={{ fontFamily: 'var(--font-geist-sans)' }}>
      <nav className="border-b border-white/[0.06] px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center">
              <span className="font-mono text-[10px] font-bold text-cyan-400">DL</span>
            </div>
            <span className="font-mono text-sm font-semibold tracking-wide text-white">DUMMY LABS</span>
          </a>
          <a href="/" className="font-mono text-[11px] tracking-widest uppercase text-slate-500 hover:text-slate-300 transition-colors">← Home</a>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-12">
          <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-cyan-400/70 mb-4 block">Build log</span>
          <h1 className="text-4xl font-bold text-white mb-4">Blog</h1>
          <p className="text-slate-400">Honest build logs, launch recaps, and what the numbers actually looked like. No polish.</p>
        </div>

        {posts.length === 0 ? (
          <div className="border border-white/[0.06] rounded-xl p-8 text-center">
            <div className="font-mono text-[10px] tracking-widest uppercase text-slate-600 mb-2">Coming soon</div>
            <p className="text-slate-500 text-sm">First post publishes after Day 1 ships on 2026-05-01.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {posts.map(post => (
              <a key={post.slug} href={`/blog/${post.slug}`} className="block border border-white/[0.06] bg-[#0C1220] rounded-xl p-6 hover:border-white/10 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-[9px] tracking-widest uppercase text-cyan-400/60 border border-cyan-400/20 px-2 py-0.5 rounded">{post.category}</span>
                  <span className="font-mono text-[9px] text-slate-600">{post.date}</span>
                </div>
                <h2 className="text-white font-semibold mb-2">{post.title}</h2>
                <p className="text-slate-400 text-sm">{post.description}</p>
              </a>
            ))}
          </div>
        )}
      </main>

      <footer className="border-t border-white/[0.06] px-6 py-8 mt-16">
        <div className="max-w-5xl mx-auto">
          <span className="font-mono text-[10px] text-slate-700 tracking-widest uppercase">Dummy Labs LLC · Built by humans and AI</span>
        </div>
      </footer>
    </div>
  )
}
