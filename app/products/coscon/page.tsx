import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, ExternalLink, Calendar, MapPin, Users, Mic, Award, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: '中国开源年会 COSCon - 开源社',
  description: '中国开源年会（COSCon）是由开源社主办的年度盛会，致力于推动中国及亚太地区开源软件的发展。',
}

const recentEvents = [
  {
    year: '2024',
    theme: '开源无界，协作共赢',
    location: '北京 中关村国家自主创新示范区-会议中心',
    date: '2024年10月26-27日',
    attendees: '3000+',
    speakers: '150+',
    tracks: '12',
    status: '已结束',
    highlights: [
      '全球开源领袖主题演讲',
      'AI与开源专题论坛',
      '开源硬件创新展示',
      '青年开源开发者论坛'
    ]
  },
  {
    year: '2023',
    theme: '开源启新程，共创数字化未来',
    location: '成都 菁蓉汇',
    date: '2023年10月28-29日',
    attendees: '2500+',
    speakers: '120+',
    tracks: '10',
    status: '已结束',
    highlights: [
      '开源与数字化转型',
      '云原生技术趋势',
      '开源商业化探索',
      '开源教育创新'
    ]
  }
]

const tracks = [
  { name: '主会场', description: '开源领袖主题演讲和重要发布', icon: Mic },
  { name: 'AI与机器学习', description: '人工智能开源项目和技术分享', icon: Award },
  { name: '云原生', description: '容器、微服务、DevOps等技术', icon: Globe },
  { name: '开源硬件', description: '硬件开源设计和创新', icon: Users },
  { name: '区块链', description: '区块链技术和开源项目', icon: Award },
  { name: '开源教育', description: '开源人才培养和教育创新', icon: Users },
  { name: '开源商业化', description: '开源项目商业模式探索', icon: Globe },
  { name: '社区治理', description: '开源社区建设和管理', icon: Users }
]


export default function COSConPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Badge className="bg-white/20 text-white border-white/30 mb-4">
                中国开源年会
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                COSCon 2024
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                开源无界，协作共赢
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="flex items-center justify-center">
                <Calendar className="h-6 w-6 mr-2" />
                <span>2024年10月26-27日</span>
              </div>
              <div className="flex items-center justify-center">
                <MapPin className="h-6 w-6 mr-2" />
                <span>北京 中关村</span>
              </div>
              <div className="flex items-center justify-center">
                <Users className="h-6 w-6 mr-2" />
                <span>3000+ 参会者</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                查看回顾
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <ExternalLink className="mr-2 h-4 w-4" />
                官方网站
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 活动概览 */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              关于 COSCon
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              中国开源年会（COSCon）是由开源社主办的年度盛会，自2015年创办以来，已成为中国最具影响力的开源技术会议之一
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">9+</h3>
              <p className="text-muted-foreground">届年会历史</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">20000+</h3>
              <p className="text-muted-foreground">累计参会者</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                <Mic className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">500+</h3>
              <p className="text-muted-foreground">演讲嘉宾</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">50+</h3>
              <p className="text-muted-foreground">合作伙伴</p>
            </div>
          </div>
        </div>
      </section>

      {/* 近期活动 */}
      <section className="bg-muted/30 py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              近期活动
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              回顾最近两届COSCon的精彩内容和重要成果
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {recentEvents.map((event) => (
              <Card key={event.year} className="overflow-hidden">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant={event.status === '已结束' ? 'secondary' : 'default'}>
                      {event.status}
                    </Badge>
                    <span className="text-2xl font-bold text-primary">COSCon {event.year}</span>
                  </div>
                  <CardTitle className="text-xl">{event.theme}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <div className="font-bold text-primary">{event.attendees}</div>
                      <div className="text-xs text-muted-foreground">参会者</div>
                    </div>
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <div className="font-bold text-primary">{event.speakers}</div>
                      <div className="text-xs text-muted-foreground">演讲者</div>
                    </div>
                    <div className="text-center p-3 bg-muted/50 rounded-lg">
                      <div className="font-bold text-primary">{event.tracks}</div>
                      <div className="text-xs text-muted-foreground">分会场</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">活动亮点</h4>
                    <ul className="space-y-1">
                      {event.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button variant="outline" className="w-full">
                    查看详情
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 议题分会场 */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              议题分会场
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              COSCon设置多个技术分会场，涵盖开源技术的各个领域
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tracks.map((track) => {
              const Icon = track.icon
              return (
                <Card key={track.name} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{track.name}</h3>
                    <p className="text-sm text-muted-foreground">{track.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            加入 COSCon 2025
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            下一届中国开源年会正在筹备中，敬请期待更多精彩内容
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              关注最新动态
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              成为赞助商
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}