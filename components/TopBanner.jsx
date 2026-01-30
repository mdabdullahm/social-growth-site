"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TopBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  
  const [timeLeft, setTimeLeft] = useState({ hr: "00", min: "00", sec: "00" });

  useEffect(() => {
    const targetTime = new Date().getTime() + (3 * 60 * 60 * 1000) + (45 * 60 * 1000) + (20 * 1000);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference <= 0) {
        clearInterval(timer);
      } else {
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({
          hr: String(hours).padStart(2, '0'),
          min: String(minutes).padStart(2, '0'),
          sec: String(seconds).padStart(2, '0'),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          className="bg-gradient-to-r from-blue-500 to-purple-600 w-full py-2 px-4 flex items-center justify-between md:justify-center gap-4 relative shadow-md border-b border-black/5"
        >
          {/* Close Button */}
          <button 
            onClick={() => setIsVisible(false)}
            className="text-white/80 hover:text-white transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>

          <div className="flex items-center gap-3 md:gap-8">
            {/* 1. Offer text */}
            <div className="flex items-center gap-2">
               <div className="bg-white/30 p-1 rounded-full animate-bounce">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
               </div>
               <p className="text-white font-black text-sm md:text-xl tracking-tighter">
                50% OFF <span className="font-medium text-[10px] md:text-sm opacity-90 hidden sm:inline">ANNUAL PLANS</span>
               </p>
            </div>

            {/* Divider Line */}
            <div className="h-8 w-[1.5px] bg-white/40 hidden md:block"></div>

            {/* 2. Anniversary Text */}
            <div className="flex items-center gap-2">
              <h2 className="text-white font-black text-[11px] md:text-lg uppercase tracking-wider">
                Anniversary 
              </h2>
              <span className="bg-white text-blue-600 px-2 py-0.5 rounded text-[8px] md:text-[10px] font-bold shadow-sm">
                FLASH SALE
              </span>
            </div>

            {/* 3. The Live Timer (Blue Boxes) */}
            <div className="flex items-center gap-1.5">
               {[
                 { label: 'HR', value: timeLeft.hr },
                 { label: 'MIN', value: timeLeft.min },
                 { label: 'SEC', value: timeLeft.sec }
               ].map((item, index) => (
                 <div key={index} className="flex flex-col items-center">
                    <div className="bg-[#007bff] text-white w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-md font-black text-xs md:text-base shadow-lg border-b-2 border-blue-800">
                      {item.value}
                    </div>
                    <span className="text-[7px] md:text-[9px] text-white font-bold mt-0.5">{item.label}</span>
                 </div>
               ))}
            </div>
          </div>

          <div className="w-4 hidden md:block"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TopBanner;