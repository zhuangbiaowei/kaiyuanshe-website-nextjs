import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { 
  Calendar, 
  User, 
  Clock, 
  ArrowLeft, 
  Share2, 
  Heart,
  MessageCircle,
  ArrowRight,
  Tag
} from 'lucide-react'
import { getPostById, getRelatedPosts, blogCategories } from '@/src/lib/blog'

interface BlogPostPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getPostById(params.id)
  
  if (!post) {
    return {
      title: '文章未找到 - 开源社博客'
    }
  }

  return {
    title: `${post.title} - 开源社博客`,
    description: post.excerpt,
    authors: [{ name: post.author }],
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    }
  }
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostById(params.id)
  
  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post, 3)
  const category = blogCategories.find(cat => cat.id === post.category)

  return (
    <div className="min-h-screen">
      {/* 返回按钮 */}
      <div className="border-b bg-white sticky top-16 z-40">
        <div className="container py-4">
          <Button variant="ghost" asChild>
            <Link href="/blog">
              <ArrowLeft className="h-4 w-4 mr-2" />
              返回博客
            </Link>
          </Button>
        </div>
      </div>

      {/* 文章头部 */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Badge className="mb-4">
                {category?.name}
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                {post.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {post.excerpt}
              </p>
            </div>
            
            {/* 文章元信息 */}
            <div className="flex flex-wrap items-center gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="" alt={post.author} />
                  <AvatarFallback>{post.author.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{post.author}</div>
                  <div className="text-sm text-muted-foreground">作者</div>
                </div>
              </div>
              
              <Separator orientation="vertical" className="h-12" />
              
              <div className="flex items-center text-muted-foreground">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{formatDate(post.date)}</span>
              </div>
              
              {post.readTime && (
                <>
                  <Separator orientation="vertical" className="h-12" />
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{post.readTime} 分钟阅读</span>
                  </div>
                </>
              )}
            </div>
            
            {/* 操作按钮 */}
            <div className="flex gap-4">
              <Button variant="outline" size="sm">
                <Heart className="h-4 w-4 mr-2" />
                点赞
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                分享
              </Button>
              <Button variant="outline" size="sm">
                <MessageCircle className="h-4 w-4 mr-2" />
                评论
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 文章内容 */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {/* 这里实际项目中会使用 Markdown 解析器渲染内容 */}
              <div className="whitespace-pre-wrap leading-relaxed text-foreground">
                {post.content}
              </div>
            </div>
            
            {/* 标签 */}
            <div className="mt-12 pt-8 border-t">
              <div className="flex items-center gap-2 mb-4">
                <Tag className="h-4 w-4" />
                <span className="font-medium">标签</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 作者信息 */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src="" alt={post.author} />
                    <AvatarFallback className="text-lg">{post.author.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{post.author}</h3>
                    <p className="text-muted-foreground mb-4">
                      开源社活跃贡献者，专注于开源技术推广和社区建设。
                    </p>
                    <div className="flex gap-4">
                      <Button variant="outline" size="sm">
                        关注作者
                      </Button>
                      <Button variant="ghost" size="sm">
                        查看更多文章
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 相关文章 */}
      {relatedPosts.length > 0 && (
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-8">相关文章</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Card key={relatedPost.id} className="hover:shadow-lg transition-shadow group">
                    <CardContent className="p-6">
                      <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/20 rounded-lg mb-4 flex items-center justify-center">
                        <div className="text-primary font-bold text-lg">
                          {relatedPost.title.slice(0, 2)}
                        </div>
                      </div>
                      
                      <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        <Link href={`/blog/${relatedPost.id}`}>
                          {relatedPost.title}
                        </Link>
                      </h3>
                      
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3 mr-1" />
                        {formatDate(relatedPost.date)}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">
              喜欢这篇文章吗？
            </h2>
            <p className="mb-8 opacity-90">
              订阅我们的博客，获取最新的开源技术资讯和社区动态
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                订阅博客
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                查看更多文章
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}