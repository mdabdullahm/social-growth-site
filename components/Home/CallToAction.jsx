"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const CallToAction = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, -5]);

  return (
    <section 
      ref={containerRef} 
      // perspective বাড়িয়ে ২০০০px করা হয়েছে যাতে 3D ইফেক্ট স্মুথ হয়
      className="py-24 bg-slate-50 overflow-hidden relative perspective-2000"
    >
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
         <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-purple-200/40 rounded-full blur-[120px]" />
         <div className="absolute top-[40%] -right-[10%] w-[40%] h-[60%] bg-blue-200/40 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="inline-block px-4 py-1.5 rounded-full bg-blue-100/80 text-blue-700 text-xs font-bold tracking-widest uppercase mb-4 backdrop-blur-sm border border-blue-200 shadow-sm">
              Ready to Scale?
            </p>
            <h2 className="text-4xl md:text-6xl text-slate-900 tracking-tight leading-tight">
              Experience the Future of <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                Instagram Growth
              </span>
            </h2>
          </motion.div>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch perspective-2000">
          
          {/* Card 1: Demo is King */}
          <motion.div 
            // Initial: অনেক বেশি কাত করা (শুয়ে থাকা ভাব)
            initial={{ opacity: 0, rotateX: 30, y: 50, scale: 0.9 }}
            // InView: হালকা কাত হয়ে থাকবে (rotateX: 12) এবং একটু বাঁকানো (rotateY: 5)
            whileInView={{ opacity: 1, rotateX: 12, rotateY: 5, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 40, damping: 20 }}
            // Hover: সোজা হয়ে ভেসে উঠবে
            whileHover={{ scale: 1.05, rotateX: 0, rotateY: 0, z: 50, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            className="group relative bg-white rounded-[2rem] p-8 md:p-10 shadow-2xl shadow-slate-200/60 border border-white/60 backdrop-blur-xl overflow-hidden transform-style-3d cursor-pointer"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 opacity-60" />
            
            <div className="relative z-10 flex flex-col items-center text-center h-full justify-between gap-6 transform-style-3d">
              <motion.div 
                style={{ y }}
                className="w-52 md:w-64 filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.2)] transform-style-3d"
              >
                 {/* ইমেজটিও হোভার করলে আরও ভেসে উঠবে (translateZ) */}
                 <img 
                   src="https://i.ibb.co.com/PGmKbBtC/vecteezy-3d-illustration-enhancing-work-life-with-your-computer-or-45358718.png" 
                   alt="3D Illustration" 
                   className="w-full h-auto object-contain transform transition-transform duration-500 group-hover:translate-z-20 group-hover:scale-110"
                   style={{ transform: "translateZ(40px)" }} // ইমেজ ডিফল্টভাবেই একটু ভেসে থাকবে
                 />
              </motion.div>
              
              <div className="space-y-4 transform-style-3d" style={{ transform: "translateZ(20px)" }}>
                <h3 className="text-3xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">Demo is King</h3>
                <p className="text-slate-600 text-base font-medium leading-relaxed max-w-md mx-auto">
                  Get hands-on experience. Explore our live demo dashboard.
                </p>
                
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative overflow-hidden bg-slate-900 text-white px-8 py-3 rounded-xl font-bold text-base shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300 mt-2"
                >
                  <span className="relative z-10">See Live Demo</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Create Account */}
          <motion.div 
             // Initial: অনেক বেশি কাত করা
            initial={{ opacity: 0, rotateX: 30, y: 50, scale: 0.9 }}
            // InView: হালকা কাত হয়ে থাকবে (rotateX: 12) এবং উল্টো দিকে একটু বাঁকানো (rotateY: -5)
            whileInView={{ opacity: 1, rotateX: 12, rotateY: -5, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 40, damping: 20, delay: 0.1 }}
             // Hover: সোজা হয়ে ভেসে উঠবে
            whileHover={{ scale: 1.05, rotateX: 0, rotateY: 0, z: 50, boxShadow: "0 25px 50px -12px rgba(124, 58, 237, 0.25)" }}
            className="group relative rounded-[2rem] p-8 md:p-10 overflow-hidden transform-style-3d shadow-2xl shadow-purple-500/20 flex flex-col justify-center cursor-pointer"
          >
            {/* Backgrounds */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 bg-[length:200%_200%] animate-gradient-xy" />
            <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />
            
            <motion.div style={{ rotate }} className="absolute -top-20 -right-20 w-64 h-64 bg-white/20 rounded-full blur-3xl transform-style-3d translate-z-10" />
            <motion.div style={{ rotate: useTransform(scrollYProgress, [0, 1], [-5, 5]) }} className="absolute bottom-10 -left-10 w-40 h-40 bg-pink-500/30 rounded-full blur-2xl transform-style-3d translate-z-10" />

            <div className="relative z-10 flex flex-col items-center justify-center text-center h-full space-y-8 transform-style-3d">
              <div className="space-y-4 transform-style-3d" style={{ transform: "translateZ(30px)" }}>
                <h3 className="text-3xl md:text-5xl font-black text-white drop-shadow-lg">
                  Start Growing Today
                </h3>
                <p className="text-blue-50 text-lg font-medium max-w-sm mx-auto leading-relaxed">
                  Join thousands of creators scaling their Instagram presence.
                </p>
              </div>
              
              <motion.div style={{ transform: "translateZ(50px)" }}>
                <button 
                  className="bg-white text-slate-900 px-10 py-4 rounded-xl font-black text-lg shadow-xl hover:bg-slate-50 transition-all duration-300 hover:shadow-2xl active:scale-95"
                >
                  Create Free Account
                </button>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Floating 3D Chat Button */}
      <motion.div 
        className="fixed bottom-8 right-8 z-50"
        initial={{ scale: 0, rotate: 180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
      > 
      </motion.div>

      <style jsx>{`
        @keyframes gradient-xy {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-xy {
          animation: gradient-xy 6s ease infinite;
        }
        .perspective-2000 {
          perspective: 2000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        /* Utility class for z-translation in Tailwind if needed, though inline style used here */
        .translate-z-20 {
          transform: translateZ(20px);
        }
      `}</style>
    </section>
  );
};

export default CallToAction;