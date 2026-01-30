"use client";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
// আপনার পাবলিক ফোল্ডার থেকে ফাইলটি ইমপোর্ট করা হচ্ছে
import partyAnimation from "../public/BG-Party (1).json";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white overflow-hidden pt-20">
      
      {/* Lottie Background Animation */}
      <div className="absolute inset-0 pointer-events-none z-0 flex justify-center items-center opacity-70 bg-gradient-to-r from-blue-100 to-emerald-100">
        <Lottie 
          animationData={partyAnimation} 
          loop={true} 
          className="w-full h-full object-cover"
        />
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col items-center text-center relative z-10">
        
        {/* 1. Main Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-7xl font-extrabold tracking-tight text-[#1a1a1a]"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5E7D] via-[#A855F7] to-[#3B82F6]">
            Get Real Instagram Followers
          </span>
          <br />
          Using Organic AI-Growth & Automation
        </motion.h1>

        {/* 2. Subtext */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-8 text-lg md:text-xl text-gray-700 max-w-4xl font-medium leading-relaxed"
        >
          No bots, no fake followers, no passwords. Gain real targeted followers automatically <br className="hidden md:block" />
          using AI, Instagram Experts and our <span className="border-b border-gray-400">patent-pending* technology.</span>
        </motion.p>

        {/* 3. Buttons with Glowing Borders */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-12 flex flex-col sm:flex-row gap-6 items-center justify-center"
        >
          {/* Get Started Button */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <button className="relative px-12 py-5 bg-[#0F172A] text-white font-bold rounded-full text-xl flex items-center gap-3 transition-all active:scale-95">
              Get Started 
              <span className="text-2xl">›</span>
            </button>
          </div>

          {/* Preview Growth Button */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full blur-sm opacity-60"></div>
            <button className="relative px-12 py-5 bg-white text-gray-900 font-bold rounded-full text-xl border border-gray-100 transition-all active:scale-95">
              Preview your growth
            </button>
          </div>
        </motion.div>

        {/* 4. Trust Badges */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8 text-sm md:text-base font-bold text-gray-800"
        >
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
            2-Minute Setup
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
            100% Growth Guaranteed
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
            Rated 4.91/5
            <div className="flex gap-0.5 ml-1">
               {[...Array(5)].map((_, i) => (
                 <div key={i} className="w-5 h-5 bg-[#4ADE80] flex items-center justify-center rounded-sm">
                   <svg className="w-3.5 h-3.5 text-white fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                 </div>
               ))}
            </div>
          </div>
        </motion.div>

      </section>
    </main>
  );
}