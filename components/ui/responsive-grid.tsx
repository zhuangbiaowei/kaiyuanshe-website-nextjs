"use client"

import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface ResponsiveGridProps {
  children: ReactNode
  className?: string
  // 不同断点的列数配置
  cols?: {
    default?: number
    sm?: number
    md?: number
    lg?: number
    xl?: number
    '2xl'?: number
  }
  gap?: {
    default?: number
    sm?: number
    md?: number
    lg?: number
    xl?: number
    '2xl'?: number
  }
}

export function ResponsiveGrid({ 
  children, 
  className,
  cols = { default: 1, md: 2, lg: 3 },
  gap = { default: 4 }
}: ResponsiveGridProps) {
  
  // 构建响应式类名
  const getColsClass = () => {
    const classes = []
    
    if (cols.default) classes.push(`grid-cols-${cols.default}`)
    if (cols.sm) classes.push(`sm:grid-cols-${cols.sm}`)
    if (cols.md) classes.push(`md:grid-cols-${cols.md}`)
    if (cols.lg) classes.push(`lg:grid-cols-${cols.lg}`)
    if (cols.xl) classes.push(`xl:grid-cols-${cols.xl}`)
    if (cols['2xl']) classes.push(`2xl:grid-cols-${cols['2xl']}`)
    
    return classes.join(' ')
  }

  const getGapClass = () => {
    const classes = []
    
    if (gap.default) classes.push(`gap-${gap.default}`)
    if (gap.sm) classes.push(`sm:gap-${gap.sm}`)
    if (gap.md) classes.push(`md:gap-${gap.md}`)
    if (gap.lg) classes.push(`lg:gap-${gap.lg}`)
    if (gap.xl) classes.push(`xl:gap-${gap.xl}`)
    if (gap['2xl']) classes.push(`2xl:gap-${gap['2xl']}`)
    
    return classes.join(' ')
  }

  return (
    <div className={cn(
      'grid',
      getColsClass(),
      getGapClass(),
      className
    )}>
      {children}
    </div>
  )
}