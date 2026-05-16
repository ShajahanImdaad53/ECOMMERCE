'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Search, ChevronDown, Package, CreditCard, RotateCcw, Truck } from 'lucide-react';
import { useState } from 'react';

const FAQS = [
  { 
    category: 'Ordering', 
    icon: Package,
    questions: [
      { q: "How do I place an order?", a: "Browse our collections, add items to your cart, and proceed to checkout. You'll need to provide shipping details and choose a payment method." },
      { q: "Can I change my order after placing it?", a: "Orders can be modified within 2 hours of placement. Please contact our support team immediately with your order ID." }
    ]
  },
  { 
    category: 'Shipping', 
    icon: Truck,
    questions: [
      { q: "How long does shipping take?", a: "Standard delivery within Sri Lanka takes 2-4 business days. International shipping takes 7-14 business days depending on the destination." },
      { q: "Do you offer free shipping?", a: "Yes, we offer free standard shipping on all orders over Rs. 10,000 within Sri Lanka." }
    ]
  },
  { 
    category: 'Returns', 
    icon: RotateCcw,
    questions: [
      { q: "What is your return policy?", a: "We offer a 30-day return policy for unused items in their original packaging. Handloom items must have all tags attached." },
      { q: "How do I initiate a return?", a: "Visit your profile, go to 'My Orders', select the order you wish to return, and click 'Request Return'." }
    ]
  }
];

export default function HelpPage() {
  const [activeCategory, setActiveCategory] = useState(FAQS[0].category);

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950">
      <Navbar />
      
      {/* Search Header */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">How can we <span className="text-primary">help?</span></h1>
          <div className="mt-10 max-w-2xl mx-auto relative">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-6 w-6 text-zinc-500" />
            <input 
              type="text" 
              className="w-full pl-16 pr-8 py-6 bg-white dark:bg-zinc-800 rounded-2xl text-lg outline-none focus:ring-4 ring-primary/20 transition-all"
              placeholder="Search for answers..."
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1 space-y-4">
            {FAQS.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category)}
                className={`w-full flex items-center space-x-4 p-5 rounded-2xl font-bold transition-all ${
                  activeCategory === cat.category 
                    ? 'bg-primary text-white shadow-xl shadow-primary/20' 
                    : 'bg-zinc-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                }`}
              >
                <cat.icon className="h-5 w-5" />
                <span>{cat.category}</span>
              </button>
            ))}
          </div>

          {/* FAQ Content */}
          <div className="lg:col-span-3 space-y-8">
            <h2 className="text-3xl font-black text-zinc-900 dark:text-white mb-8">{activeCategory}</h2>
            <div className="space-y-6">
              {FAQS.find(c => c.category === activeCategory)?.questions.map((faq, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-zinc-50 dark:bg-zinc-900 rounded-3xl p-8 border border-zinc-100 dark:border-zinc-800"
                >
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-4">{faq.q}</h3>
                  <p className="text-zinc-500 leading-relaxed">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
