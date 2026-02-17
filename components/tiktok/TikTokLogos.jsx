"use client";
import { motion } from "framer-motion";

const logos = [
  { name: "Conair", url: "https://i.ibb.co.com/1Gs7pvRT/conair-logo-png-seeklogo-465615.png" },
  { name: "Revolut", url: "https://i.ibb.co.com/TMsh0QN9/revolut-logo-png-seeklogo-336637.png" },
  { name: "IKEA", url: "https://i.ibb.co.com/MTYp7zj/ikea-logo-png-seeklogo-406786.png" },
  { name: "Shopify", url: "https://i.ibb.co.com/cc5DC3h5/spotify-logo-png-seeklogo-306691.png" },
  { name: "Nike", url: "https://i.ibb.co.com/qLyjZS5N/nike-logo-png-seeklogo-99488.png" },
  { name: "Samsung", url: "https://i.ibb.co.com/4nKZHv6D/samsung-logo-png-seeklogo-122019.png" },
  { name: "Airbnb", url: "https://i.ibb.co.com/G4bbrG0s/airbnb-logo-png-seeklogo-268282.png" },
];

const TikTokLogos = () => {
  return (
    <section className="py-20 bg-white overflow-hidden border-t border-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center mb-12">
        <h3 className="text-sm md:text-base font-black tracking-[0.2em] text-gray-400 uppercase">
          TRUSTED BY <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ea] via-[#ff0050] to-purple-600">
            35,000+ HAPPY USERS
          </span>
        </h3>
      </div>

      <div className="relative flex items-center">
        {/* Infinite Scroll Container */}
        <motion.div 
          className="flex whitespace-nowrap gap-16 md:gap-24 items-center px-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {/* লোগো লিস্ট ডাবল করা হয়েছে নিরবচ্ছিন্ন স্ক্রলিংয়ের জন্য */}
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex-shrink-0">
              <img 
                src={logo.url} 
                alt={logo.name} 
                className="h-8 md:h-12 w-auto grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all duration-500 cursor-pointer object-contain"
              />
            </div>
          ))}
        </motion.div>

        {/* সাইড ফেড ইফেক্ট */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
      </div>
    </section>
  );
};

export default TikTokLogos;