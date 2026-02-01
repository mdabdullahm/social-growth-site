"use client";
import { motion } from "framer-motion";
import { Zap, Target, BarChart3, Brain, Check, ArrowRight } from "lucide-react";

const features = [
  {
    title: "Organic Expansion",
    // পরিবর্তন ১: আইকন থেকে সরাসরি কালার ক্লাস সরানো হয়েছে
    icon: <Zap size={28} />,
    // পরিবর্তন ২: বেস টেক্সট কালার এখানে যোগ করা হয়েছে (text-blue-600)
    iconBg: "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
    desc: "Our automated system ensures your profile reaches real people effortlessly, accelerating your growth safely.",
    points: ["Natural Reach Boost", "Authentic Interactions", "Verified Organic Results"],
    btnText: "Start Growing",
    highlight: false
  },
  {
    title: "Smart Targeting",
    icon: <Target size={28} />,
    iconBg: "bg-rose-50 text-rose-500 group-hover:bg-rose-500 group-hover:text-white",
    desc: "We analyze thousands of niches to connect you with an audience that actually cares about your content.",
    points: ["Niche-Specific AI", "Behavioral Analysis", "Enhanced Engagement"],
    btnText: "Get Started",
    highlight: false
  },
  {
    title: "Insightful Metrics",
    icon: <BarChart3 size={28} />,
    iconBg: "bg-violet-50 text-violet-500 group-hover:bg-violet-500 group-hover:text-white",
    desc: "Monitor your progress with deep-dive analytics and real-time performance tracking in one place.",
    points: ["Growth Trajectory", "Audience Demographics", "Strategy Optimization"],
    btnText: "View Dashboard",
    highlight: false
  },
  {
    title: "AI-Pulse Match",
    icon: <Brain size={28} />,
    iconBg: "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white",
    desc: "Our advanced AI identifies high-value accounts and engages with them to build a loyal community for you.",
    points: ["High-Conversion Matching", "Smart Profile Filter", "Automated Outreach"],
    btnText: "Try AI-Pulse",
    highlight: true
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-200/20 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-xs font-bold tracking-wider mb-4 border border-blue-200 uppercase">
              Features
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
              Elite Social Media <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
                Scaling Platform
              </span>
            </h2>
            <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed">
              We help you build a massive, engaged following using next-gen technology and expert-vetted strategies.
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              // পরিবর্তন ৩: শ্যাডো অনেক শক্তিশালী করা হয়েছে (Stronger Shadows)
              className={`
                group relative p-8 rounded-[2rem] flex flex-col h-full transition-all duration-300
                bg-white border 
                ${item.highlight 
                  ? 'border-blue-200 shadow-[0_25px_60px_-12px_rgba(59,130,246,0.35)] ring-1 ring-blue-100 hover:shadow-[0_35px_70px_-15px_rgba(59,130,246,0.45)]' 
                  : 'border-slate-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] hover:border-slate-200'
                }
              `}
            >
              {/* Special Tag */}
              {item.highlight && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-violet-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl rounded-tr-[1.8rem]">
                  POPULAR
                </div>
              )}

              {/* Icon Container */}
              <div className={`w-14 h-14 ${item.iconBg} rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ease-in-out shadow-sm group-hover:shadow-md`}>
                {item.icon}
              </div>

              {/* Title & Desc */}
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                {item.desc}
              </p>

              {/* Points List */}
              <ul className="space-y-3 mb-8">
                {item.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm font-semibold text-slate-700">
                    <div className={`mt-0.5 min-w-[18px] h-[18px] rounded-full flex items-center justify-center ${item.highlight ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-500'} group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300`}>
                      <Check size={10} strokeWidth={4} />
                    </div>
                    <span className="opacity-90">{point}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button className={`
                w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300
                ${item.highlight 
                  ? 'bg-slate-900 text-white hover:bg-blue-600 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50' 
                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200 hover:border-slate-300 hover:shadow-md'
                }
              `}>
                {item.btnText}
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;