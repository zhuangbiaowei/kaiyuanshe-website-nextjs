#!/bin/bash

echo "🔧 修复 npm run dev 问题..."

# 1. 检查 Node.js 版本
echo "Node.js 版本："
node --version
echo "npm 版本："
npm --version

# 2. 清理可能的缓存和锁文件
echo "清理缓存..."
npm cache clean --force 2>/dev/null || echo "缓存清理完成"

# 3. 删除可能存在的锁文件
if [ -f package-lock.json.backup ]; then
    rm package-lock.json.backup
fi

# 4. 安装依赖
echo "安装依赖..."
npm install --no-audit --no-fund

# 5. 检查关键依赖是否安装成功
echo "检查关键依赖..."
if [ -d "node_modules/next" ]; then
    echo "✅ Next.js 已安装"
else
    echo "❌ Next.js 未安装"
fi

if [ -d "node_modules/react" ]; then
    echo "✅ React 已安装"
else
    echo "❌ React 未安装"
fi

# 6. 尝试运行开发服务器
echo "尝试启动开发服务器..."
echo "如果出现错误，请查看错误信息"

# 检查端口是否被占用
PORT_CHECK=$(lsof -ti:3000 2>/dev/null)
if [ ! -z "$PORT_CHECK" ]; then
    echo "端口 3000 被占用，尝试杀死进程..."
    kill -9 $PORT_CHECK 2>/dev/null
fi

echo "准备就绪! 现在可以运行 npm run dev"