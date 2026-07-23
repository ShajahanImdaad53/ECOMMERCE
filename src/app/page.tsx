'use client';

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { ShoppingBag, Star, Zap, ShieldCheck, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
        className="py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tighter">THE <span className="text-primary italic">COLLECTIONS</span></h2>
              <p className="mt-3 text-zinc-500 font-medium">Curated luxury for every occasion</p>
            </div>
            <Link href="/categories" className="mt-4 md:mt-0 inline-flex items-center space-x-2 text-sm font-bold text-primary hover:text-orange-600 transition-colors uppercase tracking-widest">
              <span>View All</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Silk Collection', image: '/images/categories/category_silk_1784771541606.jpg', link: '/shop?category=silk' },
              { name: 'Cotton Sarongs', image: '/images/categories/category_cotton_1784771561172.jpg', link: '/shop?category=cotton' },
              { name: 'Traditional', image: '/images/categories/category_traditional_1784771580927.jpg', link: '/shop?category=traditional' },
              { name: 'Premium Edition', image: '/images/categories/category_premium_1784771597998.jpg', link: '/shop?category=premium' }
            ].map((cat, index) => (
              <motion.div 
                key={cat.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link href={cat.link}>
                  <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden group cursor-pointer shadow-xl shadow-zinc-900/10 dark:shadow-none">
                    <Image 
                      src={cat.image}
                      alt={cat.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                    <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-center">
                      <span className="text-white font-black text-2xl tracking-tight leading-tight transform group-hover:-translate-y-2 transition-transform duration-500">{cat.name}</span>
                      <div className="w-0 h-0.5 bg-primary mt-4 group-hover:w-12 transition-all duration-500 ease-out" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Newsletter Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, type: "spring", bounce: 0.4 }}
        className="py-24 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 dark:to-primary/10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-br from-primary via-[#ff7a33] to-[#ff4000] rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-primary/40 group">
             {/* Dynamic background shapes */}
             <motion.div 
               animate={{ scale: [1, 1.5, 1], rotate: [0, 180, 360], x: [0, 50, 0] }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               className="absolute top-0 right-0 -mr-32 -mt-32 w-[30rem] h-[30rem] bg-white/10 rounded-full blur-[80px]" 
             />
             <motion.div 
               animate={{ scale: [1, 1.2, 1], rotate: [360, 180, 0], x: [0, -50, 0] }}
               transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
               className="absolute bottom-0 left-0 -ml-32 -mb-32 w-[30rem] h-[30rem] bg-yellow-400/20 rounded-full blur-[80px]" 
             />
             <motion.div
               animate={{ y: [0, -20, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-20 left-20 w-12 h-12 bg-white/20 rounded-full blur-xl"
             />
             
             <h2 className="text-5xl md:text-7xl font-black text-white relative z-10 tracking-tighter leading-[1.1] mb-6">
               JOIN THE <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-orange-200 drop-shadow-sm">LOOMPRO CLUB</span>
             </h2>
             <p className="text-xl md:text-2xl text-orange-50 relative z-10 max-w-2xl mx-auto font-medium opacity-95">
               Get 20% off your first order and stay ahead with exclusive handloom trends.
             </p>
             <form className="mt-12 flex flex-col sm:flex-row gap-4 max-w-xl mx-auto relative z-10">
                <input 
                  type="email" 
                  placeholder="Enter your best email..." 
                  className="flex-1 px-8 py-5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-orange-200 focus:outline-none focus:ring-4 focus:ring-white/40 focus:bg-white/20 backdrop-blur-xl transition-all shadow-inner text-lg"
                />
                <motion.button 
                  whileHover={{ scale: 1.05, backgroundColor: "#fff" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-white/95 text-primary font-black rounded-2xl shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all text-lg tracking-wide hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] flex items-center justify-center space-x-2"
                >
                  <span>SUBSCRIBE</span>
                </motion.button>
             </form>
          </div>
        </div>
      </motion.section>

      <Footer />
    </main>
  );
}
