"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, ExternalLink } from 'lucide-react'

const mockProjects = [
  {
    id: 'wuhan2020',
    name: '新冠援助平台',
    description: '2020年新冠疫情期间开发的援助平台项目',
    link: 'https://wuhan2020.kaiyuanshe.cn/',
    category: '公益项目',
  },
  {
    id: 'osschat',
    name: 'OSS.Chat',
    description: '开源软件聊天机器人项目',
    link: 'https://github.com/kaiyuanshe/osschat',
    category: '工具软件',
  },
  {
    id: 'china-open-source-map',
    name: '中国开源地图',
    description: '展示中国开源项目分布的可视化地图',
    link: 'https://kaiyuanshe.cn/organization',
    category: '可视化',
  },
  {
    id: 'annual-report',
    name: '中国开源年度报告',
    description: '每年发布的中国开源发展状况报告',
    link: 'https://kaiyuanshe.feishu.cn/wiki/wikcnUDeVll6PNzw900yPV71Sxd',
    category: '研究报告',
  }
]

export function ProjectsSection() {
  return (
    <section className="section-padding bg-muted/20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Projects
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            开源社孵化和维护的核心项目，覆盖从公益平台到技术工具的各个领域
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {mockProjects.map((project) => (
            <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                {/* 项目图标/截图区域 */}
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/20 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-primary font-bold text-2xl">
                    {project.name.slice(0, 2)}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    <Badge variant="outline" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </CardContent>
              
              <CardFooter className="p-6 pt-0">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full group/btn" 
                  asChild
                >
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    查看项目
                    <ExternalLink className="ml-2 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="group" asChild>
            <Link href="/products">
              查看所有项目
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}