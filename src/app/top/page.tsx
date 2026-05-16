'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/product/ProductCard';
import { useEffect, useState } from 'react';
import api from '@/utils/api';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

export default function TopProductsPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTop = async () => {
      try {
        const { data } = await api.get('products');
        // Sort by ratings
        const sorted = [...data].sort((a, b) => b.ratings - a.ratings);
        setProducts(sorted.slice(0, 12));
      } catch (error) {
        console.error('Error fetching top products:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTop();
  }, []);

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center space-x-3 mb-12">
          <div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-2xl">
            <Trophy className="h-8 w-8 text-yellow-600" />
          </div>
          <div>
            <h1 className="text-4xl font-black text-zinc-900 dark:text-white tracking-tighter uppercase">Top Rated</h1>
            <p className="text-zinc-500 dark:text-zinc-400">Our highest-rated products as voted by the LoomPro community.</p>
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
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
