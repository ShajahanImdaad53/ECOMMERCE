'use client';

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { ShoppingBag, Star, Zap, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-bg-main">
      <Navbar />
      <Hero />
      
      {/* Trust Badges */}
      <div className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 py-4">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center md:justify-between gap-6">
          {[
            { icon: ShieldCheck, text: "Safe & Secure Payments" },
            { icon: ShoppingBag, text: "Authentic Products" },
            { icon: Zap, text: "Fast Delivery" },
            { icon: Star, text: "Top Rated Artisans" }
          ].map((item, i) => (
            <div key={i} className="flex items-center space-x-2 text-zinc-500 dark:text-zinc-400">
              <item.icon className="h-5 w-5 text-primary" />
              <span className="text-xs font-bold uppercase tracking-widest">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      <FeaturedProducts />
      
      {/* Category Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-10">
            <h2 className="text-3xl font-black text-zinc-900 dark:text-white tracking-tighter">SHOP BY <span className="text-primary">CATEGORY</span></h2>
            <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {[
              { name: 'Silk Collection', color: 'from-amber-500 to-orange-600', icon: '✨' },
              { name: 'Cotton Sarongs', color: 'from-blue-500 to-indigo-600', icon: '🧵' },
              { name: 'Traditional Wear', color: 'from-emerald-500 to-teal-600', icon: '🏺' },
              { name: 'Premium Edition', color: 'from-rose-500 to-red-600', icon: '👑' }
            ].map((cat, index) => (
              <motion.div 
                key={cat.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="relative aspect-[16/9] rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-primary/20 transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-90 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  <span className="text-4xl mb-2 transform group-hover:scale-125 transition-transform">{cat.icon}</span>
                  <span className="text-white font-black text-xl tracking-tight leading-tight">{cat.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Newsletter Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-3xl p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-primary/30">
             <motion.div 
               animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
               transition={{ duration: 15, repeat: Infinity }}
               className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" 
             />
             <motion.div 
               animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
               transition={{ duration: 20, repeat: Infinity }}
               className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-orange-400/20 rounded-full blur-3xl" 
             />
             
             <h2 className="text-4xl md:text-6xl font-black text-white relative z-10 tracking-tight leading-tight">JOIN THE <br/>DARAZ CLUB</h2>
             <p className="mt-6 text-xl text-orange-50-white relative z-10 max-w-xl mx-auto font-medium opacity-90 text-white">
               Get 20% off your first order and stay ahead with exclusive trends.
             </p>
             <form className="mt-12 flex flex-col sm:flex-row gap-4 max-w-lg mx-auto relative z-10">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-8 py-5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-orange-100 focus:outline-none focus:ring-4 focus:ring-white/30 backdrop-blur-md transition-all"
                />
                <button className="px-10 py-5 bg-white text-primary font-black rounded-xl hover:bg-orange-50 transition-all hover:scale-105 active:scale-95 shadow-xl">
                  SUBSCRIBE
                </button>
             </form>
          </div>
        </div>
      </motion.section>

      <Footer />
    </main>
  );
}
