import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Lustro Premium Detailing | Elite Mobile Detailing Services',
  description: 'Professional mobile detailing, ceramic coatings, and paint correction for luxury vehicles. Trusted by Porsche, BMW, and Ferrari owners. Marine-owned precision.',
  keywords: 'premium detailing, mobile detailing, ceramic coating, paint correction, luxury car detailing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}

