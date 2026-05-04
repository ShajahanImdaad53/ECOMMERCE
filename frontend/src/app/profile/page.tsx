'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { User, Settings, Package, Heart, LogOut, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function ProfilePage() {
  // Simulated user data
  const user = {
    name: 'Shajahan Imdaad',
    email: 'imdaa@example.com',
    memberSince: 'May 2026'
  };

  const menuItems = [
    { icon: Package, label: 'My Orders', desc: 'Track, return or buy things again', color: 'bg-blue-100 text-blue-600' },
    { icon: Heart, label: 'My Wishlist', desc: 'Save items you love for later', color: 'bg-rose-100 text-rose-600' },
    { icon: Settings, label: 'Account Settings', desc: 'Manage your profile and security', color: 'bg-zinc-100 text-zinc-600' },
  ];

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white dark:bg-zinc-900 rounded-3xl p-8 border border-zinc-200 dark:border-zinc-800 text-center"
            >
              <div className="w-24 h-24 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-black">
                {user.name.charAt(0)}
              </div>
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white">{user.name}</h2>
              <p className="text-sm text-zinc-500 mt-1">{user.email}</p>
              <div className="mt-6 pt-6 border-t border-zinc-100 dark:border-zinc-800">
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Member Since</span>
                <p className="text-sm font-bold text-zinc-900 dark:text-white mt-1">{user.memberSince}</p>
              </div>
            </motion.div>

            <button className="w-full flex items-center justify-center space-x-3 p-4 bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-bold rounded-2xl hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20 transition-all">
              <LogOut className="h-5 w-5" />
              <span>Sign Out</span>
            </button>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {menuItems.map((item, i) => (
                <Link key={i} href="#" className="group block p-8 bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 hover:shadow-xl transition-all hover:border-primary/20">
                  <div className={`p-4 rounded-2xl inline-block mb-6 ${item.color} group-hover:scale-110 transition-transform`}>
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white">{item.label}</h3>
                  <p className="text-sm text-zinc-500 mt-2">{item.desc}</p>
                </Link>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-zinc-900 rounded-[2.5rem] border border-zinc-200 dark:border-zinc-800 overflow-hidden"
            >
              <div className="px-10 py-8 border-b border-zinc-100 dark:border-zinc-800 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Recent Orders</h2>
                <Link href="#" className="text-sm font-bold text-primary hover:underline flex items-center">
                  View All <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="p-10 text-center py-24">
                <div className="p-6 bg-zinc-50 dark:bg-zinc-950 rounded-full inline-block mb-6">
                  <Package className="h-12 w-12 text-zinc-200 dark:text-zinc-800" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">No orders yet</h3>
                <p className="text-zinc-500 mt-2">You haven't placed any orders in the last 30 days.</p>
                <Link href="/" className="mt-8 inline-block px-10 py-4 bg-primary text-white font-bold rounded-full shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
                  Start Shopping
                </Link>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
