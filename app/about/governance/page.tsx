import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '治理结构 - 开源社',
  description: '了解开源社的治理结构、组织架构、决策机制和透明度原则。',
}

export default function GovernancePage() {
  return (
    <div className="container section-padding">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            治理结构
          </h1>
          <p className="text-xl text-muted-foreground">
            开放透明的社区治理与决策机制
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">治理原则</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              开源社秉承开放、透明、协作的治理原则，建立了完善的治理体系，确保社区的健康发展和可持续运营。我们相信通过开放的治理模式，能够更好地服务于全球开源社区。
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">透明度</h3>
                <p className="text-muted-foreground text-sm">
                  所有重要决策和流程都公开透明，社区成员可以参与讨论和监督
                </p>
              </div>
              <div className="bg-white border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">包容性</h3>
                <p className="text-muted-foreground text-sm">
                  欢迎不同背景的贡献者参与，建立多元化的治理结构
                </p>
              </div>
              <div className="bg-white border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">问责制</h3>
                <p className="text-muted-foreground text-sm">
                  建立明确的责任机制，确保治理团队对社区负责
                </p>
              </div>
              <div className="bg-white border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3 text-primary">可持续性</h3>
                <p className="text-muted-foreground text-sm">
                  确保治理机制的长期稳定性和可持续发展
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">组织架构</h2>
            
            <div className="bg-muted/30 rounded-lg p-8 mb-8">
              <h3 className="text-xl font-semibold mb-4">理事会</h3>
              <p className="text-muted-foreground mb-4">
                理事会是开源社的最高决策机构，负责制定战略方向、重大政策和资源分配。
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>制定社区发展战略和长期规划</li>
                <li>审议和批准重要政策和制度</li>
                <li>监督社区资源的使用和分配</li>
                <li>任命执行团队和核心贡献者</li>
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">执行委员会</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  负责日常运营管理和具体项目执行
                </p>
                <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                  <li>活动组织与执行</li>
                  <li>项目管理与协调</li>
                  <li>对外合作与联系</li>
                  <li>社区运营管理</li>
                </ul>
              </div>
              <div className="bg-white border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">技术委员会</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  负责技术方向指导和项目评审
                </p>
                <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                  <li>技术标准制定</li>
                  <li>项目孵化评审</li>
                  <li>技术发展指导</li>
                  <li>开源许可建议</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">决策机制</h2>
            
            <div className="space-y-6">
              <div className="bg-white border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">共识决策</h3>
                <p className="text-muted-foreground mb-4">
                  对于重要议题，我们优先寻求社区共识，通过开放讨论达成一致意见。
                </p>
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-medium mb-1">提议阶段</h4>
                    <p className="text-muted-foreground text-sm">社区成员提出建议并进行初步讨论</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 mt-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-medium mb-1">讨论阶段</h4>
                    <p className="text-muted-foreground text-sm">开放式讨论，收集各方意见和建议</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 mt-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h4 className="font-medium mb-1">决议阶段</h4>
                    <p className="text-muted-foreground text-sm">形成最终决议并公布执行计划</p>
                  </div>
                </div>
              </div>

              <div className="bg-white border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">投票机制</h3>
                <p className="text-muted-foreground mb-4">
                  对于无法达成共识的议题，启动投票机制进行决策。
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li><strong>理事会投票：</strong>重大战略决策需要理事会2/3以上同意</li>
                  <li><strong>委员会投票：</strong>专业领域决策由相应委员会简单多数决定</li>
                  <li><strong>社区投票：</strong>涉及社区利益的决策可发起全社区投票</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">参与方式</h2>
            
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 mb-6">
              <h3 className="text-xl font-semibold mb-4">如何参与治理</h3>
              <p className="text-muted-foreground mb-6">
                开源社欢迎所有社区成员参与治理，共同建设更好的开源社区。
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                    📝
                  </div>
                  <h4 className="font-semibold mb-2">提交提案</h4>
                  <p className="text-muted-foreground text-sm">
                    通过GitHub或官方渠道提交改进建议
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                    💬
                  </div>
                  <h4 className="font-semibold mb-2">参与讨论</h4>
                  <p className="text-muted-foreground text-sm">
                    在社区论坛和会议中积极发表意见
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                    🗳️
                  </div>
                  <h4 className="font-semibold mb-2">参与投票</h4>
                  <p className="text-muted-foreground text-sm">
                    在重要决策中行使投票权
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                如有治理相关问题或建议，欢迎联系我们
              </p>
              <a 
                href="mailto:governance@kaiyuanshe.cn" 
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                联系治理团队
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}