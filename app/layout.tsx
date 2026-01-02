import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blood Draw Timer - Phlebotomy Timing Tool',
  description: 'Free online blood draw timer for phlebotomists. Track tourniquet time, collection duration, and ensure safe venipuncture procedures.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <div className="flex-grow">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
