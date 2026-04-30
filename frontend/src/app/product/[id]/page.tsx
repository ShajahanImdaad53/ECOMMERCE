'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { Star, ShoppingCart, ArrowLeft, Heart, Shield, Truck, RotateCcw } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useCartStore } from '@/store/useCartStore';
import { useState } from 'react';

// Mock data for a single product (in real app, fetch from API)
const PRODUCT = {
  _id: '1',
  name: 'Airpods Wireless Bluetooth Headphones',
  description: 'Bluetooth technology lets you connect it with compatible devices wirelessly. High-quality AAC audio offers immersive listening experience. Built-in microphone allows you to take calls while working.',
  price: 89.99,
  images: ['/images/airpods.jpg'],
  ratings: 4.5,
  numReviews: 12,
  brand: 'Apple',
  category: 'Electronics',
  stock: 10,
};

export default function ProductDetails() {
  const { id } = useParams();
  const addItem = useCartStore((state) => state.addItem);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addItem({
      _id: PRODUCT._id,
      name: PRODUCT.name,
      price: PRODUCT.price,
      image: PRODUCT.images[0],
      quantity: quantity,
    });
  };

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/" className="flex items-center text-sm text-zinc-500 hover:text-indigo-600 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Results
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="aspect-square relative rounded-3xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
              <Image
                src={PRODUCT.images[0]}
                alt={PRODUCT.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {/* Thumbnail placeholders */}
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square relative rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 cursor-pointer hover:border-indigo-600 transition-colors">
                   <Image src={PRODUCT.images[0]} alt="" fill className="object-cover opacity-50" />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <span className="text-indigo-600 font-bold uppercase tracking-widest text-sm">{PRODUCT.brand}</span>
            <h1 className="text-4xl font-extrabold text-zinc-900 dark:text-white mt-2">{PRODUCT.name}</h1>
            
            <div className="flex items-center mt-4 space-x-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < Math.floor(PRODUCT.ratings) ? 'text-yellow-400 fill-yellow-400' : 'text-zinc-300 dark:text-zinc-700'}`}
                  />
                ))}
                <span className="ml-2 text-sm font-medium text-zinc-900 dark:text-white">{PRODUCT.ratings}</span>
              </div>
              <span className="text-zinc-300 dark:text-zinc-700">|</span>
              <span className="text-sm text-zinc-500">{PRODUCT.numReviews} Reviews</span>
            </div>

            <div className="mt-8 flex items-end space-x-4">
              <span className="text-4xl font-bold text-zinc-900 dark:text-white">${PRODUCT.price}</span>
              <span className="text-xl text-zinc-400 line-through mb-1">${(PRODUCT.price * 1.2).toFixed(2)}</span>
              <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold px-2 py-1 rounded-full mb-2">20% OFF</span>
            </div>

            <p className="mt-6 text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {PRODUCT.description}
            </p>

            <div className="mt-8">
              <div className="flex items-center space-x-4">
                 <div className="flex items-center border border-zinc-200 dark:border-zinc-800 rounded-full overflow-hidden">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                    >
                      -
                    </button>
                    <span className="px-4 font-bold">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(Math.min(PRODUCT.stock, quantity + 1))}
                      className="px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                    >
                      +
                    </button>
                 </div>
                 <span className="text-sm text-zinc-500">{PRODUCT.stock} items available</span>
              </div>
            </div>

            <div className="mt-8 flex space-x-4">
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold py-4 rounded-full flex items-center justify-center space-x-2 hover:bg-indigo-600 dark:hover:bg-indigo-600 dark:hover:text-white transition-all active:scale-95"
              >
                <ShoppingCart className="h-5 w-5" />
                <span>Add to Cart</span>
              </button>
              <button className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-full hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
                <Heart className="h-6 w-6 text-zinc-400 hover:text-red-500 transition-colors" />
              </button>
            </div>

            {/* Features */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-zinc-100 dark:border-zinc-900 pt-8">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-zinc-50 dark:bg-zinc-900 rounded-2xl mb-3">
                  <Truck className="h-5 w-5 text-indigo-600" />
                </div>
                <span className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider">Free Shipping</span>
                <span className="text-[10px] text-zinc-500 mt-1">On orders over $100</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-zinc-50 dark:bg-zinc-900 rounded-2xl mb-3">
                  <RotateCcw className="h-5 w-5 text-indigo-600" />
                </div>
                <span className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider">30 Days Return</span>
                <span className="text-[10px] text-zinc-500 mt-1">Hassle free returns</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-zinc-50 dark:bg-zinc-900 rounded-2xl mb-3">
                  <Shield className="h-5 w-5 text-indigo-600" />
                </div>
                <span className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-wider">Secure Payment</span>
                <span className="text-[10px] text-zinc-500 mt-1">100% Secure Transaction</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
