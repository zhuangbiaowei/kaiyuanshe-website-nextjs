"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Search, 
  Calendar, 
  User, 
  Clock, 
  ArrowRight, 
  FileText,
  Languages,
  Calendar as CalendarIcon,
  Users,
  Star
} from 'lucide-react'
import { getAllPosts, getPostsByCategory, blogCategories, searchPosts } from '@/src/lib/blog'

const categoryIcons = {
  original: FileText,
  translation: Languages,
  events: CalendarIcon,
  volunteers: Users
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  
  const allPosts = getAllPosts()
  const searchResults = searchQuery ? searchPosts(searchQuery) : []
  
  const getDisplayPosts = () => {
    if (searchQuery) return searchResults
    if (activeCategory === 'all') return allPosts
    return getPostsByCategory(activeCategory)
  }

  const displayPosts = getDisplayPosts()
  const featuredPost = allPosts.find(post => post.featured)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              开源社博客
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              分享开源技术、社区动态和志愿者风采
            </p>
            
            {/* 搜索框 */}
            <div className="relative max-w-md mx-auto mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="搜索文章..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            {/* 统计数据 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{allPosts.length}</div>
                <div className="text-muted-foreground">篇文章</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">4</div>
                <div className="text-muted-foreground">个分类</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">20+</div>
                <div className="text-muted-foreground">位作者</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                <div className="text-muted-foreground">次阅读</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 特色文章 */}
      {featuredPost && !searchQuery && (
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <Badge className="mb-4">
                <Star className="h-3 w-3 mr-1" />
                特色推荐
              </Badge>
              <h2 className="text-3xl font-bold">本期推荐</h2>
            </div>
            
            <Card className="max-w-4xl mx-auto overflow-hidden hover:shadow-xl transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className="aspect-video md:aspect-square bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center">
                    <FileText className="h-16 w-16 text-primary/50" />
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="outline">
                      {blogCategories.find(cat => cat.id === featuredPost.category)?.name}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      {formatDate(featuredPost.date)}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 hover:text-primary transition-colors">
                    <Link href={`/blog/${featuredPost.id}`}>
                      {featuredPost.title}
                    </Link>
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <User className="h-3 w-3 mr-1" />
                        {featuredPost.author}
                      </div>
                      {featuredPost.readTime && (
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" />
                          {featuredPost.readTime} 分钟阅读
                        </div>
                      )}
                    </div>
                    
                    <Button variant="outline" asChild>
                      <Link href={`/blog/${featuredPost.id}`}>
                        阅读全文
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* 分类和文章列表 */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid w-full max-w-2xl grid-cols-5">
                <TabsTrigger value="all">全部</TabsTrigger>
                {blogCategories.map((category) => {
                  const Icon = categoryIcons[category.id as keyof typeof categoryIcons]
                  return (
                    <TabsTrigger key={category.id} value={category.id} className="flex items-center">
                      <Icon className="h-4 w-4 mr-1" />
                      <span className="hidden sm:inline">{category.name}</span>
                    </TabsTrigger>
                  )
                })}
              </TabsList>
            </div>

            <TabsContent value={activeCategory}>
              {searchQuery && (
                <div className="text-center mb-8">
                  <p className="text-muted-foreground">
                    搜索 &ldquo;{searchQuery}&rdquo; 找到 {searchResults.length} 篇文章
                  </p>
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayPosts.map((post) => {
                  const Icon = categoryIcons[post.category as keyof typeof categoryIcons]
                  return (
                    <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
                      <CardContent className="p-0">
                        <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center relative">
                          <Icon className="h-12 w-12 text-primary/50" />
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-white/90 text-gray-800">
                              {blogCategories.find(cat => cat.id === post.category)?.name}
                            </Badge>
                          </div>
                        </div>
                        
                        <div className="p-6">
                          <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            {formatDate(post.date)}
                          </div>
                          
                          <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                            <Link href={`/blog/${post.id}`}>
                              {post.title}
                            </Link>
                          </h3>
                          
                          <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="flex items-center text-xs text-muted-foreground">
                                <User className="h-3 w-3 mr-1" />
                                {post.author}
                              </div>
                              {post.readTime && (
                                <div className="flex items-center text-xs text-muted-foreground">
                                  <Clock className="h-3 w-3 mr-1" />
                                  {post.readTime}分钟
                                </div>
                              )}
                            </div>
                            
                            <div className="flex flex-wrap gap-1">
                              {post.tags.slice(0, 2).map((tag) => (
                                <Badge key={tag} variant="outline" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              {displayPosts.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-muted-foreground text-lg">
                    {searchQuery ? '没有找到相关文章' : '暂无文章'}
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">
            加入我们的写作团队
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            如果您对开源技术有独到见解，或者有精彩的开源故事想要分享，欢迎投稿给我们
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              投稿指南
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              联系我们
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}