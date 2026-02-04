"use client";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import partyAnimation from "../public/BG-Party (1).json";
import DashboardPreview from "@/components/Home/DashboardPreview";
import { Play, Maximize, Volume2, CheckCircle2 } from 'lucide-react';
import { useState } from "react";
import Features from "@/components/Home/Features";
import GrowthPreview from "@/components/Home/GrowthPreview";
import SuccessStories from "@/components/Home/SuccessStories";
import TrustStats from "@/components/Home/TrustStats";
import DetailSections from "@/components/Home/DetailSections";
import SecretSauce from "@/components/Home/SecretSauce";
import PremiumPress from "@/components/Home/PremiumPress";
import FAQ from "@/components/Home/FAQ";
import ContentGuide from "@/components/Home/ContentGuide";
import CallToAction from "@/components/Home/CallToAction";
// section 3 logo
const logos = [
  { name: "Nutribullet", url: "https://i.ibb.co.com/LdTp91y7/logos-logistica-promocional-logo-61-EAEDFE0-D-seeklogo-com.png" },
  { name: "Rockport", url: "https://i.ibb.co.com/s9FqBQh5/rockport-logo-png-seeklogo-320801.png" },
  { name: "SmileDirectClub", url: "https://i.ibb.co.com/kVQW26RB/doutor-octopus-logo-1-C3-C8-B0-FC2-seeklogo-com.png" },
  { name: "Wired", url: "https://i.ibb.co.com/9RvQtcV/sreelogo-logo-png-seeklogo-373377.png" },
  { name: "Esquire", url: "https://i.ibb.co.com/gLgJtqtH/design-free-logo-logo-png-seeklogo-306222.png" },
  { name: "The Sun", url: "https://i.ibb.co.com/JWjMtkhb/logo-design-new-zealand-logo-png-seeklogo-85155.png" },
  { name: "PRWeek", url: "https://i.ibb.co.com/NcL9rFZ/business-wire-logo-png-seeklogo-23905.png" }, // PNG format
  { name: "Social Media Today", url: "https://i.ibb.co.com/4Zz8dp9c/esquire-grill-logo-png-seeklogo-49406.png" }
];



// video data
const testimonials = [
  {
    id: 1,
    name: "Jake Pitts",
    handle: "@jakepittsbvb",
    followers: "592K",
    color: "border-[#FF6B6B] bg-[#FF6B6B]",
    // সরাসরি কাজ করবে এমন Unsplash লিঙ্ক
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&q=80",
    avatar: "https://i.pravatar.cc/150?u=jake",
    initials: "JP"
  },
  {
    id: 2,
    name: "Gary Holt",
    handle: "@garyholt_official",
    followers: "424K",
    color: "border-[#FFB74D] bg-[#FFB74D]",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&q=80",
    avatar: "https://i.pravatar.cc/150?u=gary",
    initials: "GH"
  },
  {
    id: 3,
    name: "Evan Breen",
    handle: "@laturtle69",
    followers: "614K",
    color: "border-[#F06292] bg-[#F06292]",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80",
    avatar: "https://i.pravatar.cc/150?u=evan",
    initials: "EB"
  },
  {
    id: 4,
    name: "Janelle Pierzina",
    handle: "@janellepierzina",
    followers: "253K",
    color: "border-[#BA68C8] bg-[#BA68C8]",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&q=80",
    avatar: "https://i.pravatar.cc/150?u=janelle",
    initials: "JP"
  },
];



