'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/product/ProductCard';
import { useEffect, useState } from 'react';
import api from '@/utils/api';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function NewArrivalsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNew = async () => {
      try {
        const { data } = await api.get('/products');
        // Simulate new arrivals by taking the last 12 products
        setProducts(data.slice(-12).reverse());
      } catch (error) {
        console.error('Error fetching new arrivals:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchNew();
  }, []);

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center space-x-3 mb-12">
          <div className="p-3 bg-primary/10 rounded-2xl">
            <Sparkles className="h-8 w-8 text-primary" />
          </div>
          <div>
            <h1 className="text-4xl font-black text-zinc-900 dark:text-white tracking-tighter uppercase">New Arrivals</h1>
            <p className="text-zinc-500 dark:text-zinc-400">Discover the latest artisanal creations from LoomPro.</p>
          </div>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="aspect-[3/4] bg-zinc-100 dark:bg-zinc-900 animate-pulse rounded-2xl" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product._id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
