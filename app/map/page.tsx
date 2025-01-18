'use client'

import Image from "next/image"
import { ArrowLeft, Landmark } from "lucide-react"
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
      name: "Central Plaza",
      description: "The core commercial center with the highest foot traffic in town",
      imageUrl: "/images/central-plaza.png",
      price: 1000,
      holders: 156
    },
    {
      id: 2,
      name: "Coastal Park",
      description: "Seaside leisure area, perfect for tourism development",
      imageUrl: "/images/coastal-park.png",
      price: 800,
      holders: 89
    },
    {
      id: 3,
      name: "Tech Park",
      description: "High-tech industry cluster zone",
      imageUrl: "https://picsum.photos/400/302",
      price: 1200,
      holders: 234
    },
    {
      id: 4,
      name: "Arts Center",
      description: "Cultural arts exhibition and performance venue",
      imageUrl: "https://picsum.photos/400/303",
      price: 950,
      holders: 167
    },
    {
      id: 5,
      name: "Sports Complex",
      description: "Comprehensive sports and recreation center",
      imageUrl: "https://picsum.photos/400/304",
      price: 880,
      holders: 145
    },
    {
      id: 6,
      name: "Commercial District",
      description: "Bustling shopping and business area",
      imageUrl: "https://picsum.photos/400/305",
      price: 1500,
      holders: 278
    },
    {
      id: 7,
      name: "Education Hub",
      description: "Premium educational resources center",
      imageUrl: "https://picsum.photos/400/306",
      price: 1100,
      holders: 198
    },
    {
      id: 8,
      name: "Medical Center",
      description: "Modern healthcare facilities and services",
      imageUrl: "https://picsum.photos/400/307",
      price: 1300,
      holders: 223
    },
    {
      id: 9,
      name: "Eco Park",
      description: "Natural ecological conservation area",
      imageUrl: "https://picsum.photos/400/308",
      price: 750,
      holders: 134
    },
    {
      id: 10,
      name: "Innovation Hub",
      description: "Technology innovation and business incubation center",
      imageUrl: "https://picsum.photos/400/309",
      price: 1400,
      holders: 245
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
              <span className="font-semibold">Notice: </span>
              Welcome to Ville Assets - Participate in the development of our digital town
            </p>
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="max-w-[1200px] mx-auto px-8 flex items-center mb-8">
          <button 
            onClick={handleBack}
            className="flex items-center gap-2 hover:text-[#00CCFF] transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back</span>
          </button>
          <h1 className="text-3xl font-bold text-center flex-1">Ville Assets</h1>
        </div>
        
        <div className="max-w-[1200px] mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white/5 rounded-xl overflow-hidden backdrop-blur-sm hover:bg-white/10 transition-colors flex flex-col"
            >
              <div className="relative w-full pt-[90%]">
                <Image
                  src={project.imageUrl}
                  alt={project.name}
                  fill
                  className="object-cover absolute top-0 left-0"
                />
              </div>
              
              <div className="p-4 flex flex-col flex-1">
                <div>
                  <h3 className="text-lg font-bold mb-2">{project.name}</h3>
                  <p className="text-gray-300 text-sm min-h-[40px] mb-8">{project.description}</p>
                </div>
                
                <div className="mt-auto">
                  <div className="space-y-2 mb-6">
                    <p className="text-[#00CCFF] text-sm">
                      Current Holders: <span className="font-semibold">{project.holders}</span>
                    </p>
                    <p className="text-[#00CCFF] text-sm">
                      Current Price: <span className="font-semibold">{project.price} TOKEN</span>
                    </p>
                  </div>
                  
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleBuy(project.id)}
                      className="flex-1 px-6 py-2 text-sm bg-[#0066FF] hover:bg-[#0066FF]/80 rounded-full transition-colors"
                    >
                      Buy
                    </button>
                    <button
                      onClick={() => handleSell(project.id)}
                      className="flex-1 px-6 py-2 text-sm bg-[#FF3366] hover:bg-[#FF3366]/80 rounded-full transition-colors"
                    >
                      Sell
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 