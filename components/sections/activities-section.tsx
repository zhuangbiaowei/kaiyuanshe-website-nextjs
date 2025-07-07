"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CalendarDays, MapPin, ArrowRight } from 'lucide-react'

const mockActivities = [
  {
    id: 'coscon-2024',
    title: '中国开源年会 2024',
    description: '第九届中国开源年会，汇聚全球开源领袖',
    location: '北京 中关村国家自主创新示范区-会议中心',
    date: '2024-10-26',
    link: 'https://kaiyuanshe.cn/activity/COSCon-2024',
    type: 'conference' as const
  },
  {
    id: 'coscup-2024',
    title: 'COSCUP 2024 大陆讲师团',
    description: '参与台湾开源人年会的大陆讲师团队',
    location: '臺北市 台湾科技大学',
    date: '2024-08-03',
    link: 'https://kaiyuanshe.cn/activity/COSCUP-2024',
    type: 'conference' as const
  }
]

const activityTypeMap = {
  conference: { label: '会议', color: 'bg-blue-100 text-blue-800' },
  meetup: { label: '聚会', color: 'bg-green-100 text-green-800' },
  workshop: { label: '工作坊', color: 'bg-purple-100 text-purple-800' },
  hackathon: { label: '黑客松', color: 'bg-orange-100 text-orange-800' }
}

function formatDate(date: string) {
  const d = new Date(date)
  return d.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export function ActivitiesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Latest Activity
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            开源社定期举办各类活动，包括技术会议、社区聚会、工作坊等，促进开源社区的交流与发展
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {mockActivities.map((activity, index) => {
            const typeInfo = activityTypeMap[activity.type]
            
            return (
              <Card key={activity.id} className={`group hover:shadow-xl transition-all duration-300 ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
                <CardContent className="p-0">
                  {/* 活动封面图 */}
                  <div className={`${index === 0 ? 'aspect-[2/1]' : 'aspect-video'} bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center relative overflow-hidden`}>
                    <div className="text-primary font-bold text-4xl">
                      {activity.title.slice(0, 2)}
                    </div>
                    
                    {/* 活动类型标签 */}
                    <div className="absolute top-4 left-4">
                      <Badge className={`${typeInfo.color} border-0`}>
                        {typeInfo.label}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className={`font-bold mb-3 group-hover:text-primary transition-colors ${index === 0 ? 'text-xl md:text-2xl' : 'text-lg'}`}>
                      {activity.title}
                    </h3>
                    
                    <p className={`text-muted-foreground mb-4 leading-relaxed ${index === 0 ? 'text-base' : 'text-sm'}`}>
                      {activity.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <CalendarDays className="h-4 w-4 mr-2" />
                        <span>{formatDate(activity.date)}</span>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{activity.location}</span>
                      </div>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      size={index === 0 ? "default" : "sm"} 
                      className="w-full group/btn" 
                      asChild
                    >
                      <Link href={activity.link} target="_blank" rel="noopener noreferrer">
                        了解详情
                        <ArrowRight className="ml-2 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="group" asChild>
            <Link href="/products/coscon">
              查看更多活动
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}