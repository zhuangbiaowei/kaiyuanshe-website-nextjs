#!/bin/bash

echo "🔧 修复Git配置错误..."

# 设置安全目录（解决Git安全检查问题）
git config --global --add safe.directory /home/runner/app

# 检查Git用户配置
if [ -z "$(git config user.name)" ]; then
    echo "设置Git用户名..."
    git config user.name "Clacky User"
fi

if [ -z "$(git config user.email)" ]; then
    echo "设置Git邮箱..."
    git config user.email "user@clacky.dev"
fi

# 修复可能的权限问题
chmod -R 755 .git

# 修复index.lock问题（如果存在）
if [ -f .git/index.lock ]; then
    echo "删除Git锁文件..."
    rm -f .git/index.lock
fi

# 检查Git状态
echo "检查Git状态..."
git status

echo "✅ Git修复完成！"