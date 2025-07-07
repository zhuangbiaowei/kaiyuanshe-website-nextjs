"use client"

import { useEffect, useRef } from 'react'
import { MapLocation } from './map'

// 由于Leaflet在服务端渲染时会出现问题，我们创建一个简化版本
// 实际项目中需要安装 leaflet 和 react-leaflet 包

interface LeafletMapProps {
  locations: MapLocation[]
}

export default function LeafletMap({ locations }: LeafletMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // 这里会是实际的 Leaflet 地图初始化代码
    // 现在我们创建一个模拟的地图界面
    if (mapRef.current && typeof window !== 'undefined') {
      // 实际实现中会使用：
      // import L from 'leaflet'
      // const map = L.map(mapRef.current).setView([39.9042, 116.4074], 5)
      // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)
      
      // 现在我们创建一个简化的视觉效果
      createMockMap()
    }
  }, [locations])

  const createMockMap = () => {
    if (!mapRef.current) return

    // 清空容器
    mapRef.current.innerHTML = ''
    
    // 创建模拟地图界面
    const mapContainer = document.createElement('div')
    mapContainer.className = 'relative w-full h-full bg-gradient-to-br from-green-100 to-blue-100 overflow-hidden'
    
    // 添加地图背景纹理
    mapContainer.style.backgroundImage = `
      radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(34, 197, 94, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 60% 20%, rgba(168, 85, 247, 0.05) 0%, transparent 50%)
    `
    
    // 添加位置标记
    locations.forEach((location, index) => {
      const marker = document.createElement('div')
      marker.className = 'absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group'
      
      // 根据城市名称设置大致位置（模拟）
      const position = getCityPosition(location.name)
      marker.style.left = `${position.x}%`
      marker.style.top = `${position.y}%`
      
      // 创建标记点
      const pin = document.createElement('div')
      pin.className = `w-6 h-6 bg-primary rounded-full border-2 border-white shadow-lg flex items-center justify-center text-white text-xs font-bold transition-transform group-hover:scale-125`
      pin.textContent = location.count.toString()
      
      // 创建标签
      const label = document.createElement('div')
      label.className = 'absolute top-8 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow-lg text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10'
      label.textContent = `${location.name} (${location.count})`
      
      marker.appendChild(pin)
      marker.appendChild(label)
      mapContainer.appendChild(marker)
      
      // 添加点击事件
      marker.addEventListener('click', () => {
        showLocationDetails(location)
      })
    })
    
    // 添加控制按钮
    const controls = document.createElement('div')
    controls.className = 'absolute top-4 right-4 flex flex-col gap-2'
    
    const zoomIn = createControlButton('+', '放大')
    const zoomOut = createControlButton('-', '缩小')
    
    controls.appendChild(zoomIn)
    controls.appendChild(zoomOut)
    mapContainer.appendChild(controls)
    
    mapRef.current.appendChild(mapContainer)
  }

  const getCityPosition = (cityName: string): { x: number; y: number } => {
    // 模拟中国主要城市的相对位置
    const cityPositions: Record<string, { x: number; y: number }> = {
      '北京': { x: 60, y: 25 },
      '上海': { x: 75, y: 50 },
      '深圳': { x: 65, y: 75 },
      '成都': { x: 40, y: 55 },
      '杭州': { x: 72, y: 48 },
      '广州': { x: 63, y: 72 },
      '武汉': { x: 58, y: 52 },
      '西安': { x: 50, y: 42 },
      '南京': { x: 70, y: 45 },
      '台北': { x: 78, y: 68 }
    }
    
    return cityPositions[cityName] || { x: 50, y: 50 }
  }

  const createControlButton = (text: string, title: string): HTMLElement => {
    const button = document.createElement('button')
    button.className = 'w-8 h-8 bg-white border border-gray-300 rounded shadow hover:bg-gray-50 flex items-center justify-center font-bold text-gray-600'
    button.textContent = text
    button.title = title
    button.addEventListener('click', (e) => {
      e.stopPropagation()
      // 这里可以添加实际的缩放功能
    })
    return button
  }

  const showLocationDetails = (location: MapLocation) => {
    // 创建弹出窗口显示位置详情
    const popup = document.createElement('div')
    popup.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'
    popup.addEventListener('click', () => popup.remove())
    
    const content = document.createElement('div')
    content.className = 'bg-white rounded-lg p-6 max-w-md mx-4 max-h-96 overflow-y-auto'
    content.addEventListener('click', (e) => e.stopPropagation())
    
    content.innerHTML = `
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-lg font-bold">${location.name}</h3>
        <button class="text-gray-400 hover:text-gray-600" onclick="this.closest('.fixed').remove()">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <p class="text-gray-600 mb-4">活动数量: ${location.count}</p>
      <div class="space-y-2">
        <h4 class="font-semibold">最近活动:</h4>
        ${location.activities.slice(0, 3).map(activity => `
          <div class="border-l-2 border-primary pl-3 py-1">
            <div class="font-medium text-sm">${activity.title}</div>
            <div class="text-xs text-gray-500">${activity.date} · ${activity.type}</div>
          </div>
        `).join('')}
      </div>
    `
    
    popup.appendChild(content)
    document.body.appendChild(popup)
  }

  return (
    <div ref={mapRef} className="w-full h-full min-h-[400px] rounded-lg overflow-hidden">
      {/* Fallback content */}
      <div className="w-full h-full bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
        <p className="text-muted-foreground">地图组件加载中...</p>
      </div>
    </div>
  )
}