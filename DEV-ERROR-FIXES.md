# npm run dev 错误修复指南

## 🚨 问题诊断

根据分析，`npm run dev` 报错的主要原因是 **node_modules 目录不存在**。

### ✅ 当前项目状态
- ✅ `package.json` 配置正确
- ✅ `next.config.mjs` 配置正确  
- ✅ `package-lock.json` 存在
- ❌ `node_modules` 目录缺失

## 🔧 解决方案

### 方案 1: 安装依赖（推荐）
```bash
# 清理npm缓存
npm cache clean --force

# 安装所有依赖
npm install

# 启动开发服务器
npm run dev
```

### 方案 2: 完全重新安装
```bash
# 删除锁文件（如果需要）
rm -f package-lock.json

# 安装依赖
npm install

# 启动开发服务器  
npm run dev
```

### 方案 3: 使用yarn（备选）
```bash
# 安装yarn
npm install -g yarn

# 使用yarn安装依赖
yarn install

# 启动开发服务器
yarn dev
```

## 📋 项目依赖概览

### 核心依赖
- **Next.js**: 15.2.4 (React框架)
- **React**: ^19 (UI库)
- **TypeScript**: ^5 (类型系统)
- **Tailwind CSS**: ^3.4.17 (样式框架)

### UI组件库
- **Radix UI**: 完整的无障碍组件集合
- **Lucide React**: 图标库
- **Shadcn/ui**: 现代UI组件

### 特色功能依赖
- **Leaflet**: 地图可视化
- **MDX**: Markdown支持
- **Zustand**: 状态管理
- **React Hook Form**: 表单处理

## 🚀 启动步骤

1. **安装依赖**
   ```bash
   npm install
   ```

2. **启动开发服务器**
   ```bash
   npm run dev
   ```

3. **访问应用**
   ```
   http://localhost:3000
   ```

## 🔍 常见错误解决

### 错误: "Cannot find module 'next'"
**原因**: node_modules 未安装
**解决**: `npm install`

### 错误: "Port 3000 is already in use"
**原因**: 端口被占用
**解决**: 
```bash
# 查找占用进程
lsof -ti:3000

# 杀死占用进程
lsof -ti:3000 | xargs kill -9

# 或使用其他端口
npm run dev -- -p 3001
```

### 错误: "ENOSPC: System limit for number of file watchers reached"
**原因**: 文件监听数量超限
**解决**:
```bash
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
sudo sysctl -p
```

### 错误: TypeScript 类型错误
**原因**: 类型定义问题
**解决**: 
```bash
# 安装类型定义
npm install @types/node @types/react @types/react-dom

# 重启TypeScript服务器
npx tsc --noEmit
```

## 📊 项目架构

```
kaiyuanshe-website-nextjs/
├── app/                    # Next.js 13+ App Router
│   ├── page.tsx           # 首页
│   ├── about/             # 关于我们
│   ├── blog/              # 博客系统
│   ├── products/          # 产品展示
│   └── ranking/           # 人物榜单
├── components/            # 可复用组件
│   ├── ui/               # UI基础组件
│   └── sections/         # 页面区块组件
├── src/                  # 数据和工具
│   ├── data/            # JSON数据文件
│   ├── lib/             # 工具函数
│   └── types/           # 类型定义
└── public/              # 静态资源
```

## 🎯 开发环境要求

- **Node.js**: v22.16.0+ 
- **npm**: 最新版本
- **操作系统**: Ubuntu 22.04.4+
- **内存**: 建议 2GB+
- **磁盘空间**: 建议 1GB+

## ✨ 开发命令

```bash
# 开发模式
npm run dev

# 生产构建
npm run build

# 生产启动
npm run start  

# 代码检查
npm run lint

# 类型检查
npx tsc --noEmit
```

## 🔄 故障排除流程

1. **检查依赖**: `ls node_modules` 
2. **重新安装**: `rm -rf node_modules && npm install`
3. **清理缓存**: `npm cache clean --force`
4. **检查端口**: `lsof -i:3000`
5. **查看日志**: `npm run dev` 查看具体错误信息

---

**🎉 修复完成后，您的开源社网站将在 http://localhost:3000 运行！**

包含完整的现代化功能：
- 📱 响应式设计
- 🗺️ 地图可视化  
- 📝 CMS内容管理
- 🎨 现代UI设计
- ⚡ 高性能优化

---
*修复指南 - 开源社网站项目 2024*