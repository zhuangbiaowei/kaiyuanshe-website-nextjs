import { Project, Activity, News, Person, Partner, Organization } from '@/types'

// 静态数据获取函数
export async function getProjects(): Promise<Project[]> {
  // 模拟异步数据获取，实际项目中会从JSON文件或API获取
  return [
    {
      id: 'wuhan2020',
      name: '新冠援助平台',
      description: '2020年新冠疫情期间开发的援助平台项目',
      image: '/images/projects/wuhan2020.png',
      link: 'https://wuhan2020.kaiyuanshe.cn/',
      category: '公益项目',
      featured: true
    },
    {
      id: 'osschat',
      name: 'OSS.Chat',
      description: '开源软件聊天机器人项目',
      image: '/images/projects/osschat.png',
      link: 'https://github.com/kaiyuanshe/osschat',
      category: '工具软件',
      featured: true
    },
    {
      id: 'china-open-source-map',
      name: '中国开源地图',
      description: '展示中国开源项目分布的可视化地图',
      image: '/images/projects/map.png',
      link: 'https://kaiyuanshe.cn/organization',
      category: '可视化',
      featured: true
    },
    {
      id: 'annual-report',
      name: '中国开源年度报告',
      description: '每年发布的中国开源发展状况报告',
      image: '/images/projects/report.png',
      link: 'https://kaiyuanshe.feishu.cn/wiki/wikcnUDeVll6PNzw900yPV71Sxd',
      category: '研究报告',
      featured: true
    }
  ]
}

export async function getActivities(): Promise<Activity[]> {
  return [
    {
      id: 'coscon-2024',
      title: '中国开源年会 2024',
      description: '第九届中国开源年会，汇聚全球开源领袖',
      location: '北京 中关村国家自主创新示范区-会议中心',
      date: '2024-10-26',
      image: '/images/activities/coscon-2024.png',
      link: 'https://kaiyuanshe.cn/activity/COSCon-2024',
      type: 'conference'
    },
    {
      id: 'coscup-2024',
      title: 'COSCUP 2024 大陆讲师团',
      description: '参与台湾开源人年会的大陆讲师团队',
      location: '臺北市 台湾科技大学',
      date: '2024-08-03',
      image: '/images/activities/coscup-2024.png',
      link: 'https://kaiyuanshe.cn/activity/COSCUP-2024',
      type: 'conference'
    }
  ]
}

export async function getNews(): Promise<News[]> {
  return [
    {
      id: 'annual-awards-2024',
      title: '2024 开源社年度评选',
      excerpt: '2024年度开源社优秀项目和个人评选活动',
      content: '详细的评选内容...',
      author: 'COSCon\'24 组委会',
      date: '2024-12-15',
      category: 'event',
      tags: ['评选', '2024', '年度']
    },
    {
      id: 'coscon24-partners',
      title: 'COSCon\'24媒体和社区合作伙伴全亮相',
      excerpt: '感谢广大社区对COSCon\'24的支持！',
      content: '详细的合作伙伴介绍...',
      author: 'COSCon\'24 组委会',
      date: '2024-11-20', 
      category: 'event',
      tags: ['COSCon', '合作伙伴', '2024']
    }
  ]
}

export async function getOrganization(): Promise<Organization> {
  return {
    name: '开源社',
    description: 'KAIYUANSHE - The Home of Open-Sourcers',
    vision: 'Contribute to and promote open source as a new way of life to the world',
    mission: 'Open Source Governance, Global Bridging, Community Development, Project Incubation',
    principles: ['Contribution', 'Consensus', 'Collegiality'],
    governance: {
      board: [],
      executive: [],
      members: []
    }
  }
}

export async function getTopDevelopers(): Promise<Person[]> {
  return [
    {
      id: 'wangyantong',
      name: 'wangyantong',
      title: '开源开发者',
      avatar: 'https://avatars.githubusercontent.com/u/135088663?v=4',
      description: '2024年中国开源码力榜排名第一',
      github: 'https://github.com/wangyantong2000',
      location: 'Shanghai',
      contributions: ['开源项目贡献', '社区建设']
    },
    {
      id: 'frank-zhao',
      name: 'Frank Zhao', 
      title: '开源技术专家',
      avatar: 'https://avatars.githubusercontent.com/u/8512426?v=4',
      description: '2024年中国开源码力榜排名第二',
      github: 'https://github.com/frank-zsy',
      location: 'Hangzhou',
      contributions: ['技术创新', '开源推广']
    }
  ]
}