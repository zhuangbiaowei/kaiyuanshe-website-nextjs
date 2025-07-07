// 开源社核心数据类型定义

export interface Project {
  id: string
  name: string
  description: string
  image: string
  link: string
  category: string
  featured?: boolean
}

export interface Activity {
  id: string
  title: string
  description: string
  location: string
  date: string
  image: string
  link: string
  type: 'conference' | 'meetup' | 'workshop' | 'hackathon'
}

export interface News {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  image?: string
  category: 'original' | 'translation' | 'event' | 'volunteer'
  tags: string[]
}

export interface Person {
  id: string
  name: string
  title: string
  avatar: string
  description: string
  github?: string
  website?: string
  company?: string
  location?: string
  contributions: string[]
}

export interface Partner {
  id: string
  name: string
  logo: string
  website: string
  description: string
  type: 'platinum' | 'gold' | 'silver' | 'community'
}

export interface Organization {
  name: string
  description: string
  vision: string
  mission: string
  principles: string[]
  governance: {
    board: Person[]
    executive: Person[]
    members: Person[]
  }
}

// 地图相关类型
export interface MapLocation {
  id: string
  name: string
  coordinates: [number, number] // [latitude, longitude]
  activities: Activity[]
  count: number
}

// 导航相关类型
export interface NavigationItem {
  name: string
  href: string
  children?: NavigationItem[]
}