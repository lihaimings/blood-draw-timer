import Link from 'next/link'

export const metadata = {
  title: 'Blog - Blood Draw Timer',
  description: 'Tips, guides, and articles about phlebotomy and blood collection best practices.',
}

const posts = [
  { slug: 'getting-started', title: 'Getting Started with Blood Draw Timer', excerpt: 'Learn how to use our timing tool to ensure safe and accurate blood collection procedures.', date: '2026-01-02' },
]

export default function BlogPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Blog</h1>
      <div className="space-y-6">
        {posts.map(post => (
          <article key={post.slug} className="bg-white rounded-xl p-6 shadow-sm border border-red-100 hover:shadow-md transition-shadow">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-xl font-bold text-gray-900 hover:text-red-600 transition-colors">{post.title}</h2>
              <p className="text-gray-600 mt-2">{post.excerpt}</p>
              <p className="text-sm text-red-600 mt-3">{post.date}</p>
            </Link>
          </article>
        ))}
      </div>
    </main>
  )
}
