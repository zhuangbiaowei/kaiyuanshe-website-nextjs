import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '开源社 - The Home of Open-Sourcers',
  description: '开源社致力于在全球范围内推广开源作为一种新的生活方式，提供开源治理、全球桥梁、社区发展和项目孵化服务。',
  keywords: ['开源', '开源社', 'KAIYUANSHE', '开源软件', '开源社区', '中国开源'],
  authors: [{ name: '开源社', url: 'https://kaiyuanshe.cn' }],
  openGraph: {
    title: '开源社 - The Home of Open-Sourcers',
    description: '开源社致力于在全球范围内推广开源作为一种新的生活方式',
    url: 'https://kaiyuanshe.cn',
    siteName: '开源社',
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '开源社 - The Home of Open-Sourcers',
    description: '开源社致力于在全球范围内推广开源作为一种新的生活方式',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}