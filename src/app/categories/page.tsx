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
    image: '/images/categories/category_silk_1784771541606.jpg'
  },
  {
    name: 'Cotton Sarongs',
    slug: 'cotton',
    description: 'Breathable and soft traditional cotton sarongs.',
    icon: Smartphone,
    image: '/images/categories/category_cotton_1784771561172.jpg'
  },
  {
    name: 'Traditional Wear',
    slug: 'traditional',
    description: 'Heritage designs preserved through generations.',
    icon: Home,
    image: '/images/categories/category_traditional_1784771580927.jpg'
  },
  {
    name: 'Premium Edition',
    slug: 'premium',
    description: 'Limited edition masterpieces from master weavers.',
    icon: Watch,
    image: '/images/categories/category_premium_1784771597998.jpg'
  },
];

export default function CategoriesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950">
      <Navbar />
      
      {/* Header */}
      <section className="bg-zinc-950 py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-zinc-950 to-zinc-950 opacity-80" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-tight"
          >
            EXPLORE <span className="text-primary italic">CATEGORIES</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-8 text-zinc-400 max-w-2xl mx-auto text-xl font-medium"
          >
            Discover our wide range of premium products organized by category. Find exactly what you need with ease. Elevated luxury for your lifestyle.
          </motion.p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {categories.map((cat, index) => (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              >
                <Link href={`/shop?category=${cat.slug}`} className="group relative block h-[32rem] rounded-[2.5rem] overflow-hidden cursor-pointer shadow-2xl shadow-zinc-900/20">
                  <Image 
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                  
                  <div className="absolute inset-0 p-12 flex flex-col justify-end text-white relative z-10">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className={`h-16 w-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white mb-6 border border-white/20`}>
                        <cat.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-4xl font-black tracking-tight">{cat.name}</h3>
                      <p className="text-zinc-300 mt-3 font-medium text-lg">{cat.description}</p>
                    </div>
                    
                    <div className="mt-8 flex items-center space-x-3 text-sm font-black uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-all translate-y-8 group-hover:translate-y-0 duration-500 delay-75">
                      <span>Browse Products</span>
                      <ChevronRight className="h-5 w-5" />
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
