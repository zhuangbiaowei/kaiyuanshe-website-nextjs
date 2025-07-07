import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Map, MapLocation } from '@/components/ui/map'
import { MapPin, Users, Calendar, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: '开源与公益地图 - 开源社',
  description: '可视化展示中国开源项目地理分布和公益活动的互动地图平台。',
}

// 模拟地图数据
const mapLocations: MapLocation[] = [
  {
    id: 'beijing',
    name: '北京',
    coordinates: [39.9042, 116.4074],
    count: 12,
    activities: [
      { id: '1', title: 'COSCon 2024', date: '2024-10-26', type: '技术会议' },
      { id: '2', title: 'Apache 中国路演', date: '2024-09-15', type: '技术分享' },
      { id: '3', title: '开源社北京聚会', date: '2024-08-20', type: '社区聚会' }
    ]
  },
  {
    id: 'shanghai',
    name: '上海',
    coordinates: [31.2304, 121.4737],
    count: 8,
    activities: [
      { id: '4', title: 'FOSSASIA 上海', date: '2024-11-10', type: '技术会议' },
      { id: '5', title: '开源创业分享会', date: '2024-10-05', type: '创业交流' },
      { id: '6', title: 'Kubernetes 上海聚会', date: '2024-09-12', type: '技术聚会' }
    ]
  },
  {
    id: 'shenzhen',
    name: '深圳',
    coordinates: [22.5431, 114.0579],
    count: 6,
    activities: [
      { id: '7', title: '开源硬件创新大会', date: '2024-12-01', type: '硬件会议' },
      { id: '8', title: 'Linux 深圳用户组', date: '2024-11-15', type: '用户组' },
      { id: '9', title: '开源社深圳分会', date: '2024-10-18', type: '分会活动' }
    ]
  },
  {
    id: 'chengdu',
    name: '成都',
    coordinates: [30.5728, 104.0668],
    count: 4,
    activities: [
      { id: '10', title: 'COSCon 2023', date: '2023-10-28', type: '技术会议' },
      { id: '11', title: '开源教育研讨会', date: '2024-06-22', type: '教育交流' },
      { id: '12', title: 'Python 成都聚会', date: '2024-07-10', type: '技术聚会' }
    ]
  },
  {
    id: 'hangzhou',
    name: '杭州',
    coordinates: [30.2741, 120.1551],
    count: 5,
    activities: [
      { id: '13', title: '云栖大会开源论坛', date: '2024-10-31', type: '技术论坛' },
      { id: '14', title: 'Apache Dubbo 聚会', date: '2024-09-25', type: '项目聚会' },
      { id: '15', title: '前端开源分享', date: '2024-08-30', type: '技术分享' }
    ]
  }
]

// 统计数据
const stats = [
  { label: '覆盖城市', value: '50+', icon: MapPin },
  { label: '参与人数', value: '10000+', icon: Users },
  { label: '举办活动', value: '200+', icon: Calendar },
  { label: '活跃项目', value: '500+', icon: Zap }
]

// 活动类型
const activityTypes = [
  { name: '技术会议', count: 45, color: 'bg-blue-100 text-blue-800' },
  { name: '社区聚会', count: 78, color: 'bg-green-100 text-green-800' },
  { name: '技术分享', count: 52, color: 'bg-purple-100 text-purple-800' },
  { name: '工作坊', count: 34, color: 'bg-orange-100 text-orange-800' },
  { name: '黑客松', count: 23, color: 'bg-red-100 text-red-800' }
]

export default function MapPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              开源与公益地图
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              可视化展示中国开源项目地理分布和公益活动，连接全国开源爱好者
            </p>
            
            {/* 统计数据 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => {
                const Icon = stat.icon
                return (
                  <div key={stat.label} className="text-center">
                    <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 交互式地图 */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              全国开源活动分布
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              点击地图上的标记，查看各地开源活动详情
            </p>
          </div>

          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <Map 
                locations={mapLocations} 
                className="w-full"
                height="500px"
              />
            </CardContent>
          </Card>

          {/* 地图说明 */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              * 地图显示开源社在全国各地举办的活动分布情况，数字表示该城市的活动数量
            </p>
          </div>
        </div>
      </section>

      {/* 活动统计 */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 活动类型分布 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  活动类型分布
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activityTypes.map((type) => (
                    <div key={type.name} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Badge className={`${type.color} mr-3`}>
                          {type.name}
                        </Badge>
                      </div>
                      <div className="flex items-center">
                        <span className="text-sm text-muted-foreground mr-2">{type.count} 场</span>
                        <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary rounded-full transition-all duration-500"
                            style={{ width: `${(type.count / 78) * 100}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 热门城市 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  热门城市排行
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mapLocations
                    .sort((a, b) => b.count - a.count)
                    .map((location, index) => (
                      <div key={location.id} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3 ${
                            index === 0 ? 'bg-yellow-500' : 
                            index === 1 ? 'bg-gray-400' : 
                            index === 2 ? 'bg-amber-600' : 'bg-gray-300'
                          }`}>
                            {index + 1}
                          </div>
                          <span className="font-medium">{location.name}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-lg font-bold text-primary mr-2">
                            {location.count}
                          </span>
                          <span className="text-sm text-muted-foreground">场活动</span>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 最近活动 */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              最近活动
            </h2>
            <p className="text-lg text-muted-foreground">
              查看全国各地最新的开源活动动态
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mapLocations.flatMap(location => 
              location.activities.slice(0, 1).map(activity => (
                <Card key={activity.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{activity.type}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3 mr-1" />
                        {location.name}
                      </div>
                    </div>
                    <CardTitle className="text-lg">{activity.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      {activity.date}
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            在你的城市举办开源活动
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            开源社支持全国各地的开源爱好者举办本地活动，一起推动开源文化传播
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              申请举办活动
            </button>
            <button className="px-8 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors">
              加入志愿者团队
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}