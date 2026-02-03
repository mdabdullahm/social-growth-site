"use client";
import { motion } from "framer-motion";

const SecretSauce = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 text-center">
        
        {/* ১. টপ ব্যাজ (কালারফুল টেক্সট) */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <h4 className="text-sm md:text-base font-black tracking-[0.2em] uppercase">
            <span className="text-blue-500">The </span>
            <span className="text-purple-500">Core </span>
            <span className="text-pink-500">Methodology?</span>
          </h4>
        </motion.div>

        {/* ২. মেইন হেডলাইন (বোল্ড লুক) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="space-y-4 mb-12"
        >
          <h2 className="text-4xl md:text-7xl  text-slate-900 leading-[1.1] tracking-tight">
            Proprietary AI Scaling Engine
          </h2>
          <h3 className="text-3xl md:text-6xl  text-slate-900">
            Zero Spam. Pure Quality. Ethical Growth.
          </h3>
        </motion.div>

        {/* ৩. প্যারাগ্রাফ (কপিরাইট ফ্রি কন্টেন্ট) */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto space-y-6 text-slate-600 text-lg md:text-xl font-medium leading-relaxed"
        >
          <p>
            We have engineered our growth system using advanced <span className="text-slate-900 font-bold underline decoration-blue-200">Deep Learning and Neural Networks.</span>
          </p>
          <p>
            Our unique approach combines <span className="text-slate-900 font-bold italic">targeted digital signals, micro-interactions, and behavioral data clusters</span> to mimic real human activity perfectly.
          </p>
          <p>
            Unlike traditional services, we prioritize the health of your account, attracting high-value users without ever putting your profile at risk of restrictions or flagging.
          </p>
        </motion.div>

        {/* ৪. সেই গ্লোয়িং বাটন */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-16 flex justify-center"
        >
          <div className="relative group">
            {/* Background Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000"></div>
            <button className="relative px-12 py-5 bg-[#EEF20F] text-black font-black rounded-full text-xl flex items-center gap-3 transition-all active:scale-95 shadow-2xl">
              Get Started 
              <span className="text-2xl">›</span>
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default SecretSauce;