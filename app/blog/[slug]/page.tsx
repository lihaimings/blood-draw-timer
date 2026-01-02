import fs from 'fs'
import path from 'path'

export function generateStaticParams() {
  return [{ slug: 'getting-started' }]
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const titles: Record<string, string> = {
    'getting-started': 'Getting Started with Blood Draw Timer',
  }
  return {
    title: `${titles[params.slug] || 'Blog'} - Blood Draw Timer`,
    description: `Read about ${titles[params.slug] || 'phlebotomy'} on our blog.`,
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  let content = ''
  try {
    const filePath = path.join(process.cwd(), 'public', 'blog', `${params.slug}.md`)
    content = fs.readFileSync(filePath, 'utf-8')
  } catch {
    content = '# Post not found\n\nThis blog post could not be found.'
  }

  const lines = content.split('\n')
  const title = lines[0]?.replace(/^#\s*/, '') || 'Blog Post'
  const body = lines.slice(1).join('\n').trim()

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <article className="prose prose-red max-w-none">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">{title}</h1>
        <div className="text-gray-600 whitespace-pre-wrap">{body}</div>
      </article>
    </main>
  )
}
