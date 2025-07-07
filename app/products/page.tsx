import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, ExternalLink, Calendar, Users, FileText, Map } from 'lucide-react'

export const metadata: Metadata = {
  title: '我们的产品 - 开源社',
  description: '了解开源社的核心产品，包括中国开源年会、年度报告、开源地图等。',
}

const products = [
  {
    id: 'coscon',
    name: '中国开源年会',
    description: '中国开源年会（COSCon）是由开源社主办的年度盛会，致力于推动中国及亚太地区开源软件的发展。',
    icon: Calendar,
    status: '年度举办',
    features: [
      '汇聚全球开源领袖和技术专家',
      '多轨道技术分享和深度讨论',
      '开源项目展示和孵化平台', 
      '促进产学研合作与交流'
    ],
    stats: {
      years: '9+',
      attendees: '5000+',
      speakers: '300+',
      partners: '100+'
    },
    links: {
      website: 'https://kaiyuanshe.cn/activity/COSCon-2024',
      internal: '/products/coscon'
    }
  },
  {
    id: 'annual-report',
    name: '中国开源年度报告',
    description: '每年发布的权威性中国开源发展状况报告，深度分析开源生态发展趋势。',
    icon: FileText,
    status: '年度发布',
    features: [
      '全面分析中国开源发展现状',
      '权威数据统计和趋势预测',
      '开源项目和社区深度调研',
      '政策解读和发展建议'
    ],
    stats: {
      years: '5+',
      pages: '200+',
      projects: '1000+',
      downloads: '50000+'
    },
    links: {
      website: 'https://kaiyuanshe.feishu.cn/wiki/wikcnUDeVll6PNzw900yPV71Sxd',
      internal: '/products/annual-report'
    }
  },
  {
    id: 'open-source-map',
    name: '开源与公益地图',
    description: '可视化展示中国开源项目地理分布和公益活动的互动地图平台。',
    icon: Map,
    status: '持续更新',
    features: [
      '全国开源项目地理分布可视化',
      '开源活动和聚会信息聚合',
      '社区数据统计和分析',
      '互动式地图浏览体验'
    ],
    stats: {
      cities: '50+',
      projects: '500+',
      events: '200+',
      communities: '100+'
    },
    links: {
      website: 'https://kaiyuanshe.cn/organization',
      internal: '/products/map'
    }
  },
  {
    id: 'project-showcase',
    name: '开源社项目展示',
    description: '开源社孵化和维护的开源项目集合，涵盖多个技术领域。',
    icon: Users,
    status: '持续孵化',
    features: [
      '项目孵化和技术指导',
      '开源社区治理最佳实践',
      '多样化技术栈支持',
      '项目生命周期管理'
    ],
    stats: {
      projects: '8+',
      contributors: '500+',
      stars: '10000+',
      forks: '2000+'
    },
    links: {
      website: 'https://github.com/kaiyuanshe',
      internal: '/products/projects'
    }
  }
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              我们的产品
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              开源社致力于打造一系列优质产品，推动开源事业的发展，构建健康的开源生态
            </p>
          </div>

          {/* 产品统计 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">4+</div>
              <div className="text-muted-foreground">核心产品</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">9+</div>
              <div className="text-muted-foreground">年会历史</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">5000+</div>
              <div className="text-muted-foreground">用户服务</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">城市覆盖</div>
            </div>
          </div>
        </div>
      </section>

      {/* 产品展示 */}
      <section className="py-20">
        <div className="container">
          <div className="space-y-20">
            {products.map((product, index) => {
              const Icon = product.icon
              const isEven = index % 2 === 0
              
              return (
                <div key={product.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:grid-flow-col-dense'}`}>
                  {/* 产品信息 */}
                  <div className={isEven ? '' : 'lg:col-start-2'}>
                    <div className="flex items-center mb-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mr-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant="outline">{product.status}</Badge>
                    </div>
                    
                    <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {product.description}
                    </p>
                    
                    {/* 特性列表 */}
                    <div className="mb-8">
                      <h3 className="font-semibold mb-3">核心特性</h3>
                      <ul className="space-y-2">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* 统计数据 */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {Object.entries(product.stats).map(([key, value]) => (
                        <div key={key} className="text-center p-4 bg-muted/30 rounded-lg">
                          <div className="text-2xl font-bold text-primary">{value}</div>
                          <div className="text-sm text-muted-foreground capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                    
                    {/* 操作按钮 */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button asChild>
                        <Link href={product.links.internal}>
                          了解详情
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link href={product.links.website} target="_blank" rel="noopener noreferrer">
                          访问项目
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                  
                  {/* 产品图片 */}
                  <div className={isEven ? 'lg:col-start-2' : 'lg:col-start-1'}>
                    <Card className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center">
                          <Icon className="h-20 w-20 text-primary/50" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/30 py-20">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">
            加入开源社，共建开源生态
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            我们欢迎更多的开发者、企业和组织加入开源社，一起推动中国开源事业的发展
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/about">
                了解更多
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="https://github.com/kaiyuanshe" target="_blank" rel="noopener noreferrer">
                GitHub 仓库
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}