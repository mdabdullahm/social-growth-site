"use client";
import { motion } from "framer-motion";
import { ArrowDown, Quote, Star, CheckCircle } from "lucide-react";

const PremiumPress = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24">
      
      {/* ব্যাকগ্রাউন্ড ডেকোরেশন (গ্লো) */}
      <div className="absolute top-0 inset-x-0 h-[800px] overflow-hidden -z-10 pointer-events-none">
         <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-[#0ABAB5] rounded-full blur-[120px] opacity-20"></div>
         <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-purple-300 rounded-full blur-[100px] opacity-20"></div>
      </div>

      {/* ১. মেইন ৩ডি গ্লাস সেকশন (কাত করা/শোয়ানো ইফেক্ট) */}
      {/* perspective-[2000px] গভীরতা তৈরি করে */}
      <div className="max-w-7xl mx-auto px-4 perspective-[2000px]">
        
        <motion.div
          initial={{ rotateX: 25, opacity: 0, y: 50 }} // শুরুতে বেশি কাত হয়ে থাকবে
          whileInView={{ rotateX: 10, opacity: 1, y: 0 }} // ভিউতে আসলে ১০ ডিগ্রি কাত হয়ে থাকবে (শোয়ানো ভাব)
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ transformStyle: "preserve-3d" }} // ৩ডি ভাব বজায় রাখার জন্য
          
          // গ্লাস কার্ড ডিজাইন
          className="bg-[#0ABAB5]/20 backdrop-blur-2xl border border-white/40 rounded-[3rem] p-12 md:p-20 text-center text-black relative shadow-2xl shadow-[#0ABAB5]/10"
        >
            
            {/* চকচকে ভাব আনার জন্য শাইন ইফেক্ট */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent rounded-[3rem] pointer-events-none"></div>

            {/* ভেতরের কন্টেন্ট */}
            <div className="relative z-10">
                <motion.div 
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                className="mb-10 flex justify-center"
                >
                <div className="w-16 h-16 bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 animate-bounce shadow-lg text-[#008f8a]">
                    <ArrowDown size={32} strokeWidth={3} />
                </div>
                </motion.div>

                <motion.h2 
                className="text-4xl md:text-7xl font-black max-w-4xl mx-auto leading-[1.1] mb-16 tracking-tighter text-slate-900 drop-shadow-sm"
                >
                A game-changing advantage for your modern social presence
                </motion.h2>

                {/* নিউজ কার্ডস - এগুলোকেও ৩ডি এফেক্ট দেওয়া হয়েছে */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                {[
                    { 
                    brand: "TECH PULSE", 
                    quote: "Their AI-driven approach is a masterclass in organic growth." 
                    },
                    { 
                    brand: "GLOBAL JOURNAL", 
                    quote: "This platform stands out by prioritizing account safety above all else." 
                    },
                    { 
                    brand: "INSIGHT WEEKLY", 
                    quote: "It turns complex social data into actionable strategies instantly." 
                    }
                ].map((item, i) => (
                    <motion.div 
                    key={i}
                    whileHover={{ y: -10, rotateX: -5 }} // হোভার করলে সোজা হবে
                    className="bg-white/50 backdrop-blur-md border border-white/60 p-8 rounded-3xl text-left shadow-lg"
                    >
                    <h4 className="text-xl font-black mb-4 tracking-tighter text-slate-800">{item.brand}</h4>
                    <p className="text-base font-medium leading-relaxed opacity-80 italic text-slate-700">
                        "{item.quote}"
                    </p>
                    </motion.div>
                ))}
                </div>

                {/* লোগো বার */}
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 opacity-50 grayscale hover:grayscale-0 transition-all duration-500 mix-blend-multiply">
                    <span className="text-lg font-black">SUN DIGITAL</span>
                    <span className="text-lg font-bold italic">WiredPulse</span>
                    <span className="text-lg font-black">AUTHORITY</span>
                    <button className="flex items-center gap-2 bg-black/10 px-4 py-2 rounded-full text-xs font-bold hover:bg-black/20 transition-all not-italic text-black/80">
                        JOIN THE WAITLIST <ArrowDown size={14} className="-rotate-90" />
                    </button>
                </div>
            </div>
        </motion.div>

        {/* শ্যাডো ফ্লোর (কার্ডের নিচে ছায়া যাতে মনে হয় ভাসছে) */}
        <div className="h-20 w-[90%] mx-auto bg-black/20 blur-3xl -mt-10 rounded-[100%]"></div>
      </div>

      {/* ২. ট্রাস্টেড বাই মার্কেটার্স (বাকি অংশ) */}
      <div className="mt-32 max-w-7xl mx-auto px-4 text-center">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="space-y-6"
        >
          <div className="flex justify-center mb-8">
             <div className="p-4 bg-slate-900 text-[#0ABAB5] rounded-3xl shadow-2xl">
                <CheckCircle size={40} />
             </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">
            Endorsed by industry leaders. <br />
            Loved by 55k+ creators.
          </h2>
        </motion.div>

        {/* এক্সপার্ট কোট */}
        <div className="mt-24 flex flex-col lg:flex-row items-center gap-16 text-left">
           <div className="flex-1 order-2 lg:order-1 space-y-8">
             <Quote size={60} className="text-[#0ABAB5] opacity-30" />
             <p className="text-2xl md:text-4xl font-bold text-slate-800 leading-tight">
               "Stop buying followers and start building a real audience. This tool is the future."
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
             <div className="absolute -inset-4 bg-[#0ABAB5]/30 rounded-[3rem] -rotate-3 -z-10"></div>
             <div className="bg-slate-200 rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5] relative">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80" 
                  alt="Expert" 
                  className="w-full h-full object-cover"
                />
             </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PremiumPress;