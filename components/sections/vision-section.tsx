import { Card, CardContent } from '@/components/ui/card'
import { Target, Globe, Users, Rocket } from 'lucide-react'

const missions = [
  {
    icon: Target,
    title: 'Open Source Governance',
    description: '开源治理',
    detail: '建立健全的开源项目治理机制，推动开源项目的规范化发展'
  },
  {
    icon: Globe,
    title: 'Global Bridging', 
    description: '全球桥梁',
    detail: '连接全球开源社区，促进国际交流与合作'
  },
  {
    icon: Users,
    title: 'Community Development',
    description: '社区发展',
    detail: '培育开源社区生态，推动开源文化传播'
  },
  {
    icon: Rocket,
    title: 'Project Incubation',
    description: '项目孵化',
    detail: '孵化优质开源项目，支持创新技术发展'
  }
]

const principles = [
  {
    title: 'Contribution',
    description: '贡献',
    detail: '每个人都可以为开源社区做出贡献'
  },
  {
    title: 'Consensus',
    description: '共识',
    detail: '通过开放讨论达成社区共识'
  },
  {
    title: 'Collegiality',
    description: '协作',
    detail: '在协作中实现共同成长和发展'
  }
]

export function VisionSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        {/* 使命部分 */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
            我们致力于推动开源事业发展，通过四个核心使命构建更加开放、协作的技术生态
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {missions.map((mission) => {
              const Icon = mission.icon
              return (
                <Card key={mission.title} className="group hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{mission.title}</h3>
                    <p className="text-primary font-medium mb-3">{mission.description}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {mission.detail}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* 原则部分 */}
        <div className="bg-muted/30 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Principles
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              开源社秉承三个核心原则，指导我们的社区建设和项目发展
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <div key={principle.title} className="text-center">
                <div className="relative mb-6">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto bg-primary text-primary-foreground rounded-full font-bold text-xl">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{principle.title}</h3>
                <p className="text-primary font-medium mb-3">{principle.description}</p>
                <p className="text-muted-foreground leading-relaxed">
                  {principle.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}