import type { Metadata } from 'next'
import { Archivo, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const archivo = Archivo({
  subsets: ['latin'],
  axes: ['wdth'],
  variable: '--font-archivo',
  display: 'swap',
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-plex-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://mouadja02.github.io'),
  title: 'Mouad Jaouhari | Data & AI Engineer',
  description:
    'Datasheet for MJ02: Mouad Jaouhari, a data and AI engineer building cloud data pipelines, machine-learning systems and AI agents.',
  keywords: ['Data Engineer', 'Artificial Intelligence', 'AI Engineer', 'Cloud Computing', 'AWS', 'GCP', 'Snowflake', 'Python', 'Data Science', 'Mouad Jaouhari', 'MJ'],
  authors: [{ name: 'Mouad Jaouhari' }],
  creator: 'Mouad Jaouhari',
  publisher: 'Mouad Jaouhari',
  icons: {
    icon: [{ url: '/favicon.ico' }, { url: '/images/mj.png', type: 'image/png' }],
    shortcut: '/favicon.ico',
    apple: '/images/mj.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mouadja02.github.io',
    title: 'Mouad Jaouhari | Data & AI Engineer',
    description: 'Datasheet for MJ02: cloud data pipelines, machine-learning systems and AI agents.',
    siteName: 'MJ02 Datasheet',
    images: [{ url: '/images/mj.png', width: 500, height: 500, alt: 'Mouad Jaouhari, Data & AI Engineer' }],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${archivo.variable} ${plexMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
