import { Button } from '@/components/ui/button'
import React from 'react'
import Authentication from './Authentication'

function Hero() {
  return (
    <div className="px-6 md:px-10 py-16 flex flex-col items-center justify-center mt-16 md:mt-24">
      
      {/* Heading with gradient animation */}
      <h2 className="text-5xl md:text-4xl font-bold bg-gradient-to-r from-amber-50 to-violet-600 bg-clip-text text-transparent drop-shadow-lg tracking-tight text-center animate-gradient-x">
        AI YouTube Short Video Generator
      </h2>

      {/* Description */}
      <p className="mt-6 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto text-center leading-relaxed">
        Transform your ideas into{" "}
        <span className="bg-gradient-to-r from-indigo-500 to-violet-600 bg-clip-text text-transparent font-semibold animate-gradient-x">
          viral YouTube Shorts
        </span>{" "}
        with AI-powered automation.
      </p>

      {/* Buttons */}
      <div className="mt-10 flex gap-6 flex-wrap justify-center">
        {/* Explore Button */}
        <Button className="group relative px-10 py-4 rounded-2xl bg-gradient-to-br from-gray-900/90 to-gray-800/90
                backdrop-blur-xl border border-gray-700/50 text-white font-bold text-lg shadow-2xl shadow-black/40
                hover:shadow-3xl hover:shadow-black/60 hover:scale-[1.02]
                transition-all duration-500 ease-out overflow-hidden
                before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent
                before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-1000
                after:absolute after:inset-[1px] after:rounded-2xl after:bg-gradient-to-br after:from-gray-800/50 after:to-transparent">
          <span className="relative z-10 bg-gradient-to-r from-gray-200 to-gray-300 bg-clip-text text-transparent animate-gradient-x">
            Explore
          </span>
        </Button>


        {/* Get Started Button */}
        <Authentication>
        <Button className="group relative px-12 py-4.5 rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-600 to-purple-700
                backdrop-blur-xl border border-violet-500/30 text-white font-bold text-lg shadow-2xl shadow-violet-600/40
                hover:shadow-3xl hover:shadow-violet-600/60 hover:scale-[1.02]
                transition-all duration-500 ease-out overflow-hidden
                before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
                before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-1000
                after:absolute after:inset-[1px] after:rounded-2xl after:bg-gradient-to-br after:from-white/10 after:to-transparent">
          <span className="relative z-10 flex items-center gap-2 animate-gradient-x">
            Get Started
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </Button>
        </Authentication>
      </div>

    </div>
  )
}

export default Hero
