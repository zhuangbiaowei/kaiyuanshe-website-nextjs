"use client"

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, X } from 'lucide-react'

interface NavigationItem {
  name: string
  href: string
  children?: NavigationItem[]
}

const navigation: NavigationItem[] = [
  {
    name: '首页',
    href: '/'
  },
  {
    name: '关于我们',
    href: '/about',
    children: [
      { name: '开源社简介', href: '/about' },
      { name: '社区治理', href: '/about/governance' },
      { name: '理事会', href: '/about/board' },
      { name: '执委会', href: '/about/executive' },
      { name: '正式成员', href: '/about/members' },
      { name: '合作伙伴', href: '/about/partners' }
    ]
  },
  {
    name: '我们的产品',
    href: '/products',
    children: [
      { name: '中国开源年会', href: '/products/coscon' },
      { name: '年度报告', href: '/products/annual-report' },
      { name: '开源与公益地图', href: '/products/map' },
      { name: '开源社项目展示', href: '/products/projects' }
    ]
  },
  {
    name: '中国开源人物榜单',
    href: '/ranking'
  },
  {
    name: '博客',
    href: '/blog',
    children: [
      { name: '原创文章', href: '/blog/original' },
      { name: '翻译文章', href: '/blog/translation' },
      { name: '活动报道', href: '/blog/events' },
      { name: '志愿者风采', href: '/blog/volunteers' }
    ]
  }
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-md font-bold">
            开
          </div>
          <span className="font-bold text-xl">开源社</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
              
              {/* Dropdown menu for items with children */}
              {item.children && (
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-background border rounded-md shadow-lg p-2 min-w-48">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted rounded-sm transition-colors"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">打开菜单</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <div className="flex items-center justify-between mb-6">
              <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                <div className="flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-md font-bold">
                  开
                </div>
                <span className="font-bold text-xl">开源社</span>
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            
            <nav className="space-y-4">
              {navigation.map((item) => (
                <div key={item.name} className="space-y-2">
                  <Link
                    href={item.href}
                    className="block text-lg font-medium hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  
                  {item.children && (
                    <div className="pl-4 space-y-2 border-l">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block text-muted-foreground hover:text-foreground transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}