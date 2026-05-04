'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const BRANDS = [
  { name: 'Heritage Silks', desc: 'Authentic silk handlooms since 1985', color: 'from-amber-500 to-orange-600' },
  { name: 'Artisan Loom', desc: 'Sustainable cotton creations', color: 'from-emerald-500 to-teal-600' },
  { name: 'Royal Weaves', desc: 'Premium ceremonial attire', color: 'from-purple-500 to-indigo-600' },
  { name: 'Nature Thread', desc: 'Organic dye specialists', color: 'from-lime-500 to-green-600' },
  { name: 'Island Craft', desc: 'Traditional coastal designs', color: 'from-sky-500 to-blue-600' },
  { name: 'Zen Cotton', desc: 'Minimalist handloom lifestyle', color: 'from-zinc-500 to-zinc-700' },
];

export default function BrandsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-zinc-900 py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-2 bg-primary/20 text-primary border border-primary/30 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-8"
          >
            <ShieldCheck className="h-4 w-4" />
            <span>100% Authentic Brands</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-tight">
            BRAND <span className="text-primary">MALL</span>
          </h1>
          <p className="mt-6 text-zinc-400 max-w-2xl mx-auto text-lg">
            Shop directly from Sri Lanka&apos;s most prestigious handloom boutiques and artisan studios.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BRANDS.map((brand, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-64 rounded-[2.5rem] overflow-hidden cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${brand.color} opacity-80 group-hover:scale-110 transition-transform duration-700`} />
              <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
                <h3 className="text-3xl font-black">{brand.name}</h3>
                <p className="text-white/80 mt-2 font-medium">{brand.desc}</p>
                <div className="mt-6 flex items-center space-x-2 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                  <span>Explore Brand</span>
                  <ArrowRight className="h-4 w-4" />
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
