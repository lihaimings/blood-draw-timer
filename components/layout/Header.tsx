'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-red-100 sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl">🩸</span>
            <span className="font-bold text-xl text-red-700">BloodDrawTimer</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-red-600">Home</Link>
            <Link href="/how-to-use" className="text-gray-600 hover:text-red-600">How to Use</Link>
            <Link href="/faq" className="text-gray-600 hover:text-red-600">FAQ</Link>
            <Link href="/blog" className="text-gray-600 hover:text-red-600">Blog</Link>
            <Link href="/about" className="text-gray-600 hover:text-red-600">About</Link>
          </div>
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-red-100">
            <Link href="/" className="block py-2 text-gray-600">Home</Link>
            <Link href="/how-to-use" className="block py-2 text-gray-600">How to Use</Link>
            <Link href="/faq" className="block py-2 text-gray-600">FAQ</Link>
            <Link href="/blog" className="block py-2 text-gray-600">Blog</Link>
            <Link href="/about" className="block py-2 text-gray-600">About</Link>
          </div>
        )}
      </nav>
    </header>
  )
}
