'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useCartStore } from '@/store/useCartStore';
import { motion } from 'framer-motion';
import { ShieldCheck, CreditCard, Truck, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function CheckoutPage() {
  const { items, getTotalPrice } = useCartStore();
  const [step, setStep] = useState(1);

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center space-x-4 mb-12 overflow-x-auto pb-4">
          {[
            { n: 1, l: 'Shipping' },
            { n: 2, l: 'Payment' },
            { n: 3, l: 'Review' }
          ].map((s) => (
            <div key={s.n} className="flex items-center flex-shrink-0">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= s.n ? 'bg-primary text-white' : 'bg-zinc-200 text-zinc-500'}`}>
                {s.n}
              </div>
              <span className={`ml-3 font-bold ${step >= s.n ? 'text-zinc-900 dark:text-white' : 'text-zinc-400'}`}>{s.l}</span>
              {s.n < 3 && <div className="mx-6 w-12 h-px bg-zinc-200 dark:bg-zinc-800" />}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form Side */}
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-zinc-900 rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 p-10"
            >
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8 flex items-center">
                <Truck className="h-6 w-6 mr-3 text-primary" />
                Shipping Information
              </h2>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-1">
                  <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">First Name</label>
                  <input type="text" className="w-full px-5 py-4 bg-zinc-50 dark:bg-zinc-800 border border-transparent rounded-2xl focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                </div>
                <div className="md:col-span-1">
                  <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Last Name</label>
                  <input type="text" className="w-full px-5 py-4 bg-zinc-50 dark:bg-zinc-800 border border-transparent rounded-2xl focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Address</label>
                  <input type="text" className="w-full px-5 py-4 bg-zinc-50 dark:bg-zinc-800 border border-transparent rounded-2xl focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                </div>
                <div className="md:col-span-1">
                  <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">City</label>
                  <input type="text" className="w-full px-5 py-4 bg-zinc-50 dark:bg-zinc-800 border border-transparent rounded-2xl focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                </div>
                <div className="md:col-span-1">
                  <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-5 py-4 bg-zinc-50 dark:bg-zinc-800 border border-transparent rounded-2xl focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all" />
                </div>
              </form>
            </motion.div>

            <div className="flex justify-between items-center">
              <button className="text-sm font-bold text-zinc-500 hover:text-zinc-900 transition-colors">Return to Cart</button>
              <button className="px-12 py-5 bg-primary text-white font-bold rounded-full shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all flex items-center space-x-2">
                <span>Continue to Payment</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Summary Side */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-zinc-900 rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 p-8 sticky top-24">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">Order Summary</h3>
              <div className="space-y-4 max-h-[300px] overflow-y-auto mb-6 pr-2">
                {items.map((item) => (
                  <div key={item._id} className="flex items-center space-x-4">
                    <div className="h-16 w-16 bg-zinc-100 dark:bg-zinc-800 rounded-xl overflow-hidden flex-shrink-0">
                      <img src={item.image} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-zinc-900 dark:text-white line-clamp-1">{item.name}</p>
                      <p className="text-xs text-zinc-500">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-bold text-sm">Rs. {item.price * item.quantity}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-3 pt-6 border-t border-zinc-100 dark:border-zinc-800">
                <div className="flex justify-between text-zinc-500 text-sm">
                  <span>Subtotal</span>
                  <span className="font-bold text-zinc-900 dark:text-white">Rs. {getTotalPrice()}</span>
                </div>
                <div className="flex justify-between text-zinc-500 text-sm">
                  <span>Shipping</span>
                  <span className="text-green-600 font-bold">Calculated at next step</span>
                </div>
                <div className="flex justify-between text-xl font-black text-zinc-900 dark:text-white pt-4">
                  <span>Total</span>
                  <span className="text-primary">Rs. {getTotalPrice()}</span>
                </div>
              </div>
              <div className="mt-8 p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl flex items-start space-x-3">
                <ShieldCheck className="h-5 w-5 text-green-600 mt-0.5" />
                <p className="text-[10px] text-zinc-500 leading-relaxed uppercase font-bold tracking-widest">
                  Secure Checkout Guaranteed. Your data is encrypted and safe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
