'use client'

import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

interface VoteProject {
  id: number
  name: string
  description: string
  imageUrl: string
  price: number
  holders: number
}

export default function MapPage() {
  const router = useRouter()
  const projects: VoteProject[] = [
    {
      id: 1,
      name: "中心广场",
      description: "小镇的核心区域，人流量最大的商业中心",
      imageUrl: "https://picsum.photos/400/300",
      price: 1000,
      holders: 156
    },
    {
      id: 2,
      name: "滨海公园",
      description: "临海休闲区，适合发展旅游项目",
      imageUrl: "https://picsum.photos/400/301",
      price: 800,
      holders: 89
    },
    {
      id: 3,
      name: "科技园区",
      description: "高新技术产业集中地",
      imageUrl: "https://picsum.photos/400/302",
      price: 1200,
      holders: 234
    }
  ]

  const handleBack = () => {
    router.back()
  }

  const handleBuy = (projectId: number) => {
    console.log(`买入项目 ${projectId}`)
  }

  const handleSell = (projectId: number) => {
    console.log(`卖出项目 ${projectId}`)
  }

  return (
    <div className="min-h-screen bg-[#1A0B2E] text-white">
      <div className="bg-gradient-to-r from-[#0066FF]/20 to-[#FF3366]/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
          <div className="text-center text-sm">
            <p>
              <span className="font-semibold">公告：</span>
              欢迎来到小镇地图投票系统 - 在这里参与小镇建设的决策
            </p>
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="max-w-6xl mx-auto flex items-center mb-8">
          <button 
            onClick={handleBack}
            className="flex items-center gap-2 hover:text-[#00CCFF] transition-colors"
          >
            <ArrowLeft size={20} />
            <span>返回</span>
          </button>
          <h1 className="text-3xl font-bold text-center flex-1">小镇地图</h1>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white/5 rounded-xl overflow-hidden backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              <div className="relative h-48">
                <Image
                  src={project.imageUrl}
                  alt={project.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <p className="text-[#00CCFF] mb-2">
                  当前持有者: <span className="font-semibold">{project.holders} 人</span>
                </p>
                <p className="text-[#00CCFF] font-bold mb-4">
                  当前价格: {project.price} TOKEN
                </p>
                
                <div className="flex gap-4">
                  <button
                    onClick={() => handleBuy(project.id)}
                    className="flex-1 px-4 py-2 bg-[#0066FF] hover:bg-[#0066FF]/80 rounded-full transition-colors"
                  >
                    买入
                  </button>
                  <button
                    onClick={() => handleSell(project.id)}
                    className="flex-1 px-4 py-2 bg-[#FF3366] hover:bg-[#FF3366]/80 rounded-full transition-colors"
                  >
                    卖出
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 