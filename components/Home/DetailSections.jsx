"use client";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

const FeatureBlock = ({ title, desc, linkText, image, reverse = false, badge }) => (
  <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 py-20`}>
    <div className="flex-1 space-y-6">
      {badge && (
        <span className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
        {title}
      </h2>
      <p className="text-slate-500 text-lg md:text-xl leading-relaxed">
        {desc}
      </p>
      <button className="group flex items-center gap-2 text-blue-600 font-black text-lg hover:gap-4 transition-all">
        {linkText} <ArrowRight size={20} />
      </button>
    </div>
    
    <div className="flex-1 relative">
      <div className={`absolute -inset-10 ${reverse ? 'bg-purple-100' : 'bg-blue-100'} rounded-full blur-3xl opacity-50 -z-10`}></div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-2"
      >
        <img src={image} alt="Feature Mockup" className="rounded-2xl w-full h-auto" />
      </motion.div>
    </div>
  </div>
);

const DetailSections = () => {
  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* কার্ড ১: এআই গ্রোথ ইঞ্জিন */}
        <FeatureBlock 
          badge="AI Intelligence"
          title="Scale your audience with our intelligent growth engine"
          desc="Our advanced AI doesn't just find followers; it builds a community. By analyzing behavior and trends, we connect you with users who are genuinely interested in your brand's story."
          linkText="Explore how it works"
          image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
        />

        {/* কার্ড ২: অ্যানালিটিক্স (Reverse) */}
        <FeatureBlock 
          reverse
          badge="Deep Insights"
          title="Visual analytics that guide your content strategy"
          desc="Knowledge is power. Get crystal clear reports on your growth, engagement rates, and audience demographics. Make data-driven decisions that propel your profile forward."
          linkText="Open your dashboard"
          image="https://i.ibb.co.com/v440BbNv/representation-user-experience-interface-design.jpg"
        />

        {/* কার্ড ৩: এক্সপার্ট টিম (নতুন কার্ড ১) */}
        <FeatureBlock 
          badge="Expert Guidance"
          title="Boost performance with your personal team of growth specialists"
          desc="Experience the peace of mind that comes with 24/7 dedicated support. Our experts monitor your profile trends and optimize your results so you can focus on creating great content."
          linkText="Meet your growth expert"
          image="https://i.ibb.co.com/XftBgkXh/office-workers-working-together-as-team.jpg" 
        />

        {/* কার্ড ৪: ক্লাউড অটোমেশন (নতুন কার্ড ২ - Reverse) */}
        <FeatureBlock 
          reverse
          badge="Cloud Solutions"
          title="Achieve next-level impact with AI-powered automation & tools"
          desc="Harness the full potential of cloud technology to stay ahead of the curve. Access exclusive growth hacks, hashtag optimization, and niche-specific stats tailored to your page."
          linkText="Get beta access to cloud"
          image="https://i.ibb.co.com/xq98rSDJ/6453210.jpg"
        />

        {/* --- এর নিচে তোমার বাকি কোডগুলো (Content Intelligence এবং Testimonials) থাকবে --- */}
        
        <div className="py-24 border-t border-gray-50">
          <div className="text-center mb-16 space-y-4">
             <h2 className="text-3xl md:text-5xl font-black text-slate-900">Content Intelligence</h2>
             <p className="text-slate-500 max-w-2xl mx-auto">Discover which posts are driving the most growth and optimize your posting schedule with AI.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: "Most Liked", val: "High Engagement", color: "border-blue-500" },
              { label: "Most Commented", val: "Conversation Starter", color: "border-purple-500" },
              { label: "Best Retention", val: "Loyal Audience", color: "border-pink-500" }
            ].map((card, i) => (
              <div key={i} className={`p-8 rounded-[2rem] border-2 ${card.color} bg-gray-50 hover:shadow-xl transition-all`}>
                <p className="font-black text-blue-600 uppercase text-xs mb-4">{card.label}</p>
                <div className="h-40 bg-gray-200 rounded-2xl mb-4 overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&q=80" className="w-full h-full object-cover" />
                </div>
                <h4 className="text-xl font-bold text-slate-800">{card.val}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
           {[
             { name: "Entrepreneur", text: "The most organic growth tool I've ever used. Highly recommended!", rating: 5 },
             { name: "Social Hub", text: "Finally an AI tool that actually understands my niche and audience.", rating: 5 },
             { name: "Creator Daily", text: "Saves me 20+ hours every single week. A game changer for my business.", rating: 4 },
             { name: "Brand Pulse", text: "Simple, effective, and 100% safe. My reach has doubled in a month.", rating: 5 }
           ].map((item, i) => (
             <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                <div className="flex text-yellow-400 mb-4">
                   {[...Array(5)].map((_, idx) => <Star key={idx} size={14} fill={idx < item.rating ? "currentColor" : "none"} />)}
                </div>
                <p className="text-slate-700 font-medium mb-6 italic">"{item.text}"</p>
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-600">
                      {item.name[0]}
                   </div>
                   <span className="font-black text-sm text-slate-900">{item.name}</span>
                </div>
             </div>
           ))}
        </div>

      </div>
    </section>
  );
};

export default DetailSections;