"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// আইকন বা অ্যাসেটস
const HeartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-pink-500">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
);

// Wavy Topographic Pattern SVG Component
const WavyPattern = () => (
  <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
    <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="topography" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
           <path d="M0 0 Q 25 20 50 10 T 100 0 V 100 H 0 Z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
           <path d="M0 20 Q 25 40 50 30 T 100 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
           <path d="M0 40 Q 25 60 50 50 T 100 40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
           <path d="M0 60 Q 25 80 50 70 T 100 60" fill="none" stroke="currentColor" strokeWidth="0.5"/>
           <path d="M0 80 Q 25 100 50 90 T 100 80" fill="none" stroke="currentColor" strokeWidth="0.5"/>
        </pattern>
        {/* Complex topographic paths (Simulated with simple waves for performance, replaced with actual SVG data for production) */}
      </defs>
      {/* Using a background image for better performance usually, but inline SVG path for demo */}
      <path d="M0,0 Q50,100 100,0 T200,0 T300,0 T400,0 V1000 H0 Z" fill="none" stroke="currentColor" strokeWidth="1" className="text-slate-900"/>
      {/* Repeating pattern fill */}
      <rect width="100%" height="100%" fill="url(#pattern-circles)" /> 
    </svg>
    
    {/* Real Topographic Background Image (Recommended for best look) */}
    <div 
      className="absolute inset-0 bg-repeat bg-center"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%230f172a' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        backgroundSize: "60px 60px"
      }}
    />
    {/* A more topographic-like SVG overlay */}
    <div 
      className="absolute inset-0 opacity-10 bg-center bg-no-repeat bg-cover"
      style={{
          backgroundImage: `url("https://grainy-gradients.vercel.app/noise.svg")`, // Adding noise for texture
          filter: "contrast(120%) brightness(100%)"
      }}
    ></div>
  </div>
);

const TikTokCreators = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // প্যারাল্যাক্স এবং রোটেশন ভ্যালু
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [200, -50]);
  
  return (
    <section ref={containerRef} className="py-24 bg-slate-50 overflow-hidden relative min-h-[900px] perspective-2000">
      
      {/* ১. Wavy Topographic Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* We use a large SVG path for the wave effect */}
        <svg
          className="absolute w-[200%] h-[200%] -top-[50%] -left-[50%] opacity-[0.03] text-slate-900 animate-[spin_60s_linear_infinite]"
          viewBox="0 0 1000 1000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,500 C150,400 350,300 500,500 C650,700 850,600 1000,500 V1000 H0 Z" fill="currentColor" />
          <path d="M0,600 C200,500 400,400 600,600 C800,800 900,700 1000,600 V1000 H0 Z" fill="currentColor" />
          <path d="M0,700 C250,600 450,500 700,700 C950,900 950,800 1000,700 V1000 H0 Z" fill="currentColor" />
        </svg>
        
        {/* Actual Topographic Lines Image (Hosted SVG or Data URI for better visual) */}
        <div 
            className="absolute inset-0 opacity-[0.4]"
            style={{
                backgroundImage: `url("https://www.transparenttextures.com/patterns/cubes.png")`, // You can replace this with a topographic map SVG URL
                backgroundSize: "200px"
            }}
        ></div>
         {/* Custom Topographic SVG for clearer lines */}
         <div className="absolute inset-0 opacity-[0.04]" 
             style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%231e293b' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
             }}
         ></div>
      </div>

      {/* Colorful Blurs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-300/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 h-full relative z-10">
        
        {/* সেকশন হেডার */}
        <div className="text-center mb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl text-slate-900 tracking-tight"
          >
            Loved by <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Creators</span>
          </motion.h2>
        </div>

        <div className="relative w-full h-[800px] flex justify-center items-center perspective-container">
          
          {/* ১. বাম পাশের কার্ড (Nico) */}
          <motion.div 
            style={{ y: y1, rotateZ: -10, rotateX: 10, rotateY: 15 }}
            className="absolute left-[5%] md:left-[10%] top-[5%] w-[280px] md:w-[320px] z-10"
            whileHover={{ scale: 1.05, rotateZ: 0, rotateX: 0, rotateY: 0, zIndex: 50 }}
          >
            <div className="relative group perspective-1000">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-[2.5rem] blur opacity-30 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative bg-white p-2 rounded-[2.5rem] shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&q=80" 
                  className="rounded-[2rem] w-full h-[400px] object-cover"
                  alt="Nico"
                />
                
                {/* ভাসমান রিভিউ কার্ড */}
                <div className="absolute -right-16 top-10 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white/50 w-[240px] transform translate-z-20 transition-transform group-hover:scale-105">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-1.5 bg-pink-100 rounded-full"><HeartIcon /></div>
                    <span className="text-xs font-bold text-pink-600 uppercase tracking-wider">Success Story</span>
                  </div>
                  <p className="text-slate-700 text-sm font-medium leading-relaxed mb-3">
                    "Stuck at 3k for months. Now I'm at 15k with consistent reach!"
                  </p>
                  <div className="flex items-center gap-3 border-t border-slate-100 pt-3">
                    <img src="https://i.pravatar.cc/150?u=nico" className="w-8 h-8 rounded-full border-2 border-white shadow-sm" alt="Avatar" />
                    <div>
                      <p className="font-bold text-xs text-slate-900">Nico</p>
                      <p className="text-[10px] text-slate-400">@nicolefelich</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ২. ডান পাশের কার্ড (Indie) */}
          <motion.div 
            style={{ y: y2, rotateZ: 10, rotateX: 10, rotateY: -15 }}
            className="absolute right-[5%] md:right-[10%] top-[15%] w-[280px] md:w-[320px] z-20"
            whileHover={{ scale: 1.05, rotateZ: 0, rotateX: 0, rotateY: 0, zIndex: 50 }}
          >
            <div className="relative group perspective-1000">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-rose-500 rounded-[2.5rem] blur opacity-30 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative bg-white p-2 rounded-[2.5rem] shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80" 
                  className="rounded-[2rem] w-full h-[400px] object-cover"
                  alt="Indie"
                />

                {/* ভাসমান রিভিউ কার্ড */}
                <div className="absolute -left-16 bottom-20 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-white/50 w-[240px] transform translate-z-20 transition-transform group-hover:scale-105">
                  <div className="flex items-center gap-2 mb-3">
                     <span className="text-2xl">🚀</span>
                     <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">Viral Growth</span>
                  </div>
                  <p className="text-slate-700 text-sm font-medium leading-relaxed mb-3">
                    "We broke the algorithm! 50k+ views in just one month."
                  </p>
                  <div className="flex items-center gap-3 border-t border-slate-100 pt-3">
                    <img src="https://i.pravatar.cc/150?u=indie" className="w-8 h-8 rounded-full border-2 border-white shadow-sm" alt="Avatar" />
                    <div>
                      <p className="font-bold text-xs text-slate-900">Indie</p>
                      <p className="text-[10px] text-slate-400">@indie_vibe</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ৩. মাঝখানের হিরো কার্ড */}
          <motion.div 
            style={{ y: y3 }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[340px] md:w-[400px] z-30"
          >
            <motion.div 
              className="relative group"
              initial={{ opacity: 0, y: 100, rotateX: 20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ type: "spring", stiffness: 50 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute -inset-2 bg-gradient-to-t from-purple-600 via-pink-600 to-blue-600 rounded-[3rem] blur-md opacity-40 group-hover:opacity-80 transition duration-700"></div>
              <div className="relative bg-slate-900 p-3 rounded-[3rem] shadow-2xl border border-white/20">
                <img 
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&q=80" 
                  className="rounded-[2.5rem] w-full h-[500px] object-cover filter brightness-110"
                  alt="Hero Creator"
                />
                
                {/* ফ্লোটিং রিয়্যাকশন আইকনস */}
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl text-3xl rotate-12"
                >
                  😍
                </motion.div>
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                  className="absolute top-20 -left-8 bg-white p-3 rounded-2xl shadow-xl text-2xl -rotate-12"
                >
                  🔥
                </motion.div>

                {/* নিচের গ্লাস ইফেক্ট টেক্সট */}
                <div className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-lg p-6 rounded-3xl border border-white/10">
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-white/60 text-xs font-medium uppercase tracking-wider mb-1">Total Reach</p>
                      <h3 className="text-3xl font-black text-white">2.4M+</h3>
                    </div>
                    <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-slate-900"><path d="M5 12l5 5l10 -10"></path></svg>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      <style jsx>{`
        .perspective-2000 {
          perspective: 2000px;
        }
        .perspective-container {
          transform-style: preserve-3d;
        }
      `}</style>
    </section>
  );
};

export default TikTokCreators;