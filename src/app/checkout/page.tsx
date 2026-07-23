'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useCartStore } from '@/store/useCartStore';
import { useAuthStore } from '@/store/useAuthStore';
import { motion } from 'framer-motion';
import { ShieldCheck, Truck, ArrowRight, Loader2, AlertCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import api from '@/utils/api';

export default function CheckoutPage() {
  const { items, getTotalPrice, clearCart } = useCartStore();
  const { user } = useAuthStore();
  const router = useRouter();
  
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  // Pre-fill form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    phone: '',
    postalCode: ''
  });

  useEffect(() => {
    if (user) {
      const names = user.name.split(' ');
      setFormData({
        firstName: names[0] || '',
        lastName: names.slice(1).join(' ') || '',
        address: user.address || '',
        city: '',
        phone: user.phone || '',
        postalCode: user.postalCode || ''
      });
    }
  }, [user]);

  if (!user) {
    return (
      <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
        <Navbar />
        <div className="max-w-3xl mx-auto px-4 py-24 text-center">
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-12 shadow-xl border border-zinc-200 dark:border-zinc-800">
            <AlertCircle className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-black text-zinc-900 dark:text-white mb-4">LOGIN REQUIRED</h2>
            <p className="text-zinc-500 mb-8 font-medium">You must be logged in to place an order. This ensures we can notify you and track your shipment securely.</p>
            <div className="flex justify-center space-x-4">
              <Link href="/login" className="px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-primary-hover transition-colors">
                SIGN IN
              </Link>
              <Link href="/register" className="px-8 py-4 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white font-bold rounded-xl hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors">
                CREATE ACCOUNT
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (items.length === 0) return;
    
    setLoading(true);
    try {
      // Mock API call to place order
      await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: user._id,
          customer: formData,
          items,
          total: getTotalPrice()
        })
      });
      setSuccess(true);
      clearCart();
    } catch (error) {
      console.error('Failed to place order:', error);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
        <Navbar />
        <div className="max-w-3xl mx-auto px-4 py-24 text-center">
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white dark:bg-zinc-900 rounded-3xl p-12 shadow-xl border border-zinc-200 dark:border-zinc-800">
            <ShieldCheck className="h-20 w-20 text-green-500 mx-auto mb-6" />
            <h2 className="text-4xl font-black text-zinc-900 dark:text-white mb-4 uppercase">Order Confirmed!</h2>
            <p className="text-zinc-500 mb-8 font-medium text-lg">Thank you {formData.firstName}! We've received your order and sent a notification.</p>
            <Link href="/" className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary-hover transition-colors">
              CONTINUE SHOPPING
            </Link>
          </motion.div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center space-x-4 mb-12 overflow-x-auto pb-4">
          {[
            { n: 1, l: 'Shipping' },
            { n: 2, l: 'Review & Pay' }
          ].map((s) => (
            <div key={s.n} className="flex items-center flex-shrink-0">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= s.n ? 'bg-primary text-white' : 'bg-zinc-200 text-zinc-500'}`}>
                {s.n}
              </div>
              <span className={`ml-3 font-bold ${step >= s.n ? 'text-zinc-900 dark:text-white' : 'text-zinc-400'}`}>{s.l}</span>
              {s.n < 2 && <div className="mx-6 w-12 h-px bg-zinc-200 dark:bg-zinc-800" />}
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
              <form id="checkout-form" onSubmit={handlePlaceOrder} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-1">
                  <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">First Name</label>
                  <input type="text" value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} required className="w-full px-5 py-4 bg-zinc-50 dark:bg-zinc-800 border border-transparent rounded-2xl focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all font-bold" />
                </div>
                <div className="md:col-span-1">
                  <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Last Name</label>
                  <input type="text" value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})} required className="w-full px-5 py-4 bg-zinc-50 dark:bg-zinc-800 border border-transparent rounded-2xl focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all font-bold" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Address</label>
                  <input type="text" value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} required className="w-full px-5 py-4 bg-zinc-50 dark:bg-zinc-800 border border-transparent rounded-2xl focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all font-bold" />
                </div>
                <div className="md:col-span-1">
                  <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">City</label>
                  <input type="text" value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} required className="w-full px-5 py-4 bg-zinc-50 dark:bg-zinc-800 border border-transparent rounded-2xl focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all font-bold" />
                </div>
                <div className="md:col-span-1">
                  <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-2">Phone Number / Postal Code</label>
                  <div className="flex space-x-2">
                     <input type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} required className="w-2/3 px-5 py-4 bg-zinc-50 dark:bg-zinc-800 border border-transparent rounded-2xl focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all font-bold" />
                     <input type="text" value={formData.postalCode} onChange={e => setFormData({...formData, postalCode: e.target.value})} required className="w-1/3 px-5 py-4 bg-zinc-50 dark:bg-zinc-800 border border-transparent rounded-2xl focus:bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all font-bold text-center" />
                  </div>
                </div>
              </form>
            </motion.div>

            <div className="flex justify-between items-center">
              <Link href="/cart" className="text-sm font-bold text-zinc-500 hover:text-zinc-900 transition-colors">Return to Cart</Link>
              <button type="submit" form="checkout-form" disabled={loading} className="px-12 py-5 bg-primary text-white font-black rounded-full shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center space-x-2 disabled:opacity-50">
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <><span>PLACE ORDER</span><ArrowRight className="h-5 w-5" /></>}
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
                    <p className="font-bold text-sm">${item.price * item.quantity}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-3 pt-6 border-t border-zinc-100 dark:border-zinc-800">
                <div className="flex justify-between text-zinc-500 text-sm">
                  <span>Subtotal</span>
                  <span className="font-bold text-zinc-900 dark:text-white">${getTotalPrice()}</span>
                </div>
                <div className="flex justify-between text-zinc-500 text-sm">
                  <span>Shipping</span>
                  <span className="text-green-600 font-bold">Free</span>
                </div>
                <div className="flex justify-between text-xl font-black text-zinc-900 dark:text-white pt-4">
                  <span>Total</span>
                  <span className="text-primary">${getTotalPrice()}</span>
                </div>
              </div>
              <div className="mt-8 p-4 bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl flex items-start space-x-3">
                <ShieldCheck className="h-5 w-5 text-green-600 mt-0.5" />
                <p className="text-[10px] text-zinc-500 leading-relaxed uppercase font-bold tracking-widest">
                  Secure Checkout Guaranteed. Your data is encrypted and safe. Payment collected on delivery for testing.
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
