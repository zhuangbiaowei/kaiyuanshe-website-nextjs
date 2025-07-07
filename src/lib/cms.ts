// CMS内容管理系统 - 用于管理静态数据和内容

import membersData from '@/src/data/members.json'
import partnersData from '@/src/data/partners.json'

// 成员相关类型和接口
export interface Member {
  id: string
  name: string
  title: string
  avatar: string
  bio: string
  company: string
  position: string
  github?: string
  linkedin?: string
  email: string
  joinDate: string
  specialties: string[]
  achievements: string[]
}

export interface MembersByRole {
  board: Member[]
  executive: Member[]
  members: Member[]
}

// 合作伙伴相关类型
export interface Partner {
  id: string
  name: string
  logo: string
  website: string
  description: string
  partnership: {
    level: string
    startDate: string
    collaborations: string[]
  }
  contributions: string[]
  contact: {
    email: string
    person: string
  }
}

export interface PartnersByLevel {
  platinum: Partner[]
  gold: Partner[]
  silver: Partner[]
  community: Partner[]
}

// 获取所有成员数据
export function getAllMembers(): MembersByRole {
  return membersData as MembersByRole
}

// 根据角色获取成员
export function getMembersByRole(role: keyof MembersByRole): Member[] {
  const members = getAllMembers()
  return members[role] || []
}

// 根据ID获取成员
export function getMemberById(id: string): Member | undefined {
  const allMembers = getAllMembers()
  const allMembersList = [
    ...allMembers.board,
    ...allMembers.executive,
    ...allMembers.members
  ]
  return allMembersList.find(member => member.id === id)
}

// 搜索成员
export function searchMembers(query: string): Member[] {
  const allMembers = getAllMembers()
  const allMembersList = [
    ...allMembers.board,
    ...allMembers.executive,
    ...allMembers.members
  ]
  
  const lowercaseQuery = query.toLowerCase()
  return allMembersList.filter(member =>
    member.name.toLowerCase().includes(lowercaseQuery) ||
    member.bio.toLowerCase().includes(lowercaseQuery) ||
    member.specialties.some(specialty => 
      specialty.toLowerCase().includes(lowercaseQuery)
    )
  )
}

// 获取成员统计信息
export function getMemberStats() {
  const members = getAllMembers()
  const totalMembers = members.board.length + members.executive.length + members.members.length
  
  return {
    total: totalMembers,
    board: members.board.length,
    executive: members.executive.length,
    members: members.members.length
  }
}

// 获取所有合作伙伴
export function getAllPartners(): PartnersByLevel {
  return partnersData as PartnersByLevel
}

// 根据级别获取合作伙伴
export function getPartnersByLevel(level: keyof PartnersByLevel): Partner[] {
  const partners = getAllPartners()
  return partners[level] || []
}

// 根据ID获取合作伙伴
export function getPartnerById(id: string): Partner | undefined {
  const allPartners = getAllPartners()
  const allPartnersList = [
    ...allPartners.platinum,
    ...allPartners.gold,
    ...allPartners.silver,
    ...allPartners.community
  ]
  return allPartnersList.find(partner => partner.id === id)
}

// 搜索合作伙伴
export function searchPartners(query: string): Partner[] {
  const allPartners = getAllPartners()
  const allPartnersList = [
    ...allPartners.platinum,
    ...allPartners.gold,
    ...allPartners.silver,
    ...allPartners.community
  ]
  
  const lowercaseQuery = query.toLowerCase()
  return allPartnersList.filter(partner =>
    partner.name.toLowerCase().includes(lowercaseQuery) ||
    partner.description.toLowerCase().includes(lowercaseQuery) ||
    partner.contributions.some(contribution => 
      contribution.toLowerCase().includes(lowercaseQuery)
    )
  )
}

// 获取合作伙伴统计信息
export function getPartnerStats() {
  const partners = getAllPartners()
  const totalPartners = 
    partners.platinum.length + 
    partners.gold.length + 
    partners.silver.length + 
    partners.community.length
  
  return {
    total: totalPartners,
    platinum: partners.platinum.length,
    gold: partners.gold.length,
    silver: partners.silver.length,
    community: partners.community.length
  }
}

