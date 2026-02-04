"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ContentGuide = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden border-t border-gray-100">
      
      {/* ১. সেই ওয়েভি ব্যাকগ্রাউন্ড (এখন আরও পরিষ্কার এবং ঘন) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10 Q 25 0 50 10 T 100 10' fill='none' stroke='%23cbd5e1' stroke-width='0.5'/%3E%3C/svg%3E")`,
             backgroundSize: '150px 30px'
           }}>
      </div>

      {/* ২. অতিরিক্ত লেয়ার (একটু গভীরতা দেওয়ার জন্য) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 15 Q 25 5 50 15 T 100 15' fill='none' stroke='%2394a3b8' stroke-width='0.5'/%3E%3C/svg%3E")`,
             backgroundSize: '200px 40px',
             backgroundPosition: '20px 10px'
           }}>
      </div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        
        {/* ৩. আপডেট ব্যাজ */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="inline-block mb-8"
        >
          <span className="bg-white text-blue-600 px-5 py-2 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest border border-blue-100 shadow-sm">
            Updated - Feb 04, 2026
          </span>
        </motion.div>

        {/* ৪. মেইন হেডলাইন */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-7xl font-black text-slate-900 leading-tight mb-12 tracking-tighter"
        >
          The Most Advanced Social Growth <br className="hidden md:block" /> Solution in 2026
        </motion.h1>

        {/* ৫. কন্টেন্ট বডি */}
        <div className="space-y-8 text-left md:text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-800">
            The Only Growth Strategy You'll Ever Need
          </h2>
          
          <div className="space-y-6 text-slate-600 text-lg md:text-xl font-medium leading-relaxed">
            <p>
              Our platform meets all your digital branding needs and provides everything you'd expect from a premium growth service. Using <span className="text-slate-900 font-bold">advanced AI algorithms</span> and automated strategies.
            </p>
            
            <p>
              Unlike a typical <span className="text-blue-600 font-bold border-b-2 border-blue-100">Social Media Bot</span>, you don't have to worry about manual interactions or risking your account. We've combined industry-leading tech with human expertise.
            </p>

            <h3 className="text-xl md:text-2xl font-bold text-slate-800 pt-6">
              Intuitive and Built for Success
            </h3>

            <p>
              We provide a seamless interface with a <span className="text-slate-900 font-bold italic">zero learning curve</span>. Whether you are an influencer, a rising brand, or a local business, you can start in <span className="text-blue-600 font-bold">under 5 minutes.</span>
            </p>
          </div>
        </div>

        {/* ৬. কল-টু-অ্যাকশন বাটন */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-20"
        >
          <button className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-black text-lg shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:bg-blue-600 hover:-translate-y-1 transition-all flex items-center gap-3 mx-auto active:scale-95 group">
            View Entire Strategy Guide
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default ContentGuide;