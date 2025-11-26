import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'], 
  variable: '--font-space-grotesk',
  weight: ['400', '500', '600', '700']
})

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  weight: ['400', '500', '600']
})

export const metadata: Metadata = {
  title: 'Michael Yongbi | High-Performance Fitness Coaching',
  description: '1:1 coaching to transform your training, nutrition & lifestyle. Personal trainer & online coach specializing in training, nutrition & accountability.',
  keywords: 'fitness coach, personal trainer, online coaching, training programs, nutrition guidance, Michael Yongbi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}

