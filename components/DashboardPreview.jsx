"use client";
import { motion } from "framer-motion";
import { Users, BarChart3, Globe, Zap, Settings, HelpCircle, MoreHorizontal } from "lucide-react";

const DashboardPreview = () => {
  return (
    <section className="bg-[#FDFDFF] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A1F36] mb-4">
            Powerful Analytics at Your Fingertips
          </h2>
          <p className="text-[#697386] text-lg max-w-2xl mx-auto">
            Track your Instagram growth in real-time with our intuitive dashboard.
          </p>
        </div>

        {/* 3D Perspective Wrapper */}
        <div className="relative" style={{ perspective: "2000px" }}>
          
          {/* এই সেই কাত করা (Skewed) ড্যাশবোর্ড */}
          <motion.div 
            initial={{ opacity: 0, y: 50, rotateX: 20, rotateY: -10, rotateZ: 2 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 12, rotateY: -5, rotateZ: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-white rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border border-[#E3E8EE] flex h-[600px] overflow-hidden origin-top"
          >
            {/* Sidebar */}
            <div className="w-20 border-r border-[#F7F9FC] flex flex-col items-center py-8 gap-8 bg-white shrink-0 hidden md:flex">
               <div className="w-10 h-10 bg-[#635BFF] rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-100">P</div>
               <div className="flex flex-col gap-9 mt-4 text-[#A3ACB9]">
                 <BarChart3 className="text-[#635BFF] w-6 h-6" />
                 <Users className="w-6 h-6 hover:text-[#635BFF] transition-colors" />
                 <Globe className="w-6 h-6 hover:text-[#635BFF] transition-colors" />
                 <Zap className="w-6 h-6 hover:text-[#635BFF] transition-colors" />
               </div>
               <div className="mt-auto flex flex-col gap-8 mb-4 text-[#A3ACB9]">
                 <Settings className="w-6 h-6" />
                 <HelpCircle className="w-6 h-6" />
               </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0 bg-[#F7F9FC]">
              {/* Top Bar */}
              <div className="h-16 bg-white border-b border-[#F2F4F7] flex items-center px-8 justify-between">
                  <div className="flex gap-8 text-[13px] font-bold text-[#697386] uppercase tracking-wider">
                    <span className="text-[#635BFF] border-b-2 border-[#635BFF] pb-[21px]">Overview</span>
                    <span>Growth Settings</span>
                    <span className="flex items-center gap-2">
                      Improvements <span className="bg-[#635BFF] text-white text-[10px] px-2 py-0.5 rounded-full">3</span>
                    </span>
                  </div>
                  <div className="w-8 h-8 bg-gray-100 rounded-full border border-gray-200" />
              </div>

              {/* Widgets Grid */}
              <div className="p-8 space-y-6 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Real-time Stats Card */}
                  <div className="md:col-span-2 bg-white p-6 rounded-2xl border border-[#E3E8EE] shadow-sm">
                    <h3 className="text-[13px] font-bold text-[#1A1F36] mb-6 uppercase tracking-tight">Real-Time Activity</h3>
                    <div className="flex gap-10 mb-8 text-[#1A1F36]">
                      <div><p className="text-[10px] text-[#8792A2] font-bold uppercase mb-1">Total Actions</p><p className="text-2xl font-black">4,251</p></div>
                      <div><p className="text-[10px] text-[#8792A2] font-bold uppercase mb-1">Reached</p><p className="text-2xl font-black">2,082</p></div>
                      <div><p className="text-[10px] text-[#8792A2] font-bold uppercase mb-1">Post Views</p><p className="text-2xl font-black">1,050</p></div>
                    </div>
                    {/* Green Bars */}
                    <div className="flex items-end gap-2 h-28">
                      {[40, 70, 45, 90, 65, 80, 50, 95, 30, 85, 55, 60].map((h, i) => (
                        <motion.div 
                          key={i} 
                          initial={{ scaleY: 0 }}
                          whileInView={{ scaleY: 1 }}
                          transition={{ delay: i * 0.03, duration: 0.5 }}
                          style={{ height: `${h}%`, transformOrigin: "bottom" }} 
                          className="flex-1 bg-[#00D924] rounded-t-md opacity-90"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Activity Feed */}
                  <div className="bg-white p-6 rounded-2xl border border-[#E3E8EE] shadow-sm">
                    <h3 className="text-[13px] font-bold text-[#1A1F36] mb-6 flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#FF3B30] rounded-full animate-pulse" /> Activity Feed
                    </h3>
                    <div className="space-y-6">
                      {[1, 2, 3].map((idx) => (
                        <div key={idx} className="flex gap-3">
                          <div className="w-8 h-8 bg-[#F7F9FC] rounded-full shrink-0" />
                          <div className="text-[13px] leading-tight">
                             <p className="font-bold text-[#1A1F36]">Reached 4 users on #travel</p>
                             <p className="text-[#A3ACB9] text-[11px] mt-1">7 minutes ago</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Growth Overview Line Chart */}
                <div className="bg-white p-8 rounded-2xl border border-[#E3E8EE] shadow-sm">
                   <h3 className="text-[13px] font-bold text-[#1A1F36] mb-8">Growth Overview</h3>
                   <div className="w-full h-36 relative">
                      <svg className="w-full h-full" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <motion.path 
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          transition={{ duration: 2, ease: "easeInOut" }}
                          d="M0,80 Q150,70 300,50 T600,30 T1000,10" 
                          fill="none" 
                          stroke="#635BFF" 
                          strokeWidth="3"
                        />
                      </svg>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* অতিরিক্ত লুকের জন্য পেছনে একটি হালকা শ্যাডো ডিভ */}
          <div className="absolute inset-0 bg-blue-600/5 blur-3xl rounded-full -z-10 transform translate-y-20 scale-90" />
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;