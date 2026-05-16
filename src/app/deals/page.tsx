'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import api from '@/utils/api';
import ProductCard from '@/components/product/ProductCard';
import { Tag, Zap, Clock, TrendingUp, ChevronRight } from 'lucide-react';

export default function DealsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        const { data } = await api.get('products');
        const productsData = Array.isArray(data) ? data : (data.products || []);
        // Simulate deals by picking a few products and adding a "deal" property
        const deals = productsData.slice(0, 4).map((p: any) => ({
          ...p,
          isDeal: true,
          discount: Math.floor(Math.random() * 20) + 10
        }));
        setProducts(deals);
      } catch (error) {
        console.error('Error fetching deals:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchDeals();
  }, []);

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950">
      <Navbar />
      
      {/* Animated Hero Banner */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-primary -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-hover via-primary to-orange-400 opacity-90" />
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute -top-1/2 -left-1/2 w-full h-full bg-white/10 rounded-full blur-3xl" 
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-xl border border-white/30 px-6 py-2 rounded-full text-white font-bold mb-8"
          >
            <Zap className="h-4 w-4 fill-white" />
            <span className="text-xs uppercase tracking-widest">Limited Time Offers</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black text-white leading-tight"
          >
            MEGA <span className="text-indigo-200">DEALS</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-xl text-indigo-100 max-w-2xl mx-auto font-medium"
          >
            Our biggest discounts of the season are here. Grab your favorites before they&apos;re gone!
          </motion.p>
        </div>
      </section>

      {/* Flash Sale Countdown Section (Simulated) */}
      <section className="relative z-10 -mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-zinc-900 rounded-[3rem] shadow-2xl p-12 border border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center space-x-6">
              <div className="p-5 bg-orange-100 dark:bg-orange-900/30 rounded-3xl">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Flash Sale Ends In</h2>
                <p className="text-zinc-500">Hurry up! Stocks are limited.</p>
              </div>
            </div>
            
            <div className="flex space-x-4">
              {[ {l: 'HRS', v: '08'}, {l: 'MIN', v: '42'}, {l: 'SEC', v: '15'} ].map((t, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-zinc-100 dark:bg-zinc-800 rounded-2xl flex items-center justify-center mb-2">
                    <span className="text-3xl font-black text-primary">{t.v}</span>
                  </div>
                  <span className="text-[10px] font-bold text-zinc-400 tracking-widest uppercase">{t.l}</span>
                </div>
              ))}
            </div>

            <Link href="/shop" className="px-10 py-5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold rounded-full hover:bg-primary transition-all shadow-xl shadow-primary/10 active:scale-95 text-center">
              View All Flash Deals
            </Link>
          </div>
        </div>
      </section>

      {/* Deals Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center space-x-4">
              <TrendingUp className="h-6 w-6 text-indigo-600" />
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Featured Deals</h2>
            </div>
            <div className="h-px flex-1 bg-zinc-100 dark:bg-zinc-900 mx-8 hidden md:block" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatePresence>
              {loading ? (
                [1,2,3,4].map((i) => (
                  <div key={i} className="aspect-[3/4] rounded-3xl bg-zinc-100 dark:bg-zinc-900 animate-pulse" />
                ))
              ) : (
                products.map((product, index) => (
                  <motion.div
                    key={product._id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="relative">
                      <div className="absolute -top-3 -right-3 z-20 bg-red-500 text-white text-xs font-black px-4 py-2 rounded-full shadow-lg transform rotate-12">
                        -{product.discount}%
                      </div>
                      <ProductCard product={product} />
                    </div>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Discount Banner */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="bg-zinc-900 dark:bg-zinc-100 rounded-[3rem] p-16 flex flex-col md:flex-row items-center justify-between relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent -z-10" />
            <div className="relative z-10">
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm">Exclusive Bonus</span>
              <h2 className="text-4xl md:text-5xl font-black text-white dark:text-zinc-900 mt-4 max-w-xl leading-tight">
                Get an extra 15% off with code <span className="text-primary">PREMIUM15</span>
              </h2>
            </div>
            <button className="mt-8 md:mt-0 px-12 py-6 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white font-black rounded-full hover:bg-primary transition-all shadow-2xl active:scale-95">
              Redeem Now
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
