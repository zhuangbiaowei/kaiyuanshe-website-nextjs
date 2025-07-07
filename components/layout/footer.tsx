import Link from 'next/link'
import { Github, Twitter, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 开源社简介 */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-md font-bold">
                开
              </div>
              <span className="font-bold text-xl">开源社</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              开源社是由中国开源软件推进联盟指导下的，致力于推广开源理念、推进开源项目、推动开源发展的开源社区。
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/kaiyuanshe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://twitter.com/kaiyuanshe"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="mailto:contact@kaiyuanshe.cn"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">邮件联系</span>
              </Link>
            </div>
          </div>

          {/* 快速链接 */}
          <div>
            <h4 className="font-semibold mb-4">快速链接</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  关于我们
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-foreground transition-colors">
                  我们的产品
                </Link>
              </li>
              <li>
                <Link href="/ranking" className="text-muted-foreground hover:text-foreground transition-colors">
                  人物榜单
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  博客
                </Link>
              </li>
            </ul>
          </div>

          {/* 项目链接 */}
          <div>
            <h4 className="font-semibold mb-4">核心项目</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="https://wuhan2020.kaiyuanshe.cn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  新冠援助平台
                </Link>
              </li>
              <li>
                <Link 
                  href="https://github.com/kaiyuanshe/osschat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  OSS.Chat
                </Link>
              </li>
              <li>
                <Link 
                  href="https://kaiyuanshe.cn/organization"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  中国开源地图
                </Link>
              </li>
              <li>
                <Link 
                  href="https://opensource.win"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  中国开源码力榜
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} 开源社 KAIYUANSHE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}