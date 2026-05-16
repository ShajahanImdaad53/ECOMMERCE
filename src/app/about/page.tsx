'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Heart, Shield, Users, Globe } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { label: 'Artisans', value: '500+' },
    { label: 'Looms', value: '200+' },
    { label: 'Cities', value: '15+' },
    { label: 'Years', value: '35+' },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950">
      <Navbar />
      
      {/* Hero */}
      <section className="relative py-24 bg-zinc-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/sarong_1.png')] bg-cover bg-center opacity-20 grayscale" />
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase"
          >
            Our <span className="text-primary">Heritage</span>
          </motion.h1>
          <p className="mt-6 text-zinc-400 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
            LoomPro is more than just a store. It's a tribute to the timeless art of handloom weaving, connecting master artisans with those who appreciate authentic artisanal excellence.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 border-b border-zinc-100 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-black text-primary mb-2">{stat.value}</div>
                <div className="text-xs font-bold text-zinc-400 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter">Our Core Values</h2>
            <div className="mt-4 w-24 h-1 bg-primary mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: Heart, title: 'Artisan First', desc: 'We prioritize the well-being and fair compensation of our master weavers.' },
              { icon: Shield, title: 'Authenticity', desc: 'Every thread is guaranteed to be 100% authentic handloom creation.' },
              { icon: Globe, title: 'Sustainability', desc: 'Using organic dyes and traditional methods that protect our environment.' },
              { icon: Users, title: 'Community', desc: 'Supporting the local communities that keep the handloom heritage alive.' },
            ].map((value, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="text-center p-8 bg-zinc-50 dark:bg-zinc-900 rounded-[2.5rem] transition-all"
              >
                <div className="p-4 bg-white dark:bg-zinc-800 rounded-2xl inline-block mb-6 shadow-xl shadow-primary/5">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">{value.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
