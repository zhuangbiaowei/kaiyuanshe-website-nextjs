// 博客相关的数据管理和工具函数

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  category: 'original' | 'translation' | 'events' | 'volunteers'
  tags: string[]
  image?: string
  readTime?: number
  featured?: boolean
}

export interface BlogCategory {
  id: string
  name: string
  description: string
  count: number
}

// 模拟博客文章数据
export const mockBlogPosts: BlogPost[] = [
  {
    id: 'annual-awards-2024',
    title: '2024 开源社年度评选',
    excerpt: '2024年度开源社优秀项目和个人评选活动启动，表彰在开源领域做出杰出贡献的项目和个人。',
    content: `
# 2024 开源社年度评选

开源社一年一度的评选活动又开始了！我们诚邀社区成员推荐在2024年度表现突出的开源项目和个人。

## 评选类别

### 优秀开源项目奖
表彰在技术创新、社区建设、商业应用等方面表现优秀的开源项目。

### 开源贡献者奖
表彰在开源项目贡献、社区建设、开源推广等方面做出杰出贡献的个人。

### 开源新锐奖
表彰新兴的、具有发展潜力的开源项目和年轻贡献者。

## 评选标准

1. **技术创新性**: 项目的技术先进性和创新性
2. **社区活跃度**: 项目社区的活跃程度和参与度
3. **实用价值**: 项目的实际应用价值和市场影响力
4. **开源精神**: 遵循开源理念，积极回馈社区

## 提名方式

请通过官方渠道提交提名材料，包括项目介绍、贡献说明等相关文档。

期待您的参与！
    `,
    author: "COSCon'24 组委会",
    date: '2024-12-15',
    category: 'events',
    tags: ['评选', '2024', '年度', 'COSCon'],
    readTime: 5,
    featured: true
  },
  {
    id: 'coscon24-partners',
    title: 'COSCon\'24媒体和社区合作伙伴全亮相',
    excerpt: '感谢广大社区对COSCon\'24的支持！本次大会得到了众多媒体和社区合作伙伴的大力支持。',
    content: `
# COSCon'24媒体和社区合作伙伴全亮相

COSCon'24 得到了众多媒体和社区合作伙伴的大力支持，在此表示衷心感谢！

## 媒体合作伙伴

### 技术媒体
- InfoQ 中国
- CSDN
- 开源中国
- 51CTO

### 行业媒体
- 雷锋网
- 36氪
- 钛媒体

## 社区合作伙伴

### 开源社区
- Apache 软件基金会中国社区
- Linux 中国
- 腾讯开源
- 华为开源

### 技术社区
- 掘金
- 思否 SegmentFault  
- 博客园
- 知乎

正是有了这些合作伙伴的支持，COSCon'24 才能够成功举办并取得圆满成功。

感谢所有合作伙伴的支持与参与！
    `,
    author: "COSCon'24 组委会",
    date: '2024-11-20',
    category: 'events',
    tags: ['COSCon', '合作伙伴', '2024', '媒体'],
    readTime: 3,
    featured: true
  },
  {
    id: 'open-source-hardware-forum',
    title: '论坛介绍 | 开源硬件论坛',
    excerpt: 'COSCon\'24 开源硬件论坛将汇聚硬件开源领域的专家和爱好者，分享最新的开源硬件项目和技术趋势。',
    content: `
# 论坛介绍 | 开源硬件论坛

## 论坛概述

开源硬件论坛是 COSCon'24 的重要分论坛之一，专注于开源硬件的发展与创新。

## 主要议题

### 开源硬件设计
- PCB 开源设计工具
- 硬件描述语言（HDL）
- 开源 EDA 工具链

### 硬件创新项目
- RISC-V 开源处理器
- 开源开发板项目
- 物联网硬件平台

### 社区与生态
- 开源硬件社区建设
- 硬件创业与商业化
- 开源硬件教育

## 特邀嘉宾

我们邀请了来自学术界和工业界的专家学者，分享他们在开源硬件领域的最新研究成果和实践经验。

## 参与方式

欢迎对开源硬件感兴趣的朋友参与论坛讨论，共同推动开源硬件生态的发展。
    `,
    author: "COSCon'24 组委会",
    date: '2024-10-15',
    category: 'events',
    tags: ['COSCon', '开源硬件', '论坛', '技术'],
    readTime: 4
  },
  {
    id: 'open-source-contribution-guide',
    title: '如何开始你的第一个开源贡献',
    excerpt: '本文将为初学者介绍如何开始参与开源项目，包括选择项目、理解贡献流程、提交第一个 Pull Request 等。',
    content: `
# 如何开始你的第一个开源贡献

开源贡献是程序员成长路上的重要一步。本文将指导初学者如何开始自己的开源之旅。

## 为什么要参与开源

1. **技能提升**: 接触优秀代码，学习最佳实践
2. **经验积累**: 获得真实项目开发经验
3. **网络建设**: 结识志同道合的开发者
4. **职业发展**: 提升个人品牌和就业竞争力

## 选择合适的项目

### 项目特征
- 活跃的社区和维护者
- 清晰的贡献指南
- 友好的新手引导

### 推荐平台
- GitHub
- GitLab
- Gitee

## 贡献流程

### 1. Fork 项目
将目标项目 fork 到自己的账户下

### 2. 克隆代码
\`\`\`bash
git clone https://github.com/your-username/project-name.git
\`\`\`

### 3. 创建分支
\`\`\`bash
git checkout -b feature/your-feature-name
\`\`\`

### 4. 提交改动
\`\`\`bash
git add .
git commit -m "Add your feature"
git push origin feature/your-feature-name
\`\`\`

### 5. 创建 Pull Request
在原项目中创建 PR，详细描述你的改动

## 贡献类型

- **代码贡献**: 修复 bug、添加功能
- **文档改进**: 完善文档、翻译
- **测试**: 编写测试用例、报告问题
- **设计**: UI/UX 设计、图标制作

## 注意事项

1. 仔细阅读项目的贡献指南
2. 遵循项目的代码规范
3. 写清楚的提交信息
4. 积极响应维护者的反馈

开始你的开源之旅吧！
    `,
    author: '开源社技术团队',
    date: '2024-09-20',
    category: 'original',
    tags: ['开源', '贡献', '新手指南', 'GitHub'],
    readTime: 8,
    featured: true
  },
  {
    id: 'volunteer-story-zhang-san',
    title: '志愿者故事：张三的开源社之路',
    excerpt: '分享开源社志愿者张三的成长经历，从一个初学者到开源社核心志愿者的转变过程。',
    content: `
# 志愿者故事：张三的开源社之路

## 初识开源社

我是张三，一个普通的程序员。两年前，我在一次技术聚会上第一次听说了开源社。

## 第一次参与

我的第一次参与是COSCon的志愿者工作，主要负责会场引导和签到工作。

### 收获与感动

- 结识了很多志同道合的朋友
- 学习了很多组织大型活动的经验
- 深刻感受到了开源社区的温暖

## 成长历程

### 第一年
- 参与了3次线下活动
- 开始负责一些小组织工作
- 学会了活动策划的基本流程

### 第二年
- 成为核心志愿者
- 负责新志愿者培训
- 参与开源社的日常运营

## 我的体会

参与开源社让我不仅在技术上有了提升，更重要的是让我学会了如何与人协作，如何组织活动，如何为社区贡献自己的力量。

## 对新志愿者的建议

1. 积极参与，主动沟通
2. 不要害怕犯错，勇于尝试
3. 珍惜每一次学习机会
4. 记住，我们都是为了同一个目标

希望更多的朋友能够加入我们，一起为开源事业贡献力量！
    `,
    author: '张三',
    date: '2024-08-15',
    category: 'volunteers',
    tags: ['志愿者', '成长', '经验分享', '开源社'],
    readTime: 6
  }
]

