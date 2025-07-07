import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '关于我们 - 开源社',
  description: '了解开源社的使命、愿景和发展历程，以及我们的治理结构和社区成员。',
}

export default function AboutPage() {
  return (
    <div className="container section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            关于开源社
          </h1>
          <p className="text-xl text-muted-foreground">
            KAIYUANSHE - The Home of Open-Sourcers
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">我们的故事</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              开源社成立于2014年，是由中国开源软件推进联盟指导下的，致力于推广开源理念、推进开源项目、推动开源发展的开源社区。我们相信开源不仅仅是一种软件开发模式，更是一种全新的生活方式。
            </p>
            <p className="text-muted-foreground leading-relaxed">
              经过多年的发展，开源社已经成为中国最具影响力的开源社区之一，我们通过举办开源年会、孵化开源项目、推动开源教育等方式，为中国开源事业的发展做出了重要贡献。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">愿景与使命</h2>
            <div className="bg-muted/30 rounded-lg p-8 mb-8">
              <h3 className="text-xl font-semibold mb-4 text-primary">Our Vision</h3>
              <p className="text-lg font-medium mb-2">
                Contribute to and promote open source as a new way of life to the world
              </p>
              <p className="text-muted-foreground">
                贡献于全球，推广开源成为一种新的生活方式
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">开源治理</h3>
                <p className="text-muted-foreground text-sm">
                  建立健全的开源项目治理机制，推动开源项目的规范化发展
                </p>
              </div>
              <div className="bg-white border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">全球桥梁</h3>
                <p className="text-muted-foreground text-sm">
                  连接全球开源社区，促进国际交流与合作
                </p>
              </div>
              <div className="bg-white border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">社区发展</h3>
                <p className="text-muted-foreground text-sm">
                  培育开源社区生态，推动开源文化传播
                </p>
              </div>
              <div className="bg-white border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">项目孵化</h3>
                <p className="text-muted-foreground text-sm">
                  孵化优质开源项目，支持创新技术发展
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">核心原则</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  贡
                </div>
                <h3 className="text-lg font-semibold mb-2">Contribution</h3>
                <p className="text-muted-foreground">每个人都可以为开源社区做出贡献</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  识
                </div>
                <h3 className="text-lg font-semibold mb-2">Consensus</h3>
                <p className="text-muted-foreground">通过开放讨论达成社区共识</p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  作
                </div>
                <h3 className="text-lg font-semibold mb-2">Collegiality</h3>
                <p className="text-muted-foreground">在协作中实现共同成长和发展</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}