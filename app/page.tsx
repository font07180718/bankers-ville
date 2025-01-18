'use client'

import Image from "next/image"
import { MapPin } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1A0B2E] text-white overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full bg-[#1A0B2E]/80 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="absolute top-0 left-24">
              <Image
                src="/pic/logo.jpg"
                alt="Logo"
                width={135}
                height={135}
                className="rounded-full shadow-lg"
              />
            </div>

            {/* Navigation */}
            <div className="flex items-center">
              <a href="/map" className="flex items-center space-x-2 hover:text-[#00CCFF] transition-colors hover:scale-105 transform duration-300">
                <MapPin size={18} />
                <span>小镇地图</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="pt-16">
        <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center -mt-20">
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
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-[500px] h-[500px] bg-[#0066FF]/20 rounded-full blur-[100px] -top-20 -left-20 animate-[float_6s_ease-in-out_infinite]" />
            <div className="absolute w-[500px] h-[500px] bg-[#FF3366]/20 rounded-full blur-[100px] -bottom-20 -right-20 animate-[float_8s_ease-in-out_infinite_reverse]" />
          </div>
          
          <div className="relative z-10 text-center px-4">
            {/* Text with fade-in and slide-up animations */}
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 animate-[fadeIn_1s_ease-out] [text-shadow:_0_4px_8px_rgb(0_0_0_/_20%)]">
              探索无限可能的元宇宙
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto animate-[fadeIn_1s_ease-out_0.5s_both]">
              在这里，创造力无边界，体验无限可能
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
