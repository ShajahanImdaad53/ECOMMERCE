'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductCard from '@/components/product/ProductCard';
import { useEffect, useState } from 'react';
import api from '@/utils/api';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, SlidersHorizontal, Search, ChevronDown } from 'lucide-react';

export default function ShopPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('newest');

  const categories = ['All', 'Sarongs', 'Shirts', 'Silk', 'Cotton', 'Accessories'];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await api.get('products');
        const productsData = Array.isArray(data) ? data : (data.products || []);
        setProducts(productsData);
        setFilteredProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    let result = products;

    // Filter by search
    if (searchQuery) {
      result = result.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase());
    }

    // Sort
    if (sortBy === 'price-low') result = [...result].sort((a, b) => a.price - b.price);
    if (sortBy === 'price-high') result = [...result].sort((a, b) => b.price - a.price);
    if (sortBy === 'ratings') result = [...result].sort((a, b) => b.ratings - a.ratings);

    setFilteredProducts(result);
  }, [searchQuery, selectedCategory, sortBy, products]);

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950">
      <Navbar />
      
      {/* Header */}
      <section className="bg-zinc-50 dark:bg-zinc-900/50 py-16 border-b border-zinc-100 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tighter uppercase">Shop Collection</h1>
          <p className="mt-4 text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto">Explore our full range of handcrafted handloom excellence.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat 
                    ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                    : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-zinc-100 dark:bg-zinc-900 border-none rounded-xl px-6 py-3 pr-10 text-xs font-bold focus:ring-2 focus:ring-primary/20 outline-none cursor-pointer"
              >
                <option value="newest">Newest First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="ratings">Highest Rated</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-sm text-zinc-500">Showing <span className="font-bold text-zinc-900 dark:text-white">{filteredProducts.length}</span> products</p>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="aspect-[3/4] bg-zinc-100 dark:bg-zinc-900 animate-pulse rounded-2xl" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product._id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {filteredProducts.length === 0 && !loading && (
          <div className="py-24 text-center">
            <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-full inline-block mb-6">
              <Search className="h-12 w-12 text-zinc-300 dark:text-zinc-700" />
            </div>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">No products found</h2>
            <p className="text-zinc-500 mt-2">Try adjusting your filters or search query.</p>
            <button 
              onClick={() => {setSelectedCategory('All'); setSearchQuery('');}}
              className="mt-8 text-primary font-bold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