// 博客分类
export const blogCategories: BlogCategory[] = [
  {
    id: 'original',
    name: '原创文章',
    description: '开源社原创技术文章和思考',
    count: mockBlogPosts.filter(post => post.category === 'original').length
  },
  {
    id: 'translation',
    name: '翻译文章', 
    description: '优秀外文技术文章翻译',
    count: mockBlogPosts.filter(post => post.category === 'translation').length
  },
  {
    id: 'events',
    name: '活动报道',
    description: '开源社活动新闻和报道',
    count: mockBlogPosts.filter(post => post.category === 'events').length
  },
  {
    id: 'volunteers',
    name: '志愿者风采',
    description: '志愿者故事和经验分享',
    count: mockBlogPosts.filter(post => post.category === 'volunteers').length
  }
]

// 获取所有博客文章
export function getAllPosts(): BlogPost[] {
  return mockBlogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

// 根据分类获取文章
export function getPostsByCategory(category: string): BlogPost[] {
  return mockBlogPosts
    .filter(post => post.category === category)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

// 获取特色文章
export function getFeaturedPosts(): BlogPost[] {
  return mockBlogPosts
    .filter(post => post.featured)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

// 根据ID获取文章
export function getPostById(id: string): BlogPost | undefined {
  return mockBlogPosts.find(post => post.id === id)
}

// 获取相关文章
export function getRelatedPosts(currentPost: BlogPost, limit: number = 3): BlogPost[] {
  return mockBlogPosts
    .filter(post => 
      post.id !== currentPost.id && 
      (post.category === currentPost.category || 
       post.tags.some(tag => currentPost.tags.includes(tag)))
    )
    .slice(0, limit)
}

// 搜索文章
export function searchPosts(query: string): BlogPost[] {
  const lowercaseQuery = query.toLowerCase()
  return mockBlogPosts.filter(post =>
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.excerpt.toLowerCase().includes(lowercaseQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  )
}

// 获取所有标签
export function getAllTags(): string[] {
  const allTags = mockBlogPosts.flatMap(post => post.tags)
  return Array.from(new Set(allTags)).sort()
}

// 计算阅读时间
export function calculateReadTime(content: string): number {
  const wordsPerMinute = 200
  const words = content.split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}