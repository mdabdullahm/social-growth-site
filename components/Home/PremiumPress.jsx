"use client";
import { motion } from "framer-motion";
import { ArrowDown, Quote, Star, CheckCircle } from "lucide-react";

const PremiumPress = () => {
  return (
    <section className="relative overflow-hidden">
      
      {/* ১. মেইন গ্রেডিয়েন্ট সেকশন */}
      <div className="bg-[#0ABAB5] py-24 px-4 text-center text-black">
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="mb-12 flex justify-center"
        >
          <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 animate-bounce">
            <ArrowDown size={32} strokeWidth={3} />
          </div>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="text-4xl md:text-7xl font-black max-w-5xl mx-auto leading-[1.1] mb-20 tracking-tighter"
        >
          A game-changing advantage for your modern social presence
        </motion.h2>

        {/* ২. নিউজ আউটলেট কার্ডস (WSJ, TC স্টাইল) */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            { 
              brand: "TECH PULSE", 
              quote: "Their AI-driven approach is a masterclass in organic growth. It effectively bridges the gap between automation and human-centric engagement." 
            },
            { 
              brand: "GLOBAL JOURNAL", 
              quote: "In a crowded marketplace of bots, this platform stands out by prioritizing account safety and high-conversion targeting above all else." 
            },
            { 
              brand: "INSIGHT WEEKLY", 
              quote: "The most intuitive dashboard we've tested. It turns complex social data into actionable strategies that any creator can use immediately." 
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 p-10 rounded-[2.5rem] text-left hover:bg-white/15 transition-all"
            >
              <h4 className="text-2xl font-black mb-6 tracking-tighter">{item.brand}</h4>
              <p className="text-lg font-medium leading-relaxed opacity-90 italic">
                "{item.quote}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* ৩. ছোট লোগো বার */}
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-60">
           <span className="text-xl font-black">SUN DIGITAL</span>
           <span className="text-xl font-bold italic">WiredPulse</span>
           <span className="text-xl font-black">AUTHORITY</span>
           <span className="text-xl font-bold">ESQUIRE CREATIVE</span>
           <button className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-xs font-bold hover:bg-white/20 transition-all">
             JOIN THE WAITLIST <ArrowDown size={14} className="-rotate-90" />
           </button>
        </div>
      </div>

      {/* ৪. ট্রাস্টেড বাই মার্কেটার্স সেকশন (সাদা ব্যাকগ্রাউন্ডে ট্রানজিশন) */}
      <div className="bg-white py-24 px-4 text-center">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="space-y-6"
        >
          <div className="flex justify-center mb-8">
             <div className="p-4 bg-slate-900 text-white rounded-3xl shadow-2xl">
                <CheckCircle size={40} />
             </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">
            Endorsed by industry leaders. <br />
            Loved by 55k+ creators.
          </h2>
        </motion.div>

        {/* ৫. বড় এক্সপার্ট কোট (Gary V স্টাইল কিন্তু কপিরাইট ফ্রি) */}
        <div className="max-w-7xl mx-auto mt-24 flex flex-col lg:flex-row items-center gap-16 text-left">
           <div className="flex-1 order-2 lg:order-1 space-y-8">
              <Quote size={60} className="text-blue-500 opacity-20" />
              <p className="text-2xl md:text-4xl font-bold text-slate-800 leading-tight">
                "Stop buying followers and start building a real audience. This tool is the future of how sustainable social influence is actually created."
              </p>
              <div>
                 <p className="text-xl font-black text-slate-900 uppercase">Marcus Sterling</p>
                 <p className="text-slate-500 font-bold">CEO, Sterling Media Group</p>
              </div>
           </div>
           
           <motion.div 
             initial={{ x: 50, opacity: 0 }}
             whileInView={{ x: 0, opacity: 1 }}
             className="flex-1 order-1 lg:order-2 relative"
           >
              <div className="absolute -inset-4 bg-blue-100 rounded-[3rem] -rotate-3 -z-10"></div>
              <div className="bg-slate-200 rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5] relative">
                 <img 
                   src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80" 
                   alt="Expert" 
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/50">
                    <div className="flex text-yellow-500 mb-2">
                       {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                    </div>
                    <p className="text-sm font-black text-slate-900">VERIFIED GROWTH EXPERT</p>
                 </div>
              </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PremiumPress;