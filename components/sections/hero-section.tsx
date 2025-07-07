import { Button } from '@/components/ui/button'
import { ArrowRight, Github, Heart } from 'lucide-react'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Logo */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-xl font-bold text-2xl mr-4">
              开
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              开源社
            </h1>
          </div>
          
          {/* 标语 */}
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-4">
            KAIYUANSHE
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            The Home of Open-Sourcers
          </p>
          
          {/* 愿景 */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-12 border">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gradient">
              Our Vision
            </h3>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Contribute to and promote open source as a new way of life to the world
            </p>
            <p className="text-base md:text-lg text-muted-foreground mt-4">
              贡献于全球，推广开源成为一种新的生活方式
            </p>
          </div>
          
          {/* CTA 按钮 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="group" asChild>
              <Link href="/about">
                了解开源社
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button size="lg" variant="outline" className="group" asChild>
              <Link href="https://github.com/kaiyuanshe" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub 项目
              </Link>
            </Button>
            
            <Button size="lg" variant="ghost" className="group" asChild>
              <Link href="/products/coscon">
                <Heart className="mr-2 h-4 w-4 text-red-500" />
                支持开源年会
              </Link>
            </Button>
          </div>
          
          {/* 统计数据 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">9+</div>
              <div className="text-muted-foreground">届开源年会</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">8+</div>
              <div className="text-muted-foreground">核心项目</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-muted-foreground">社区成员</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground">年发展历程</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}