// Image handler component (will show initial if there is no image)
const AvatarImage = ({ src, initials }) => {
  const [isError, setIsError] = useState(false);
  return (
    <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-700 font-bold text-sm">
      {!isError ? (
        <img
          src={src}
          alt="avatar"
          className="w-full h-full object-cover"
          onError={() => setIsError(true)}
        />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  );
};



export default function Home() {
  const features = [
    "Targeted Audience Reach",
    "Real Organic Engagement",
    "AI-Powered Analytics",
    "Safe & Secure Growth"
  ];

  return (
    <main className="relative min-h-screen bg-white overflow-hidden pt-20">
      {/* section 1 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col items-center text-center relative z-10">
        {/* Lottie Background Animation */}
        <div className="absolute inset-0 pointer-events-none z-0 flex justify-center items-center opacity-70 ">
          <Lottie
            animationData={partyAnimation}
            loop={true}
            className="w-full h-full object-cover"
          />
        </div>

        {/* 1. Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-7xl font-extrabold tracking-tight text-[#1a1a1a]"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5E7D] via-[#A855F7] to-[#3B82F6]">
            Get Real Instagram Followers
          </span>
          <br />
          Using Organic AI-Growth & Automation
        </motion.h1>

        {/* 2. Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-8 text-lg md:text-xl text-gray-700 max-w-4xl font-medium leading-relaxed"
        >
          No bots, no fake followers, no passwords. Gain real targeted followers automatically <br className="hidden md:block" />
          using AI, Instagram Experts and our <span className="border-b border-gray-400">patent-pending* technology.</span>
        </motion.p>

        {/* 3. Buttons with Glowing Borders */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-12 flex flex-col sm:flex-row gap-6 items-center justify-center"
        >
          {/* Get Started Button */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <button className="relative px-12 py-5 bg-[#0F172A] text-white font-bold rounded-full text-xl flex items-center gap-3 transition-all active:scale-95">
              Get Started
              <span className="text-2xl">›</span>
            </button>
          </div>

          {/* Preview Growth Button */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full blur-sm opacity-60"></div>
            <button className="relative px-12 py-5 bg-white text-gray-900 font-bold rounded-full text-xl border border-gray-100 transition-all active:scale-95">
              Preview your growth
            </button>
          </div>
        </motion.div>

        {/* 4. Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8 text-sm md:text-base font-bold text-gray-800"
        >
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
            2-Minute Setup
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
            100% Growth Guaranteed
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
            Rated 4.91/5
            <div className="flex gap-0.5 ml-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-5 h-5 bg-[#4ADE80] flex items-center justify-center rounded-sm">
                  <svg className="w-3.5 h-3.5 text-white fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </section>
      {/* section 2 */}
      {/* Dashboard Preview Section */}
      <section>
        <DashboardPreview />
      </section>
      {/* logo section 3 */}
      <section className="relative py-20 bg-white overflow-hidden border-t border-gray-50">
        <div className="text-center mb-24 px-4 relative z-10">
          <h3 className="text-[11px] md:text-sm font-black tracking-[0.3em] text-gray-400 uppercase">
            TRUSTED BY <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500">
              55,000+ INSTAGRAMMERS, AGENCIES & BUSINESSES
            </span>
          </h3>
        </div>

        {/* Diagonal Container wrapper */}
        <div className="relative flex flex-col gap-8 md:gap-14 transform -rotate-3 md:-rotate-6 scale-110 origin-center py-10">

          {/* First Line: Scroll Left */}
          <div className="flex overflow-hidden">
            <motion.div
              className="flex whitespace-nowrap gap-16 md:gap-32 items-center px-10"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            >
              {[...logos, ...logos].map((logo, index) => (
                <div key={index} className="flex-shrink-0">
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="h-12 md:h-20 w-auto object-contain hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Second Line: Scroll Right */}
          <div className="flex overflow-hidden">
            <motion.div
              className="flex whitespace-nowrap gap-16 md:gap-32 items-center px-10"
              animate={{ x: ["-50%", "0%"] }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            >
              {[...logos, ...logos].map((logo, index) => (
                <div key={index} className="flex-shrink-0">
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="h-12 md:h-20 w-auto object-contain hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Gradient Overlays (Rotated with content) */}
          <div className="absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-white via-white/90 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-white via-white/90 to-transparent z-20 pointer-events-none"></div>
        </div>
      </section>
      {/* Targeted Growth video section 4 */}
      <section className="py-24 bg-white relative overflow-hidden flex items-center justify-center min-h-[800px]">

        {/* মেইন কন্টেইনার */}
        <div className="relative w-full max-w-5xl h-[600px] px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight mb-4"
          >
            Targeted, Organic <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Instagram Growth
            </span>
          </motion.h2>
          {/* 1. Gradient Background Card (নিচে এবং বামে) + Content + Floating Animation */}
          <motion.div
            initial={{ opacity: 0, x: -50, y: 50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            // Floating Animation (Continuous movement)
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0 // No delay for start
            }}
            viewport={{ once: true }}
            className="absolute bottom-0 left-0 md:left-4 w-[90%] md:w-[70%] h-[70%] rounded-[2.5rem] z-0 shadow-xl overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #2E7CF6 0%, #A855F7 50%, #EC4899 100%)'
            }}
          >
            {/* Decorative shapes inside card */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            {/* Content inside the Gradient Card (বাম পাশে যা যোগ করতে বলেছেন) */}
            <div className="absolute top-10 left-8 md:left-12 z-10 max-w-[45%]">
              <div className="space-y-6">
                {features.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + (index * 0.1) }}
                    className="flex items-center gap-3"
                  >
                    <div className="bg-white/20 p-1.5 rounded-full backdrop-blur-sm">
                      <CheckCircle2 size={18} className="text-white" />
                    </div>
                    <span className="text-white font-medium text-sm md:text-lg tracking-wide shadow-sm">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom Text (আগের মতো) */}
            <div className="absolute bottom-8 w-full text-center px-4">
              <h2 className="text-white text-lg md:text-2xl font-bold drop-shadow-md tracking-wide">
                Patented, Personalized AI Growth Service
              </h2>
            </div>
          </motion.div>

          {/* 2. Video Player (উপরে এবং ডানে) + Floating Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: -50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            // Floating Animation (Continuous movement - slightly different timing for parallax effect)
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5 // Slight delay to make them move unsynchronized
            }}
            viewport={{ once: true }}
            className="absolute top-0 right-0 md:right-4 w-[85%] md:w-[65%] h-[65%] z-10"
          >
            {/* ভিডিও কন্টেইনার */}
            <div className="bg-white p-3 md:p-4 rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.3)] w-full h-full transform rotate-1 transition-transform hover:rotate-0 duration-500">

              {/* Netflix Style Player */}
              <div className="relative w-full h-full bg-[#0A0A0A] rounded-[1.5rem] overflow-hidden group cursor-pointer ring-1 ring-white/10">

                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src="https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=2070&auto=format&fit=crop"
                    alt="Video Background"
                    className="w-full h-full object-cover opacity-50"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                </div>

                {/* Center Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pb-12">
                  <h3 className="text-5xl md:text-7xl font-bold text-white tracking-tighter drop-shadow-2xl">
                    So <span className="text-[#E50914]">what</span>
                  </h3>
                </div>

                {/* Controls UI */}
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black via-black/60 to-transparent text-white z-30">
                  <div className="w-full h-1.5 bg-gray-600 rounded-full mb-4 relative group/bar overflow-hidden">
                    <div className="absolute top-0 left-0 h-full w-[45%] bg-[#E50914]"></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Play fill="white" size={24} className="hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium opacity-90">0:21 / 1:47</span>
                    </div>
                    <div className="flex items-center gap-4 opacity-90">
                      <Volume2 size={22} />
                      <Maximize size={22} />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </section>
      {/* video section 5 */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">

          <h2 className="text-4xl md:text-6xl font-black text-center text-slate-900 mb-16">
            Video Testimonials
          </h2>

          {/* মাস্কিং এফেক্ট (দুই পাশে ঝাপসা করার জন্য - ঐচ্ছিক) */}
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">

            <motion.div
              className="flex gap-6 w-max"
              // অ্যানিমেশন লজিক: 0% থেকে -50% পর্যন্ত যাবে (কারণ আমরা লিস্ট ডবল করেছি)
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity, // চলতেই থাকবে
                ease: "linear",   // একই গতিতে চলবে
                duration: 30,     // কত দ্রুত চলবে (মান বাড়ালে স্লো হবে, কমালে ফাস্ট হবে)
              }}
              // হোভার করলে অ্যানিমেশন থামবে
              whileHover={{ playState: "paused" }}
            >
              {/* লিস্ট দুইবার রেন্ডার করা হচ্ছে লুপ ঠিক রাখার জন্য */}
              {[...testimonials, ...testimonials].map((item, index) => (
                <motion.div
                  // key-এর সাথে index যোগ করা হয়েছে যাতে ডুপ্লিকেট key এরর না দেয়
                  key={`${item.id}-${index}`}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className={`relative flex-shrink-0 w-[300px] h-[500px] md:w-[350px] md:h-[550px] rounded-[3rem] border-4 ${item.color.split(' ')[0]} overflow-hidden shadow-2xl group bg-gray-100`}
                >
                  {/* মেইন ভিডিও ইমেজ */}
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => { e.target.src = "https://via.placeholder.com/400x600?text=Video+Thumbnail"; }}
                  />

                  {/* প্রোফাইল ইনফো */}
                  <div className="absolute top-6 left-6 flex items-center gap-3 z-10">
                    <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden shadow-lg bg-white">
                      <AvatarImage src={item.avatar} initials={item.initials} />
                    </div>
                    <div className="text-white drop-shadow-md">
                      <p className="font-bold text-lg leading-tight">{item.name}</p>
                      <p className="text-xs font-medium opacity-90">{item.handle}</p>
                    </div>
                  </div>

                  {/* প্লে বাটন */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                      <Play size={24} className="text-black ml-1" fill="black" />
                    </div>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>

                  {/* ফলোয়ার ব্যাজ */}
                  <div className="absolute bottom-8 inset-x-0 flex justify-center px-8">
                    <div className={`w-full py-3.5 rounded-2xl ${item.color.split(' ')[1]} text-white text-center font-bold text-lg shadow-xl border border-white/20`}>
                      <span className="text-xl">{item.followers}</span> Followers
                    </div>
                  </div>

                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      {/* features section 5 */}
      <section>
        <Features/>
      </section>
      {/* Growth Preview section 6 */}
      <section>
        <GrowthPreview/>
      </section>
      {/* Success Stories section 7*/}
      <section>
        <SuccessStories/>
      </section>
       {/* Trust Stats & Brand Logos section 8*/}
       <section>
        <TrustStats/>
       </section>
       {/* Detail Features section 9 */}
       <section>
        <DetailSections/>
       </section>
       {/* Secret Sauce section 10 */}
       <section>
        <SecretSauce/>
       </section>
       {/* International Standard section 11 */}
       <section>
        <PremiumPress/>
       </section>
       {/* Frequently Asked Questions (FAQ) section 12 */}
       <section>
        <FAQ/>
       </section>
       {/* Content & Guide section 13 */}
       <section>
        <ContentGuide/>
       </section>
       {/* Call to Action (CTA) section 14 */}
       <section>
        <CallToAction/>
       </section>
    </main>
  );
}