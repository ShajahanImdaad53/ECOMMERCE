'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const BRANDS = [
  { name: 'Heritage Silks', desc: 'Authentic silk handlooms since 1985', image: '/images/brands/brand_heritage_silks_1784770728303.jpg' },
  { name: 'Artisan Loom', desc: 'Sustainable cotton creations', image: '/images/brands/brand_artisan_loom_1784770763186.jpg' },
  { name: 'Royal Weaves', desc: 'Premium ceremonial attire', image: '/images/brands/brand_royal_weaves_1784770783476.jpg' },
  { name: 'Nature Thread', desc: 'Organic dye specialists', image: '/images/brands/brand_nature_thread_1784770801202.jpg' },
  { name: 'Island Craft', desc: 'Traditional coastal designs', image: '/images/brands/brand_island_craft_1784770819059.jpg' },
  { name: 'Zen Cotton', desc: 'Minimalist handloom lifestyle', image: '/images/brands/brand_zen_cotton_1784770837254.jpg' },
];

export default function BrandsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-zinc-950 py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-zinc-950 to-zinc-950 opacity-80" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-2 bg-primary/10 text-primary border border-primary/20 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-8"
          >
            <ShieldCheck className="h-4 w-4" />
            <span>100% Authentic Brands</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-tight"
          >
            THE BRAND <span className="text-primary italic">MALL</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-zinc-400 max-w-2xl mx-auto text-xl font-medium"
          >
            Shop directly from Sri Lanka&apos;s most prestigious handloom boutiques and artisan studios. Elevated luxury for your lifestyle.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {BRANDS.map((brand, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              className="group relative h-[28rem] rounded-[2rem] overflow-hidden cursor-pointer shadow-2xl shadow-zinc-900/20"
            >
              <Image 
                src={brand.image}
                alt={brand.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              <div className="absolute inset-0 p-10 flex flex-col justify-end text-white relative z-10">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-4xl font-black tracking-tight">{brand.name}</h3>
                  <p className="text-zinc-300 mt-3 font-medium text-lg">{brand.desc}</p>
                </div>
                <div className="mt-8 flex items-center space-x-3 text-sm font-black uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-all translate-y-8 group-hover:translate-y-0 duration-500 delay-75">
                  <span>Explore Collection</span>
                  <ArrowRight className="h-5 w-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
