'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, Laptop, Smartphone, Watch, Camera, Coffee, Shirt, Home } from 'lucide-react';

const categories = [
  {
    name: 'Silk Collection',
    slug: 'silk',
    description: 'Luxurious hand-woven silk textiles.',
    icon: Watch,
    color: 'from-amber-600 to-yellow-600',
    image: 'https://images.unsplash.com/photo-1610030469619-335689100913?q=80&w=1000'
  },
  {
    name: 'Cotton Sarongs',
    slug: 'cotton',
    description: 'Breathable and soft traditional cotton sarongs.',
    icon: Smartphone,
    color: 'from-blue-600 to-cyan-600',
    image: 'https://images.unsplash.com/photo-1590736704728-f4730bb30770?q=80&w=1000'
  },
  {
    name: 'Traditional Wear',
    slug: 'traditional',
    description: 'Heritage designs preserved through generations.',
    icon: Home,
    color: 'from-indigo-600 to-violet-600',
    image: 'https://images.unsplash.com/photo-1594191316027-6f02120e53a3?q=80&w=1000'
  },
  {
    name: 'Premium Edition',
    slug: 'premium',
    description: 'Limited edition masterpieces from master weavers.',
    icon: Watch,
    color: 'from-purple-600 to-pink-600',
    image: 'https://images.unsplash.com/photo-1617146059253-66224424361c?q=80&w=1000'
  },
];

export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950">
      <Navbar />
      
      {/* Header */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-zinc-50 dark:bg-zinc-900/50 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-black text-zinc-900 dark:text-white"
          >
            Explore <span className="text-indigo-600">Categories</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto"
          >
            Discover our wide range of premium products organized by category. Find exactly what you need with ease.
          </motion.p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat, index) => (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/shop?category=${cat.slug}`} className="group block h-full">
                  <div className="relative h-full bg-white dark:bg-zinc-900 rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 p-8 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-2 overflow-hidden">
                    {/* Background Icon */}
                    <cat.icon className="absolute -bottom-8 -right-8 h-48 w-48 text-zinc-100 dark:text-zinc-800 transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-12" />
                    
                    <div className="relative z-10">
                      <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-white mb-6 shadow-lg`}>
                        <cat.icon className="h-7 w-7" />
                      </div>
                      <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-indigo-600 transition-colors">
                        {cat.name}
                      </h3>
                      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
                        {cat.description}
                      </p>
                      
                      <div className="flex items-center text-sm font-bold text-indigo-600 uppercase tracking-widest">
                        Browse Products
                        <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
