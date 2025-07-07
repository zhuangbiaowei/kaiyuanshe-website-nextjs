#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Next.js 开发环境诊断工具\n');

// 1. 检查 Node.js 版本
console.log('1. 检查 Node.js 环境:');
console.log(`   Node.js: ${process.version}`);
console.log(`   平台: ${process.platform}`);
console.log(`   架构: ${process.arch}\n`);

// 2. 检查项目文件
console.log('2. 检查项目文件:');
const requiredFiles = [
    'package.json',
    'next.config.mjs',
    'tsconfig.json',
    'tailwind.config.ts'
];

requiredFiles.forEach(file => {
    if (fs.existsSync(file)) {
        console.log(`   ✅ ${file} 存在`);
    } else {
        console.log(`   ❌ ${file} 缺失`);
    }
});

// 3. 检查 node_modules
console.log('\n3. 检查依赖:');
if (fs.existsSync('node_modules')) {
    console.log('   ✅ node_modules 目录存在');
    
    const criticalDeps = ['next', 'react', 'react-dom', 'typescript'];
    criticalDeps.forEach(dep => {
        if (fs.existsSync(`node_modules/${dep}`)) {
            console.log(`   ✅ ${dep} 已安装`);
        } else {
            console.log(`   ❌ ${dep} 未安装`);
        }
    });
} else {
    console.log('   ❌ node_modules 目录不存在');
    console.log('   解决方案: 运行 npm install');
}

// 4. 检查 Next.js 配置
console.log('\n4. 检查 Next.js 配置:');
try {
    const nextConfig = fs.readFileSync('next.config.mjs', 'utf8');
    if (nextConfig.includes('export default')) {
        console.log('   ✅ next.config.mjs 格式正确');
    } else {
        console.log('   ⚠️  next.config.mjs 可能有格式问题');
    }
} catch (err) {
    console.log('   ❌ 无法读取 next.config.mjs');
}

// 5. 检查端口
console.log('\n5. 检查端口 3000:');
const net = require('net');
const server = net.createServer();

server.listen(3000, (err) => {
    if (err) {
        console.log('   ❌ 端口 3000 被占用');
        console.log('   解决方案: 杀死占用进程或使用其他端口');
    } else {
        console.log('   ✅ 端口 3000 可用');
        server.close();
    }
});

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.log('   ❌ 端口 3000 被占用');
        console.log('   解决方案: 运行 lsof -ti:3000 | xargs kill -9');
    } else {
        console.log(`   ❌ 端口检查失败: ${err.message}`);
    }
});

// 6. 检查内存和磁盘空间
console.log('\n6. 系统资源:');
const usage = process.memoryUsage();
console.log(`   内存使用: ${Math.round(usage.heapUsed / 1024 / 1024)}MB`);

try {
    const stats = fs.statSync('.');
    console.log('   ✅ 当前目录可访问');
} catch (err) {
    console.log('   ❌ 当前目录访问问题');
}

console.log('\n🎯 常见解决方案:');
console.log('1. 安装依赖: npm install');
console.log('2. 清理缓存: npm cache clean --force');
console.log('3. 删除 node_modules 重新安装: rm -rf node_modules && npm install');
console.log('4. 检查端口: lsof -ti:3000');
console.log('5. 使用其他端口: npm run dev -- -p 3001');