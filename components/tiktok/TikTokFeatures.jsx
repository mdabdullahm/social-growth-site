"use client";
import { motion } from "framer-motion";
import { Brain, UserCheck, BarChart3, Check, ArrowRight } from "lucide-react";

const features = [
  {
    title: "Smart AI Core",
    icon: <Brain size={20} className="text-purple-500" />,
    desc: "Our sophisticated AI allows you to define your ideal audience based on demographics, interests, and niche behavior.",
    points: ["Precise audience targeting", "24/7 autonomous growth", "AI-optimized engagement"],
    borderColor: "border-t-purple-400",
    bgColor: "bg-purple-50/30"
  },
  {
    title: "Authentic Fans",
    icon: <UserCheck size={20} className="text-cyan-500" />,
    desc: "Get genuine interaction by avoiding bots and fake accounts. We prioritize safety and follow TikTok's organic guidelines.",
    points: ["Real human interactions", "Secure growth strategy", "No password required"],
    borderColor: "border-t-cyan-400",
    bgColor: "bg-cyan-50/30"
  },
  {
    title: "Advanced Metrics",
    icon: <BarChart3 size={20} className="text-pink-500" />,
    desc: "Access deep analytics including engagement rates and growth trends to better understand your performance.",
    points: ["Real-time data tracking", "Strategy refinement tools", "Content impact reports"],
    borderColor: "border-t-pink-400",
    bgColor: "bg-pink-50/30"
  }
];

const TikTokFeatures = () => {
  return (
    <section className="py-15 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header Section */}
        <div className="text-center mb-20 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter"
          >
            Elite TikTok Growth Solutions
          </motion.h2>
          <p className="text-slate-500 text-lg md:text-xl max-w-3xl mx-auto font-medium">
            Accelerate your social presence with tools designed for maximum impact and engagement.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-8 md:p-10 rounded-[2.5rem] border-t-8 ${item.borderColor} bg-white shadow-xl shadow-slate-100 flex flex-col h-full hover:shadow-2xl transition-all duration-500 group`}
            >
              {/* Title & Icon Area */}
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  {item.title}
                </h3>
                <div className={`p-3 rounded-xl ${item.bgColor}`}>
                  {item.icon}
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-8 flex-grow">
                {item.desc}
              </p>

              {/* Bullet Points */}
              <ul className="space-y-4 mb-10">
                {item.points.map((point, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                    <div className="w-5 h-5 rounded-full bg-cyan-50 flex items-center justify-center shrink-0">
                      <Check size={14} className="text-cyan-500" strokeWidth={4} />
                    </div>
                    {point}
                  </li>
                ))}
              </ul>

              {/* Get Started Button */}
              <button className="w-full py-4 rounded-2xl bg-slate-900 text-white font-black text-sm flex items-center justify-center gap-2 group-hover:bg-blue-600 transition-colors shadow-lg active:scale-95">
                Get Started 
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TikTokFeatures;