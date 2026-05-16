'use client';

import Link from 'next/link';
import { ShoppingCart, User, Search, Menu, Sun, Moon, Bell, Globe } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCartStore } from '@/store/useCartStore';
import Image from 'next/image';
import { useAuthStore } from '@/store/useAuthStore';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItems = useCartStore((state) => state.items);
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const { user, logout } = useAuthStore();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <header className="w-full z-50">
      {/* Top Bar - LoomPro Style */}
      <div className="bg-primary py-1 px-4 text-white text-[11px] font-medium transition-colors">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="hidden sm:flex items-center space-x-4">
            <Link href="#" className="hover:text-zinc-200 transition-colors">SAVE MORE ON APP</Link>
            <Link href="#" className="hover:text-zinc-200 transition-colors">BECOME A SELLER</Link>
            <Link href="/help" className="hover:text-zinc-200 transition-colors">HELP & SUPPORT</Link>
          </div>
          <div className="flex items-center space-x-6 ml-auto sm:ml-0">
            <div className="flex items-center space-x-1 cursor-pointer hover:text-zinc-200 transition-colors">
              <Globe className="h-3 w-3" />
              <span>ENGLISH</span>
            </div>
            
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="font-bold uppercase tracking-tight">HI, {user.name.split(' ')[0]}</span>
                <button 
                  onClick={logout}
                  className="hover:text-zinc-200 font-bold uppercase cursor-pointer"
                >
                  LOGOUT
                </button>
              </div>
            ) : (
              <>
                <Link href="/login" className="hover:text-zinc-200 font-bold uppercase">LOGIN</Link>
                <Link href="/register" className="hover:text-zinc-200 font-bold uppercase">SIGNUP</Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="sticky top-0 w-full bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 space-x-8">
            
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center space-x-2 group">
              <div className="relative h-10 w-10 overflow-hidden transform group-hover:scale-110 transition-transform duration-300">
                <div className="absolute inset-0 bg-primary rounded-xl rotate-12 group-hover:rotate-45 transition-transform duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">D</div>
              </div>
              <span className="text-2xl font-black tracking-tighter text-primary dark:text-white">
                LOOM<span className="text-zinc-900 dark:text-primary">PRO</span>
              </span>
            </Link>

            {/* Search Bar - LoomPro Style */}
            <div className="hidden md:flex flex-1 items-center">
              <div className="flex w-full bg-zinc-100 dark:bg-zinc-900 rounded-md overflow-hidden group focus-within:ring-2 ring-primary/20 transition-all">
                <input
                  type="text"
                  className="flex-1 px-4 py-2.5 bg-transparent border-none focus:outline-none text-sm placeholder:text-zinc-400"
                  placeholder="Search in LoomPro..."
                />
                <button className="bg-primary hover:bg-primary-hover text-white px-6 py-2.5 transition-colors group-hover:px-8 duration-300">
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-6">
              {/* Theme Toggle */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors text-zinc-600 dark:text-zinc-400"
              >
                {theme === 'dark' ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
              </motion.button>

              {/* User Profile */}
              <Link href="/profile" className="hidden sm:flex items-center space-x-2 text-zinc-600 dark:text-zinc-400 hover:text-primary transition-colors">
                <div className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-900">
                  <User className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium">Account</span>
              </Link>

              {/* Cart */}
              <Link href="/cart" className="relative p-2 text-zinc-600 dark:text-zinc-400 hover:text-primary transition-colors group">
                <ShoppingCart className="h-7 w-7 transform group-hover:-rotate-12 transition-transform" />
                <AnimatePresence>
                  {cartCount > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute -top-1 -right-1 h-5 w-5 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center ring-2 ring-white dark:ring-zinc-950"
                    >
                      {cartCount}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 text-zinc-600 dark:text-zinc-400"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Categories Bar */}
        <div className="hidden md:block bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
          <div className="max-w-7xl mx-auto px-4 flex space-x-8 py-2 text-xs font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">
            <Link href="/categories" className="hover:text-primary transition-colors">Categories</Link>
            <Link href="/deals" className="hover:text-primary transition-colors">Flash Sale</Link>
            <Link href="/new" className="hover:text-primary transition-colors">New Arrivals</Link>
            <Link href="/top" className="hover:text-primary transition-colors">Top Products</Link>
            <Link href="/brands" className="hover:text-primary transition-colors">Brand Mall</Link>
          </div>
        </div>

        {/* Mobile Search & Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden bg-white dark:bg-zinc-950 px-4 pb-6 space-y-4"
            >
              <div className="pt-4">
                <div className="flex bg-zinc-100 dark:bg-zinc-900 rounded-md overflow-hidden">
                  <input
                    type="text"
                    className="flex-1 px-4 py-2 bg-transparent focus:outline-none text-sm"
                    placeholder="Search in LoomPro..."
                  />
                  <button className="bg-primary text-white px-4 py-2">
                    <Search className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Link href="/shop" className="p-4 bg-zinc-100 dark:bg-zinc-900 rounded-xl text-center font-bold">SHOP</Link>
                <Link href="/categories" className="p-4 bg-zinc-100 dark:bg-zinc-900 rounded-xl text-center font-bold">CATEGORIES</Link>
                <Link href="/deals" className="p-4 bg-zinc-100 dark:bg-zinc-900 rounded-xl text-center font-bold">DEALS</Link>
                <Link href="/profile" className="p-4 bg-zinc-100 dark:bg-zinc-900 rounded-xl text-center font-bold">PROFILE</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

