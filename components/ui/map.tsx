"use client"

import dynamic from 'next/dynamic'

// 动态导入 Leaflet 以避免 SSR 问题
const MapComponent = dynamic(() => import('./leaflet-map'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-96 bg-muted flex items-center justify-center rounded-lg">
      <p className="text-muted-foreground">地图加载中...</p>
    </div>
  )
})

export interface MapLocation {
  id: string
  name: string
  coordinates: [number, number] // [latitude, longitude]
  count: number
  activities: {
    id: string
    title: string
    date: string
    type: string
  }[]
}

interface MapProps {
  locations: MapLocation[]
  className?: string
  height?: string
}

export function Map({ locations, className = "", height = "400px" }: MapProps) {
  return (
    <div className={`rounded-lg overflow-hidden ${className}`} style={{ height }}>
      <MapComponent locations={locations} />
    </div>
  )
}