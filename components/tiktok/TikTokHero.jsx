"use client";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import partyAnimation from "@/public/titockheroanimation.json"; // পাথ ঠিক আছে কি না দেখে নিও
import { Star, Check } from "lucide-react";

const TikTokHero = () => {
  return (
    <section className="relative w-full py-16 md:py-24 flex flex-col items-center text-center overflow-hidden min-h-[80vh]">
      
      {/* ১. লট্টি ব্যাকগ্রাউন্ড (সরাসরি এই সেকশনের ভেতরে) */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-50">
        <Lottie 
          animationData={partyAnimation} 
          loop={true} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* ২. মেইন কন্টেন্ট (z-10 দিয়ে ওপরে রাখা হয়েছে) */}
      <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col items-center">
        
        {/* হেডলাইন */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-7xl text-slate-900 tracking-tight leading-[1.1]"
        >
          Organic <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ea] via-[#ff0050] to-[#000000]">TikTok</span> Growth: <br />
          More Views, More Followers, More Reach
        </motion.h1>

        {/* সাব-টেক্সট */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-8 text-lg md:text-xl text-slate-700 max-w-3xl font-medium leading-relaxed"
        >
          No bots, no fake followers, no passwords. Gain real targeted followers <br className="hidden md:block" />
          automatically with <span className="underline decoration-slate-300 underline-offset-4">our patented AI technology</span>
        </motion.p>

        {/* প্রাইস ব্যাজ */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-12 group cursor-pointer"
        >
          <div className="inline-flex items-center bg-[#ff0050] text-white rounded-full overflow-hidden shadow-xl shadow-pink-100 border-2 border-white/20">
             <div className="bg-[#b3003b] p-3 px-4 flex items-center justify-center">
                <Star size={18} fill="white" />
             </div>
             <span className="px-6 py-3 font-black text-xs md:text-sm tracking-[0.1em] uppercase">
                Starting at ৳122.00/day
             </span>
          </div>
        </motion.div>

        {/* মেইন বাটন */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-[#00f2ea] to-[#ff0050] rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
          <button className="relative px-16 py-4 bg-gradient-to-r from-[#212121] via-[#3d3d3d] to-[#ff0050] text-white text-2xl font-black rounded-2xl flex items-center gap-3 transition-all active:scale-95 shadow-2xl">
            Get Started 
            <span className="text-3xl font-light">›</span>
          </button>
        </motion.div>

        {/* ট্রাস্ট ইন্ডিকেটর */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 flex flex-wrap justify-center items-center gap-8 text-sm md:text-base font-bold text-slate-800"
        >
          <div className="flex items-center gap-2">
            <Check size={20} className="text-black" strokeWidth={4} />
            2-Minute Setup
          </div>
          <div className="flex items-center gap-2">
            <Check size={20} className="text-black" strokeWidth={4} />
            100% Growth Guaranteed
          </div>
          <div className="flex items-center gap-2">
            <Check size={20} className="text-black" strokeWidth={4} />
            Rated 4.91/5
            <div className="flex gap-0.5 ml-1">
               {[...Array(5)].map((_, i) => (
                 <div key={i} className="w-5 h-5 bg-[#FF0087] flex items-center justify-center rounded-sm">
                   <Star size={12} fill="white" className="text-white" />
                 </div>
               ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default TikTokHero;