'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useCartStore } from '@/store/useCartStore';
import Image from 'next/image';
import Link from 'next/link';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotalPrice } = useCartStore();

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8">Shopping Cart</h1>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-full mb-6">
              <ShoppingBag className="h-12 w-12 text-zinc-300 dark:text-zinc-700" />
            </div>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">Your cart is empty</h2>
            <p className="mt-2 text-zinc-500 max-w-sm">Looks like you haven&apos;t added anything to your cart yet. Explore our products and find something you love!</p>
            <Link 
              href="/" 
              className="mt-8 px-8 py-3 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition-colors"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <AnimatePresence>
                {items.map((item) => (
                  <motion.div
                    key={item._id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    className="flex items-center p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl"
                  >
                    <div className="h-24 w-24 relative rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 flex-shrink-0">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="ml-6 flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-semibold text-zinc-900 dark:text-white">{item.name}</h3>
                        <button 
                          onClick={() => removeItem(item._id)}
                          className="text-zinc-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                      <div className="mt-4 flex justify-between items-center">
                        <div className="flex items-center border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden">
                          <button 
                            onClick={() => updateQuantity(item._id, Math.max(1, item.quantity - 1))}
                            className="p-1 px-3 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="px-3 text-sm font-bold">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item._id, item.quantity + 1)}
                            className="p-1 px-3 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <span className="font-bold text-zinc-900 dark:text-white">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 sticky top-24">
                <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">Order Summary</h2>
                <div className="space-y-4">
                  <div className="flex justify-between text-zinc-600 dark:text-zinc-400">
                    <span>Subtotal</span>
                    <span className="font-semibold text-zinc-900 dark:text-white">${getTotalPrice().toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-zinc-600 dark:text-zinc-400">
                    <span>Shipping</span>
                    <span className="text-green-600 font-semibold">Free</span>
                  </div>
                  <div className="flex justify-between text-zinc-600 dark:text-zinc-400">
                    <span>Tax</span>
                    <span className="font-semibold text-zinc-900 dark:text-white">$0.00</span>
                  </div>
                  <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
                    <span className="text-lg font-bold text-zinc-900 dark:text-white">Total</span>
                    <span className="text-2xl font-bold text-indigo-600">${getTotalPrice().toFixed(2)}</span>
                  </div>
                </div>
                <button className="w-full mt-8 bg-indigo-600 text-white font-bold py-4 rounded-full flex items-center justify-center space-x-2 hover:bg-indigo-700 transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-indigo-500/25">
                  <span>Checkout</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
                <div className="mt-6 flex flex-col items-center space-y-4">
                  <p className="text-xs text-zinc-500">We accept major credit cards and PayPal</p>
                  <div className="flex space-x-2 grayscale opacity-50">
                    {/* Mock icons */}
                    <div className="w-8 h-5 bg-zinc-400 rounded-sm" />
                    <div className="w-8 h-5 bg-zinc-400 rounded-sm" />
                    <div className="w-8 h-5 bg-zinc-400 rounded-sm" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
