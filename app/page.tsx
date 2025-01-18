'use client'

import { useEffect, useRef, useState } from 'react'
import Image from "next/image"
import { Wallet } from "lucide-react"
import AIChatbot from "@/components/AIChatbot"

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry) {
          setIsVisible(entry.isIntersecting)
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    )

    const element = sectionRef.current
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#1A0B2E] text-white overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full bg-[#1A0B2E]/80 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo Section */}
            <div className="flex items-center gap-4">
              <div className="flex items-center -ml-4 mt-2">
                <Image
                  src="/pic/logo.jpg"
                  alt="Logo"
                  width={80}
                  height={80}
                  className="rounded-full shadow-lg"
                />
              </div>
              
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3">
                  <h1 className="text-2xl font-bold text-white tracking-wide">
                    Banker&apos;s Ville
                  </h1>
                  <span className="text-gray-400">|</span>
                  <span className="text-sm text-gray-400 italic">
                    Where AI dreams trade in digital whispers
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-6">
              <a href="/map" className="flex items-center space-x-2 hover:text-[#00CCFF] transition-colors hover:scale-105 transform duration-300">
                <span>Ville Assets</span>
              </a>
              
              <button 
                className="px-4 py-2 border border-[#00CCFF] text-[#00CCFF] rounded-full hover:bg-[#00CCFF]/10 transition-all flex items-center gap-2"
              >
                <Wallet size={16} />
                <span>Connect Wallet</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center -mt-20">
          {/* Hero Section */}
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 animate-[fadeIn_1s_ease-out] [text-shadow:_0_4px_8px_rgb(0_0_0_/_20%)]">
              Welcome to Banker's Ville
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto animate-[fadeIn_1s_ease-out_0.5s_both]">
              The first self-evolving AI-enabled digital economy system
            </p>
          </div>

          {/* Background Video */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-20"
            >
              <source src="/video/homepage.mp4" type="video/mp4" />
            </video>
          </div>

          {/* Animated gradient orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute w-[500px] h-[500px] bg-[#0066FF]/20 rounded-full blur-[100px] -top-20 -left-20 animate-[float_6s_ease-in-out_infinite]" />
            <div className="absolute w-[500px] h-[500px] bg-[#FF3366]/20 rounded-full blur-[100px] -bottom-20 -right-20 animate-[float_8s_ease-in-out_infinite_reverse]" />
          </div>
        </div>

        {/* Second Section */}
        <div 
          ref={sectionRef}
          className="relative min-h-screen flex items-center justify-center opacity-0 transform translate-y-10"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 1s ease-out'
          }}
        >
          {/* Background Image with overlay */}
          <div className="absolute inset-0">
            <Image
              src="/images/pic1.png"
              alt="Background"
              fill
              className="object-cover"
              style={{
                opacity: isVisible ? 0.2 : 0,
                transition: 'opacity 1s ease-out'
              }}
              priority
            />
            <div 
              className="absolute inset-0 bg-gradient-to-b from-[#1A0B2E] to-[#0D0522]"
              style={{
                opacity: isVisible ? 0.8 : 1,
                transition: 'opacity 1s ease-out'
              }}
            />
          </div>
          
          {/* Content */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left side - Text */}
              <div 
                className="lg:col-span-4 text-left"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(-40px)',
                  transition: 'all 1s ease-out 0.2s'
                }}
              >
                <h2 className="text-xl mb-4 text-gray-300">Hold virtual real estate</h2>
                <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                  Become a landlord in the Banker's Ville
                </h1>
              </div>

              {/* Right side - Image */}
              <div 
                className="lg:col-span-8 relative w-full"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(40px)',
                  transition: 'all 1s ease-out 0.4s'
                }}
              >
                <div className="relative w-full aspect-[16/9]">
                  <Image
                    src="/images/pic1.png"
                    alt="Ville Map"
                    fill
                    className="object-contain rounded-xl shadow-2xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Animated gradient orbs */}
          <div 
            className="absolute inset-0 overflow-hidden pointer-events-none"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 1s ease-out 0.6s'
            }}
          >
            <div className="absolute w-[500px] h-[500px] bg-[#0066FF]/20 rounded-full blur-[100px] -top-20 -left-20 animate-[float_6s_ease-in-out_infinite]" />
            <div className="absolute w-[500px] h-[500px] bg-[#FF3366]/20 rounded-full blur-[100px] -bottom-20 -right-20 animate-[float_8s_ease-in-out_infinite_reverse]" />
          </div>
        </div>

        {/* Alpha Season Section */}
        <div className="relative min-h-screen flex items-center">
          {/* Background with gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D0522] to-[#1A0B2E]" />
          
          {/* Content Grid */}
          <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Side - Image */}
            <div className="lg:col-span-7 relative w-full aspect-[16/9] rounded-2xl overflow-hidden">
              <Image
                src="/images/map.png"
                alt="Alpha Season 4"
                fill
                className="object-contain"
              />
            </div>

            {/* Right Side - Content */}
            <div className="lg:col-span-5 text-left">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                <span className="text-gray-400">已结束 - 12月18日</span>
              </div>
              
              <h2 className="text-4xl font-bold mb-4">
                让我们回顾 Alpha 第四季
              </h2>
              
              <p className="text-gray-300 text-lg mb-8">
                Alpha 第 4 季堪称传奇！在我们前往下一个重大活动时，一起花点时间重温这个 Alpha 赛季的精彩时刻。更多精彩活动及奖池即将推出，敬请期待！
              </p>

              <button className="px-6 py-3 border border-white/20 rounded-full hover:bg-white/10 transition-colors">
                了解更多
              </button>
            </div>
          </div>

          {/* Animated gradient orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute w-[500px] h-[500px] bg-[#0066FF]/20 rounded-full blur-[100px] top-20 right-20 animate-[float_6s_ease-in-out_infinite]" />
            <div className="absolute w-[500px] h-[500px] bg-[#FF3366]/20 rounded-full blur-[100px] -bottom-20 -left-20 animate-[float_8s_ease-in-out_infinite_reverse]" />
          </div>
        </div>

        {/* AI Chat Section */}
        <div className="relative min-h-screen flex items-center">
          {/* Background with gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A0B2E] to-[#0D0522]" />
          
          {/* Content */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 pt-20">
            <div className="flex flex-col items-center">
              <div className="relative w-full max-w-[1200px]">
                {/* Main Chat Container */}
                <div className="bg-[#1A0B2E]/80 backdrop-blur-md rounded-3xl overflow-hidden flex">
                  {/* Left Side - Character */}
                  <div className="w-[380px] bg-gradient-to-b from-[#1A0B2E] to-[#0D0522] flex items-center justify-center py-8">
                    <div className="relative w-full h-[450px]">
                      <Image
                        src="/images/girl.png"
                        alt="Virtual Assistant"
                        fill
                        className="object-contain object-bottom scale-125"
                        priority
                        sizes="380px"
                      />
                    </div>
                  </div>
                  
                  {/* Right Side - Chat Interface */}
                  <div className="flex-1 flex flex-col min-h-[550px] max-h-[550px]">
                    {/* Chat Header */}
                    <div className="p-4 border-b border-[#00CCFF]/20">
                      <h3 className="text-lg font-semibold text-[#00CCFF]">Sarah, the secretary of the town</h3>
                    </div>
                    
                    {/* Messages Area */}
                    <div className="flex-1">
                      <AIChatbot />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Animated gradient orbs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute w-[500px] h-[500px] bg-[#0066FF]/20 rounded-full blur-[100px] -top-20 -right-20 animate-[float_6s_ease-in-out_infinite]" />
            <div className="absolute w-[500px] h-[500px] bg-[#FF3366]/20 rounded-full blur-[100px] -bottom-20 -left-20 animate-[float_8s_ease-in-out_infinite_reverse]" />
          </div>
        </div>
      </main>
    </div>
  )
}
