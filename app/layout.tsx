import './globals.scss'
import type { Metadata } from 'next'
import { Noto_Sans_JP, Roboto_Condensed, Wix_Madefor_Display } from 'next/font/google'
import localFont from 'next/font/local'


const robotoCond = Roboto_Condensed({
  weight: ["400", "700"],
  subsets: ['latin-ext'],
  variable: "--font-roboto-cond",
})

const notoSansJP = Noto_Sans_JP({
  weight: ["400", "500", "700"],
  subsets: ['latin-ext'],
  variable: "--font-noto-sans-jp",
})

const wixMadeforDisplay = Wix_Madefor_Display({
  weight: ["400", "700"],
  subsets: ['latin-ext'],
  variable: "--font-wix-madefor-display",
})

const plemolJp = localFont({
  src: [
    {
      path: "../public/fonts/plemol35nf-r.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/plemol35nf-ri.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/plemol35nf-b.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/plemol35nf-bi.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-plemol-jp",
})

export const metadata: Metadata = {
  title: 'みずな',
  description: 'みずなの公式サイトです。',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://mizphs.es/',
    siteName: 'みずな',
    title: 'みずな',
    description: 'みずなの公式サイトです。',
    images: [
      {
        url: 'https://mizphs.es/ogp.webp',
        width: 1200,
        height: 630,
        alt: 'みずな',
      },
    ],
  },
  twitter: {
    creator: '@mizphses',
    site: '@mizphses',
    card: 'summary_large_image',
  },

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`${robotoCond.variable} ${notoSansJP.variable} ${wixMadeforDisplay.variable} ${plemolJp.variable}`} lang="ja">
      <body>{children}</body>
    </html>
  )
}
