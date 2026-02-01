"use client";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import partyAnimation from "../public/BG-Party (1).json";
import DashboardPreview from "@/components/DashboardPreview";
import { Play, Maximize, Volume2, MoreVertical } from 'lucide-react';
// section 3 logo
const logos = [
  { name: "Nutribullet", url: "https://i.ibb.co.com/LdTp91y7/logos-logistica-promocional-logo-61-EAEDFE0-D-seeklogo-com.png" },
  { name: "Rockport", url: "https://i.ibb.co.com/s9FqBQh5/rockport-logo-png-seeklogo-320801.png" },
  { name: "SmileDirectClub", url: "https://i.ibb.co.com/kVQW26RB/doutor-octopus-logo-1-C3-C8-B0-FC2-seeklogo-com.png" },
  { name: "Wired", url: "https://i.ibb.co.com/9RvQtcV/sreelogo-logo-png-seeklogo-373377.png" },
  { name: "Esquire", url: "https://i.ibb.co.com/gLgJtqtH/design-free-logo-logo-png-seeklogo-306222.png" },
  { name: "The Sun", url: "https://i.ibb.co.com/JWjMtkhb/logo-design-new-zealand-logo-png-seeklogo-85155.png" },
  { name: "PRWeek", url: "https://i.ibb.co.com/NcL9rFZ/business-wire-logo-png-seeklogo-23905.png" }, // PNG format
  { name: "Social Media Today", url: "https://i.ibb.co.com/4Zz8dp9c/esquire-grill-logo-png-seeklogo-49406.png" }
];


export default function Home() {
  return (
    <main className="relative min-h-screen bg-white overflow-hidden pt-20">
      {/* section 1 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col items-center text-center relative z-10">
        {/* Lottie Background Animation */}
        <div className="absolute inset-0 pointer-events-none z-0 flex justify-center items-center opacity-70 ">
          <Lottie
            animationData={partyAnimation}
            loop={true}
            className="w-full h-full object-cover"
          />
        </div>

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
      {/* section 2 */}
      {/* Dashboard Preview Section */}
      <section>
        <DashboardPreview />
      </section>
      {/* logo section 3 */}
      <section className="relative py-20 bg-white overflow-hidden border-t border-gray-50">
        <div className="text-center mb-24 px-4 relative z-10">
          <h3 className="text-[11px] md:text-sm font-black tracking-[0.3em] text-gray-400 uppercase">
            TRUSTED BY <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500">
              55,000+ INSTAGRAMMERS, AGENCIES & BUSINESSES
            </span>
          </h3>
        </div>

        {/* Diagonal Container wrapper */}
        <div className="relative flex flex-col gap-8 md:gap-14 transform -rotate-3 md:-rotate-6 scale-110 origin-center py-10">

          {/* First Line: Scroll Left */}
          <div className="flex overflow-hidden">
            <motion.div
              className="flex whitespace-nowrap gap-16 md:gap-32 items-center px-10"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            >
              {[...logos, ...logos].map((logo, index) => (
                <div key={index} className="flex-shrink-0">
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="h-12 md:h-20 w-auto object-contain hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Second Line: Scroll Right */}
          <div className="flex overflow-hidden">
            <motion.div
              className="flex whitespace-nowrap gap-16 md:gap-32 items-center px-10"
              animate={{ x: ["-50%", "0%"] }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            >
              {[...logos, ...logos].map((logo, index) => (
                <div key={index} className="flex-shrink-0">
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="h-12 md:h-20 w-auto object-contain hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Gradient Overlays (Rotated with content) */}
          <div className="absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-white via-white/90 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-white via-white/90 to-transparent z-20 pointer-events-none"></div>
        </div>
      </section>
      <section className="py-24 bg-white overflow-hidden flex justify-center items-center">
      
      <div className="max-w-5xl mx-auto px-4 w-full">
        
        {/* Main Gradient Card Container */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full rounded-[3rem] p-8 md:p-12 overflow-hidden"
          style={{
            // ইমেজের মত গ্রেডিয়েন্ট কালার (Blue -> Purple -> Orange/Pink)
            background: 'linear-gradient(135deg, #1A73E8 0%, #8B5CF6 50%, #F43F5E 100%)' 
          }}
        >
          {/* Background Decor Shapes (Optional - to match the blurry feel) */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 blur-3xl rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

          <div className="flex flex-col items-center justify-center gap-8 relative z-10">
            
            {/* 1. Video Player Container with White Border */}
            <div className="w-full max-w-4xl bg-white p-3 md:p-4 rounded-[2rem] shadow-2xl">
              <div className="relative aspect-video bg-gray-100 rounded-[1.5rem] overflow-hidden group cursor-pointer">
                
                {/* Video Image / Thumbnail */}
                <img 
                  src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop" 
                  alt="Video content" 
                  className="w-full h-full object-cover"
                />

                {/* Overlay Text inside Video (Matching the 'So what' style) */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                   <h3 className="text-4xl md:text-6xl font-semibold text-white/90 drop-shadow-lg">
                     So <span className="text-white/70">what</span>
                   </h3>
                </div>

                {/* Custom Video Controls UI (Simulated as per image) */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/60 to-transparent text-white">
                  {/* Progress Bar */}
                  <div className="w-full h-1 bg-white/30 rounded-full mb-4 relative">
                    <div className="absolute top-0 left-0 h-full w-[20%] bg-white rounded-full"></div>
                  </div>
                  
                  {/* Control Icons */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Play fill="currentColor" size={20} />
                      <span className="text-sm font-medium">0:21 / 1:47</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <Volume2 size={20} />
                      <Maximize size={20} />
                      <MoreVertical size={20} />
                    </div>
                  </div>
                </div>

                {/* Big Center Play Button (Optional - appears on hover) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                     <Play fill="white" className="text-white ml-1" />
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Bottom Text */}
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white text-2xl md:text-4xl font-bold text-center tracking-wide drop-shadow-md"
            >
              Patented, Personalized AI Growth Service
            </motion.h2>

          </div>
        </motion.div>
      </div>
    </section>
    </main>
  );
}