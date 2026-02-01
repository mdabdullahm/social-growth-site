"use client";
import { motion } from "framer-motion";

const successData = [
  {
    name: "Nicolette Mason",
    handle: "@nicolettemason",
    role: "Influencer",
    followers: "191K",
    growth: "+17K",
    since: "Jan 2021",
    avatar: "https://i.pravatar.cc/150?u=nic",
    bg: "bg-gradient-to-br from-purple-500 to-pink-500",
  },
  {
    name: "Chad Carroll",
    handle: "@chadcarroll",
    role: "Realtor",
    followers: "512K",
    growth: "+63K",
    since: "Dec 2019",
    avatar: "https://i.pravatar.cc/150?u=chad",
    bg: "bg-gradient-to-br from-blue-500 to-indigo-600",
  },
  {
    name: "Moon Juice",
    handle: "@moonjuice",
    role: "Retail",
    followers: "310K",
    growth: "+157K",
    since: "Feb 2019",
    avatar: "https://i.pravatar.cc/150?u=moon",
    bg: "bg-gradient-to-br from-orange-500 to-red-500",
  },
  {
    name: "Grant Cardone",
    handle: "@grantcardone",
    role: "Entrepreneur",
    followers: "3M",
    growth: "+122K",
    since: "Jul 2019",
    avatar: "https://i.pravatar.cc/150?u=grant",
    bg: "bg-gradient-to-br from-amber-500 to-orange-600",
  },
  {
    name: "Away",
    handle: "@away",
    role: "E-commerce",
    followers: "592K",
    growth: "+213K",
    since: "Nov 2018",
    avatar: "https://i.pravatar.cc/150?u=away",
    bg: "bg-gradient-to-br from-cyan-500 to-blue-500",
  }
];

const SuccessCard = ({ item }) => (
  <div className={`flex-shrink-0 w-[300px] md:w-[350px] p-6 rounded-[2rem] text-white shadow-xl ${item.bg} relative overflow-hidden group`}>
    {/* Background Pattern (Plus signs / dots) */}
    <div className="absolute inset-0 opacity-10 pointer-events-none text-2xl font-bold flex flex-wrap gap-4 p-4">
      {[...Array(20)].map((_, i) => <span key={i}>+</span>)}
    </div>

    <div className="relative z-10">
      <div className="flex justify-between items-start mb-6">
        <div>
          <p className="text-xs font-bold opacity-80 uppercase tracking-widest">{item.role}</p>
          <h3 className="text-xl font-black">{item.name}</h3>
          <p className="text-sm opacity-90">{item.handle}</p>
        </div>
        <div className="w-16 h-16 rounded-full border-4 border-white/50 overflow-hidden shadow-lg group-hover:scale-110 transition-transform">
          <img src={item.avatar} alt={item.name} className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white/10 p-3 rounded-2xl">
          <p className="text-[10px] uppercase font-bold opacity-70">Followers</p>
          <p className="text-2xl font-black">{item.followers}</p>
        </div>
        <div className="bg-white/10 p-3 rounded-2xl">
          <p className="text-[10px] uppercase font-bold opacity-70">Growth</p>
          <p className="text-2xl font-black">{item.growth}</p>
        </div>
      </div>

      <div className="flex justify-between items-center text-xs font-bold pt-4 border-t border-white/20">
        <span className="opacity-70">Member Since</span>
        <span>{item.since}</span>
      </div>
    </div>
  </div>
);

const SuccessStories = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          Client Success Stories
        </h2>
      </div>

      {/* Row 1: Moving Right */}
      <div className="flex mb-10">
        <motion.div 
          className="flex gap-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {[...successData, ...successData].map((item, index) => (
            <SuccessCard key={index} item={item} />
          ))}
        </motion.div>
      </div>

      {/* Row 2: Moving Left */}
      <div className="flex">
        <motion.div 
          className="flex gap-8"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {[...successData, ...successData].map((item, index) => (
            <SuccessCard key={index} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStories;