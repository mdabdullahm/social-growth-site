"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    platform: "G2",
    rating: "4.8",
    count: "96+ reviews",
    color: "text-[#D7443E]",
    bgColor: "bg-[#FFF1F0]",
    icon: (
      <div className="text-white bg-[#D7443E] w-10 h-10 rounded-lg flex items-center justify-center font-black text-xl italic">
        G
      </div>
    )
  },
  {
    platform: "Trustpilot",
    rating: "4.7",
    count: "192+ reviews",
    color: "text-[#005128]",
    bgColor: "bg-[#F1F9F5]",
    icon: (
      <div className="w-10 h-10 flex items-center justify-center">
        <svg viewBox="0 0 24 24" fill="#00B67A" className="w-full h-full"><path d="M24 9.124l-9.155-.008L12 0 9.155 9.116 0 9.124l7.412 5.378L4.63 24 12 18.618 19.37 24l-2.782-9.498L24 9.124z"/></svg>
      </div>
    )
  },
  {
    platform: "Capterra",
    rating: "4.9",
    count: "634+ reviews",
    color: "text-[#D97706]",
    bgColor: "bg-[#FFFBEB]",
    icon: (
      <div className="w-10 h-10 bg-[#FFD700] rounded-full flex items-center justify-center text-white">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 2L1 21h22L12 2z"/></svg>
      </div>
    )
  },
  {
    platform: "SoftwareAdvice",
    rating: "4.7",
    count: "192+ reviews",
    color: "text-[#0369A1]",
    bgColor: "bg-[#F0F9FF]",
    icon: (
      <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
        SA
      </div>
    )
  },
  {
    platform: "AppSumo",
    rating: "4.7",
    count: "180+ reviews",
    color: "text-[#EA580C]",
    bgColor: "bg-[#FFF7ED]",
    icon: (
      <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white">
         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
      </div>
    )
  }
];

const ReviewBadges = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-center">
          {reviews.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center space-y-3"
            >
              {/* প্লাটফর্ম আইকন বক্স */}
              <div className={`${item.bgColor} w-20 h-20 md:w-24 md:h-24 rounded-[1.5rem] flex items-center justify-center shadow-sm border border-black/5`}>
                 {item.icon}
              </div>

              {/* স্টার রেটিং */}
              <div className="flex gap-0.5 text-[#FF9900]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>

              {/* রেটিং স্কোর */}
              <div className="flex flex-col">
                <p className="text-2xl font-black text-slate-900 leading-tight">
                  {item.rating}<span className="text-lg text-slate-400">/5</span>
                </p>
                <p className={`text-xs md:text-sm font-bold uppercase tracking-wider ${item.color}`}>
                  {item.count}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewBadges;