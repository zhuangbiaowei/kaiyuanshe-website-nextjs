"use client"

import { useState, useEffect } from 'react'

// 断点定义（与 Tailwind CSS 保持一致）
const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const

type Breakpoint = keyof typeof breakpoints

export function useResponsive() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  })

  const [deviceType, setDeviceType] = useState<'mobile' | 'tablet' | 'desktop'>('desktop')

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth
      const height = window.innerHeight
      
      setWindowSize({ width, height })

      // 设备类型判断
      if (width < breakpoints.md) {
        setDeviceType('mobile')
      } else if (width < breakpoints.lg) {
        setDeviceType('tablet')
      } else {
        setDeviceType('desktop')
      }
    }

    // 初始化
    handleResize()

    // 监听窗口大小变化
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // 检查是否匹配特定断点
  const isMatch = (breakpoint: Breakpoint, direction: 'up' | 'down' = 'up') => {
    if (typeof window === 'undefined') return false
    
    const width = windowSize.width
    const breakpointValue = breakpoints[breakpoint]
    
    return direction === 'up' ? width >= breakpointValue : width < breakpointValue
  }

  // 便捷的断点检查方法
  const isMobile = deviceType === 'mobile'
  const isTablet = deviceType === 'tablet'
  const isDesktop = deviceType === 'desktop'
  
  const isSm = isMatch('sm')
  const isMd = isMatch('md')
  const isLg = isMatch('lg')
  const isXl = isMatch('xl')
  const is2Xl = isMatch('2xl')

  return {
    windowSize,
    deviceType,
    isMobile,
    isTablet,
    isDesktop,
    isSm,
    isMd,
    isLg,
    isXl,
    is2Xl,
    isMatch,
  }
}