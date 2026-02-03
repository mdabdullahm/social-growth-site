"use client";
import { motion } from "framer-motion";

// কপিরাইট এড়াতে ভিন্ন ডেটা
const metrics = [
  {
    value: "42,000+",
    label: "Active Success Stories",
    color: "text-blue-600"
  },
  {
    value: "~5,200",
    label: "Avg. Monthly Organic Reach",
    color: "text-pink-600"
  },
  {
    value: "12M+",
    label: "Productive Hours Saved",
    color: "text-purple-600"
  },
  {
    value: "4.9/5",
    label: "Overall User Satisfaction",
    color: "text-indigo-600"
  },
];

const ImpactStats = () => {
  return (
    <section className="py-28 bg-white overflow-hidden border-t border-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* ১. হেডলাইন (সম্পূর্ণ আলাদা শব্দচয়ন) */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-slate-900 leading-tight"
          >
            Empowering Growth for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500">
              The Next Generation of Creators
            </span>
          </motion.h2>
          <p className="mt-6 text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Our intelligent algorithms focus on building real connections, ensuring your influence grows naturally and sustainably.
          </p>
        </div>

        {/* ২. কার্ড ডিজাইন (সাদা ব্যাকগ্রাউন্ডের জন্য হালকা গ্রে ও শ্যাডো) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {metrics.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 border border-gray-100 p-10 rounded-[2.5rem] flex flex-col items-center text-center hover:shadow-xl hover:bg-white transition-all duration-300"
            >
              <div className={`text-4xl md:text-5xl font-black mb-4 ${item.color}`}>
                {item.value}
              </div>
              <p className="text-slate-700 font-bold text-sm uppercase tracking-widest leading-relaxed">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ৩. ব্র্যান্ড লোগো সেকশন (ভিন্ন নাম ও ক্লিন লুক) */}
        <div className="border-t border-gray-100 pt-16 text-center">
          <p className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.5em] mb-12">
            INTEGRATED WITH INDUSTRY LEADERS
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:opacity-100 transition-opacity duration-500">
            {/* কাল্পনিক প্রফেশনাল নাম যা কপিরাইট ফ্রি */}
            <span className="text-3xl font-black text-slate-900 tracking-tighter">CLOUDWIRE</span>
            <span className="text-3xl font-bold text-slate-900 italic">streamline</span>
            <span className="text-3xl font-black text-slate-900">VORTEX</span>
            <span className="text-3xl font-bold text-slate-900">NEXUS</span>
            <span className="text-3xl font-black text-slate-900 tracking-widest">ECHO</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ImpactStats;