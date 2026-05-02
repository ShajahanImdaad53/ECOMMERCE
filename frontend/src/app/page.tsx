'use client';

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white dark:bg-zinc-950">
      <Navbar />
      <Hero />
      <FeaturedProducts />
      
      {/* Category Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-24 bg-zinc-50 dark:bg-zinc-900/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-zinc-900 dark:text-white mb-16 text-center tracking-tight">Shop by <span className="text-indigo-600">Category</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Silk Collection', color: 'bg-amber-600' },
              { name: 'Cotton Sarongs', color: 'bg-blue-600' },
              { name: 'Traditional', color: 'bg-emerald-600' },
              { name: 'Premium', color: 'bg-indigo-600' }
            ].map((cat, index) => (
              <motion.div 
                key={cat.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="aspect-[4/3] relative rounded-[2rem] overflow-hidden group cursor-pointer shadow-xl shadow-zinc-200/50 dark:shadow-none"
              >
                <div className={`absolute inset-0 ${cat.color} opacity-90 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                  <span className="text-white font-black text-2xl tracking-tight">{cat.name}</span>
                </div>
                <div className="absolute inset-0 border-4 border-white/0 group-hover:border-white/20 transition-all duration-500 rounded-[2rem]" />
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
        className="py-24 bg-white dark:bg-zinc-950"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-600 rounded-[3rem] p-16 text-center relative overflow-hidden shadow-2xl shadow-indigo-500/20">
             <motion.div 
               animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
               transition={{ duration: 15, repeat: Infinity }}
               className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" 
             />
             <motion.div 
               animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
               transition={{ duration: 20, repeat: Infinity }}
               className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-indigo-400/20 rounded-full blur-3xl" 
             />
             
             <h2 className="text-4xl md:text-6xl font-black text-white relative z-10 tracking-tight leading-tight">Join the <br/>Premium Club</h2>
             <p className="mt-6 text-xl text-indigo-100 relative z-10 max-w-xl mx-auto font-medium">
               Get 20% off your first order and stay ahead with exclusive trends.
             </p>
             <form className="mt-12 flex flex-col sm:flex-row gap-4 max-w-lg mx-auto relative z-10">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-8 py-5 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-indigo-200 focus:outline-none focus:ring-4 focus:ring-white/30 backdrop-blur-xl transition-all"
                />
                <button className="px-10 py-5 bg-white text-indigo-600 font-bold rounded-full hover:bg-indigo-50 transition-all hover:scale-105 active:scale-95 shadow-xl">
                  Subscribe Now
                </button>
             </form>
          </div>
        </div>
      </motion.section>

      <Footer />
    </main>
  );
}
