"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, User, ArrowRight } from 'lucide-react'

const mockNews = [
  {
    id: 'annual-awards-2024',
    title: '2024 开源社年度评选',
    excerpt: '2024年度开源社优秀项目和个人评选活动',
    author: 'COSCon\'24 组委会',
    date: '2024-12-15',
    category: 'event' as const,
    tags: ['评选', '2024', '年度']
  },
  {
    id: 'coscon24-partners',
    title: 'COSCon\'24媒体和社区合作伙伴全亮相',
    excerpt: '感谢广大社区对COSCon\'24的支持！',
    author: 'COSCon\'24 组委会',
    date: '2024-11-20', 
    category: 'event' as const,
    tags: ['COSCon', '合作伙伴', '2024']
  }
]

const categoryMap = {
  original: { label: '原创', color: 'bg-blue-100 text-blue-800' },
  translation: { label: '翻译', color: 'bg-green-100 text-green-800' },
  event: { label: '活动', color: 'bg-purple-100 text-purple-800' },
  volunteer: { label: '志愿者', color: 'bg-orange-100 text-orange-800' }
}

function formatDate(date: string) {
  const d = new Date(date)
  return d.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

function truncate(str: string, length: number) {
  return str.length > length ? str.slice(0, length) + '...' : str
}

export function NewsSection() {
  return (
    <section className="section-padding bg-muted/20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Latest News
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            关注开源社最新动态，了解开源社区的发展趋势和重要事件
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {mockNews.map((article) => {
            const categoryInfo = categoryMap[article.category]
            
            return (
              <Card key={article.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className={`${categoryInfo.color} border-0 text-xs`}>
                      {categoryInfo.label}
                    </Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{formatDate(article.date)}</span>
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors leading-tight">
                    <Link href={`/blog/${article.id}`} className="line-clamp-2">
                      {article.title}
                    </Link>
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                    {truncate(article.excerpt, 100)}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <User className="h-3 w-3 mr-1" />
                      <span>{article.author}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {article.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full mt-4 group/btn" 
                    asChild
                  >
                    <Link href={`/blog/${article.id}`}>
                      阅读全文
                      <ArrowRight className="ml-2 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="group" asChild>
            <Link href="/blog">
              查看所有文章
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}