// 获取合作伙伴级别信息
export function getPartnerLevels() {
  return [
    {
      id: 'platinum',
      name: '钻石合作伙伴',
      description: '最高级别的战略合作伙伴',
      color: 'bg-gray-300 text-gray-800',
      benefits: [
        'COSCon主会场logo展示',
        '独立展位',
        '主题发言机会',
        '社区深度合作'
      ]
    },
    {
      id: 'gold',
      name: '黄金合作伙伴',
      description: '重要的技术合作伙伴',
      color: 'bg-yellow-300 text-yellow-800',
      benefits: [
        '分会场logo展示',
        '展位支持',
        '技术分享机会',
        '项目合作优先'
      ]
    },
    {
      id: 'silver',
      name: '白银合作伙伴',
      description: '积极的社区支持伙伴',
      color: 'bg-gray-200 text-gray-700',
      benefits: [
        '官网logo展示',
        '活动推广支持',
        '技术交流机会',
        '社区资源共享'
      ]
    },
    {
      id: 'community',
      name: '社区合作伙伴',
      description: '共同推动开源发展的社区组织',
      color: 'bg-blue-100 text-blue-700',
      benefits: [
        '联合活动举办',
        '内容合作发布',
        '社区互动支持',
        '资源互补共享'
      ]
    }
  ]
}

// 内容标签管理
export interface Tag {
  id: string
  name: string
  color: string
  count: number
  category: 'technology' | 'event' | 'community' | 'project'
}

// 获取所有标签
export function getAllTags(): Tag[] {
  // 这里可以从实际的标签数据文件中获取
  return [
    { id: 'javascript', name: 'JavaScript', color: 'bg-yellow-100 text-yellow-800', count: 25, category: 'technology' },
    { id: 'python', name: 'Python', color: 'bg-blue-100 text-blue-800', count: 30, category: 'technology' },
    { id: 'react', name: 'React', color: 'bg-cyan-100 text-cyan-800', count: 18, category: 'technology' },
    { id: 'coscon', name: 'COSCon', color: 'bg-purple-100 text-purple-800', count: 15, category: 'event' },
    { id: 'community', name: '社区', color: 'bg-green-100 text-green-800', count: 40, category: 'community' },
    { id: 'open-source', name: '开源', color: 'bg-red-100 text-red-800', count: 50, category: 'project' }
  ]
}

// 根据分类获取标签
export function getTagsByCategory(category: Tag['category']): Tag[] {
  return getAllTags().filter(tag => tag.category === category)
}

// 搜索标签
export function searchTags(query: string): Tag[] {
  const lowercaseQuery = query.toLowerCase()
  return getAllTags().filter(tag =>
    tag.name.toLowerCase().includes(lowercaseQuery)
  )
}

// 内容分类管理
export interface ContentCategory {
  id: string
  name: string
  description: string
  icon: string
  color: string
  count: number
  subcategories?: ContentCategory[]
}

// 获取内容分类
export function getContentCategories(): ContentCategory[] {
  return [
    {
      id: 'technology',
      name: '技术分享',
      description: '技术文章和教程',
      icon: 'Code',
      color: 'bg-blue-500',
      count: 45,
      subcategories: [
        { id: 'frontend', name: '前端技术', description: '', icon: '', color: '', count: 15 },
        { id: 'backend', name: '后端技术', description: '', icon: '', color: '', count: 20 },
        { id: 'ai', name: '人工智能', description: '', icon: '', color: '', count: 10 }
      ]
    },
    {
      id: 'community',
      name: '社区动态',
      description: '社区新闻和活动',
      icon: 'Users',
      color: 'bg-green-500',
      count: 32
    },
    {
      id: 'projects',
      name: '项目展示',
      description: '开源项目介绍',
      icon: 'Folder',
      color: 'bg-purple-500',
      count: 28
    },
    {
      id: 'events',
      name: '活动报道',
      description: '活动新闻和总结',
      icon: 'Calendar',
      color: 'bg-orange-500',
      count: 22
    }
  ]
}

// 导出所有CMS功能
export const CMS = {
  // 成员管理
  members: {
    getAll: getAllMembers,
    getByRole: getMembersByRole,
    getById: getMemberById,
    search: searchMembers,
    getStats: getMemberStats
  },
  
  // 合作伙伴管理  
  partners: {
    getAll: getAllPartners,
    getByLevel: getPartnersByLevel,
    getById: getPartnerById,
    search: searchPartners,
    getStats: getPartnerStats,
    getLevels: getPartnerLevels
  },
  
  // 内容管理
  content: {
    tags: {
      getAll: getAllTags,
      getByCategory: getTagsByCategory,
      search: searchTags
    },
    categories: {
      getAll: getContentCategories
    }
  }
}