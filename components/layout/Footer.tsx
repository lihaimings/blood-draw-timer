import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-red-100 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-gray-900 mb-3">Tool</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-gray-600 hover:text-red-600">Blood Draw Timer</Link></li>
              <li><Link href="/how-to-use" className="text-gray-600 hover:text-red-600">How to Use</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog" className="text-gray-600 hover:text-red-600">Blog</Link></li>
              <li><Link href="/faq" className="text-gray-600 hover:text-red-600">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-600 hover:text-red-600">About</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="text-gray-600 hover:text-red-600">Privacy</Link></li>
              <li><Link href="/terms" className="text-gray-600 hover:text-red-600">Terms</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-red-100 mt-8 pt-8 text-center text-sm text-gray-500">
          © 2026 BloodDrawTimer. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
