"use client";
import { motion } from "framer-motion";
import { Check, Instagram, ArrowRight, TrendingUp } from "lucide-react";

const GrowthPreview = () => {
  // এনিমেশন ভেরিয়েন্ট (Staggered Effect এর জন্য)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // একটার পর একটা আসবে
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  return (
    <section className="relative overflow-hidden">
      
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-200/30 rounded-full blur-[120px] pointer-events-none" />

      <motion.div 
        className="max-w-7xl mx-auto px-4 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        
        {/* 1. Badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-100 shadow-sm">
            <TrendingUp size={14} className="text-blue-600" />
            <span className="text-[11px] font-bold tracking-widest uppercase text-blue-600">
              Growth Preview
            </span>
          </div>
        </motion.div>

        {/* 2. Headline */}
        <motion.h2 
          variants={itemVariants}
          className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-10 max-w-4xl mx-auto tracking-tight"
        >
          Stop using bots. <br />
          Start getting <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">Real Results.</span>
        </motion.h2>

        {/* 3. The Premium Capsule Input Field */}
        <motion.div 
          variants={itemVariants}
          className="max-w-2xl mx-auto relative mb-8"
        >
          <div className="relative p-2 rounded-full bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] ring-1 ring-slate-100 flex items-center group transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-500 focus-within:shadow-xl">
            
            {/* Icon inside input */}
            <div className="pl-6 text-slate-400 group-focus-within:text-pink-500 transition-colors">
              <Instagram size={24} />
            </div>

            <input 
              type="text" 
              placeholder="Enter Instagram Username..." 
              className="flex-1 px-4 py-4 md:py-5 bg-transparent outline-none text-lg font-medium text-slate-700 placeholder:text-slate-400"
            />
            
            <button className="bg-slate-900 hover:bg-blue-600 text-white px-8 md:px-10 py-4 rounded-full font-bold text-sm tracking-wide transition-all duration-300 active:scale-95 shadow-lg shadow-slate-900/20 flex items-center gap-2">
              PREVIEW
              <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>

        {/* 4. Live Counter */}
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-2 mb-16">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <p className="text-slate-500 font-medium text-sm md:text-base">
            Used by <span className="font-bold text-slate-900">28,891</span> creators today
          </p>
        </motion.div>

        {/* 5. Trust Features (Grid) */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto border-t border-slate-200 pt-10"
        >
          {[
            { text: "Over 55,000+ happy clients", color: "bg-blue-100 text-blue-600" },
            { text: "100% Safe & Compliant", color: "bg-green-100 text-green-600" },
            { text: "AI Targeted Real Growth", color: "bg-purple-100 text-purple-600" }
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-center md:justify-start gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300 cursor-default border border-transparent hover:border-slate-100">
              <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${item.color}`}>
                <Check size={16} strokeWidth={3} />
              </div>
              <p className="text-slate-700 font-bold text-sm md:text-base text-left">
                {item.text}
              </p>
            </div>
          ))}
        </motion.div>

      </motion.div>
    </section>
  );
};

export default GrowthPreview;