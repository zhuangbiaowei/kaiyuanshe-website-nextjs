import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// 日期格式化工具
export function formatDate(date: string | Date) {
  const d = new Date(date)
  return d.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// 字符串截取工具
export function truncate(str: string, length: number) {
  return str.length > length ? str.slice(0, length) + '...' : str
}

// URL 验证工具
export function isValidUrl(url: string) {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

// 延迟执行工具
export function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}