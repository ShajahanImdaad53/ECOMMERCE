'use client';

import { motion } from 'framer-motion';
import ProductCard from '../product/ProductCard';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import api from '@/utils/api';
import { ChevronRight, Flame } from 'lucide-react';

export default function FeaturedProducts() {
  const [products, setProducts] = useState<any[]>([]); // eslint-disable-line @typescript-eslint/no-explicit-any
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get('products');
        const data = response.data;
        const productsData = Array.isArray(data) ? data : (data.products || []);
        // Add dummy discount for demo if not present
        const dataWithDiscounts = productsData.map((p: any) => ({
          ...p,
          discount: p.discount || Math.floor(Math.random() * 30) + 10
        }));
        setProducts(dataWithDiscounts);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return (
    <div className="py-24 text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-primary mx-auto"></div>
    </div>
  );

  return (
    <section className="py-20 bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Flash Sale Style */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 space-y-4 md:space-y-0">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Flame className="h-8 w-8 text-primary animate-pulse" />
            </div>
            <div>
              <h2 className="text-3xl font-black text-zinc-900 dark:text-white tracking-tighter">FLASH SALE</h2>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm">Grab them before they are gone!</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
             <div className="hidden sm:flex items-center space-x-2">
                <span className="text-xs font-bold text-zinc-400">Ending In:</span>
                <div className="flex space-x-1">
                  <span className="bg-zinc-800 text-white px-2 py-1 rounded text-xs font-bold">12</span>
                  <span className="text-zinc-800 dark:text-white font-bold">:</span>
                  <span className="bg-zinc-800 text-white px-2 py-1 rounded text-xs font-bold">45</span>
                  <span className="text-zinc-800 dark:text-white font-bold">:</span>
                  <span className="bg-zinc-800 text-white px-2 py-1 rounded text-xs font-bold">08</span>
                </div>
             </div>
             <Link href="/shop" className="flex items-center space-x-1 px-6 py-2 border-2 border-primary text-primary font-bold rounded-md hover:bg-primary hover:text-white transition-all group">
                <span>SHOP MORE</span>
                <ChevronRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
             </Link>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
          {products.slice(0, 6).map((product, index) => (
            <motion.div
              key={product._id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
