import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ExternalLink, Github, Globe, MapPin, Star, Trophy, TrendingUp, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: '中国开源人物榜单 - 开源社',
  description: '展示中国开源领域的杰出人物和他们的贡献，基于开源码力榜数据。',
}

// 模拟的榜单数据，实际项目中会从API获取
const topDevelopers = [
  {
    id: 'wangyantong',
    rank: 1,
    name: 'wangyantong',
    avatar: 'https://avatars.githubusercontent.com/u/135088663?v=4',
    location: 'Shanghai',
    github: 'https://github.com/wangyantong2000',
    score: 98.5,
    trend: 'up',
    contributions: [
      '活跃开源贡献者', 
      '多个知名项目核心开发者',
      '技术社区积极参与者'
    ],
    projects: ['Project A', 'Project B', 'Project C'],
    achievements: ['2024年度最佳贡献者', '开源先锋奖']
  },
  {
    id: 'frank-zhao',
    rank: 2,
    name: 'Frank Zhao',
    avatar: 'https://avatars.githubusercontent.com/u/8512426?v=4',
    location: 'Hangzhou',
    github: 'https://github.com/frank-zsy',
    score: 95.8,
    trend: 'up',
    contributions: [
      '开源项目架构师',
      '技术社区领袖',
      '开源教育推广者'
    ],
    projects: ['OpenRank', 'X-lab项目', 'GitHub分析'],
    achievements: ['开源技术专家', '社区建设贡献奖']
  },
  {
    id: 'birdflyi',
    rank: 3,
    name: 'cs_zhlou',
    avatar: 'https://avatars.githubusercontent.com/u/40617667?v=4',
    location: 'Shanghai',
    github: 'https://github.com/birdflyi',
    score: 92.3,
    trend: 'up',
    contributions: [
      '数据科学开源贡献者',
      '算法研究与实现',
      '开源工具开发者'
    ],
    projects: ['Data Analysis Tools', 'ML Framework', 'Visualization'],
    achievements: ['数据科学贡献奖', '创新项目奖']
  }
]

// 更多开发者数据
const moreDevelopers = [
  { rank: 4, name: 'Will Wang', location: 'Shanghai', score: 89.7 },
  { rank: 5, name: 'Scarlett Zhao', location: 'Shanghai', score: 87.2 },
  { rank: 6, name: 'YuRonan', location: 'Hubei Wuhan', score: 85.9 },
  { rank: 7, name: 'Peng99999', location: 'Wuhan', score: 84.1 },
  { rank: 8, name: 'Siyi Xie', location: 'null', score: 82.8 },
  { rank: 9, name: 'Tenth-crew', location: 'null', score: 81.5 },
  { rank: 10, name: 'Yaya', location: 'Hangzhou', score: 80.3 }
]

export default function RankingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-20">
        <div className="container">
          <div className="text-center mb-16">
            <Badge className="mb-4">
              基于 OpenRank 算法
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              中国开源人物榜单
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              展示中国开源领域的杰出人物和他们的卓越贡献，让开源世界的超级"码"丽被更多人知道
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" asChild>
                <Link href="https://opensource.win" target="_blank" rel="noopener noreferrer">
                  访问码力榜官网
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline">
                了解评选标准
                <TrendingUp className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* 统计数据 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">99</div>
                <div className="text-muted-foreground">年度上榜人数</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">4</div>
                <div className="text-muted-foreground">榜单发布年份</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1000+</div>
                <div className="text-muted-foreground">评估项目数</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">覆盖城市</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top 3 开发者 */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              2024年度前三甲
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              基于GitHub全域开发者协作关系数据计算，展示年度最具影响力的开源贡献者
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {topDevelopers.map((developer) => (
              <Card key={developer.id} className={`relative overflow-hidden hover:shadow-xl transition-shadow ${developer.rank === 1 ? 'ring-2 ring-yellow-400' : ''}`}>
                {developer.rank === 1 && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-yellow-400 text-yellow-900">
                      <Trophy className="h-3 w-3 mr-1" />
                      冠军
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="relative">
                    <Avatar className="w-24 h-24 mx-auto mb-4">
                      <AvatarImage src={developer.avatar} alt={developer.name} />
                      <AvatarFallback>{developer.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-white text-sm font-bold ${
                      developer.rank === 1 ? 'bg-yellow-500' : 
                      developer.rank === 2 ? 'bg-gray-400' : 'bg-amber-600'
                    }`}>
                      #{developer.rank}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">{developer.name}</h3>
                    <div className="flex items-center justify-center text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{developer.location}</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="font-semibold">{developer.score}</span>
                      <span className="text-muted-foreground ml-1">分</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">主要贡献</h4>
                    <ul className="space-y-1">
                      {developer.contributions.map((contribution, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0" />
                          {contribution}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">参与项目</h4>
                    <div className="flex flex-wrap gap-1">
                      {developer.projects.map((project, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {project}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">获得荣誉</h4>
                    <div className="space-y-1">
                      {developer.achievements.map((achievement, idx) => (
                        <Badge key={idx} className="text-xs mr-1 mb-1">
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={developer.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      访问 GitHub
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 更多榜单 */}
      <section className="bg-muted/30 py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              更多优秀开发者
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              查看完整的中国开源人物榜单，发现更多杰出的开源贡献者
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
            {moreDevelopers.map((developer) => (
              <Card key={developer.rank} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4 text-center">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">#{developer.rank}</Badge>
                    <div className="flex items-center text-sm">
                      <Star className="h-3 w-3 text-yellow-500 mr-1" />
                      <span>{developer.score}</span>
                    </div>
                  </div>
                  <h3 className="font-semibold mb-1">{developer.name}</h3>
                  <p className="text-sm text-muted-foreground">{developer.location}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" asChild>
              <Link href="https://opensource.win/ranking-2024" target="_blank" rel="noopener noreferrer">
                查看完整榜单
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 评选标准 */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              评选标准
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              了解中国开源码力榜的评选方法和算法原理
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-lg mx-auto mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-3">开发者识别</h3>
                <p className="text-muted-foreground text-sm">
                  基于 GitHub 公开信息和志愿者标注，识别中国开发者身份
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-lg mx-auto mb-4">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-3">OpenRank 算法</h3>
                <p className="text-muted-foreground text-sm">
                  基于协作关系网络的图算法，计算开发者在开源生态中的影响力
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-600 rounded-lg mx-auto mb-4">
                  <Star className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-3">贡献度评估</h3>
                <p className="text-muted-foreground text-sm">
                  综合考虑项目影响力和个人贡献比例，形成最终评分
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            成为开源贡献者
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            加入开源社区，用代码改变世界，让你的贡献被更多人看见
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Github className="mr-2 h-4 w-4" />
              开始贡献
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Globe className="mr-2 h-4 w-4" />
              了解更多
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}