'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { RotateCcw, ShieldCheck, Truck, CreditCard } from 'lucide-react';

export default function ReturnsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950">
      <Navbar />
      
      <section className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="p-4 bg-primary/10 rounded-full inline-block mb-6">
            <RotateCcw className="h-10 w-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-white tracking-tighter uppercase">Easy <span className="text-primary">Returns</span></h1>
          <p className="mt-6 text-zinc-500 max-w-2xl mx-auto text-lg">
            We want you to love your handloom purchase. If you're not completely satisfied, we make returns simple and hassle-free.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-24">
        <div className="space-y-16">
          <section>
            <h2 className="text-2xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter mb-8">Return Policy</h2>
            <div className="prose prose-zinc dark:prose-invert max-w-none space-y-4 text-zinc-600 dark:text-zinc-400">
              <p>• Items must be returned within 30 days of delivery.</p>
              <p>• Products must be in original condition, unwashed, and unworn.</p>
              <p>• All original tags and packaging must be intact.</p>
              <p>• Handloom items require extra care; please ensure they are folded correctly to avoid permanent creasing.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-black text-zinc-900 dark:text-white uppercase tracking-tighter mb-8">How to Return</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: '01', title: 'Request', desc: 'Login to your account and initiate a return request from your order history.' },
                { step: '02', title: 'Pack', desc: 'Securely pack the items in original packaging with the return label provided.' },
                { step: '03', title: 'Ship', desc: 'Drop off the package at any of our authorized courier points.' },
              ].map((item, i) => (
                <div key={i} className="p-8 bg-zinc-50 dark:bg-zinc-900 rounded-[2rem] border border-zinc-100 dark:border-zinc-800">
                  <div className="text-3xl font-black text-primary/20 mb-4">{item.step}</div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-primary text-white p-12 rounded-[3rem] shadow-2xl shadow-primary/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 className="text-3xl font-black uppercase tracking-tighter mb-2">Need Help?</h2>
                <p className="text-white/80">Our support team is available 24/7 to assist with your returns.</p>
              </div>
              <button className="px-10 py-5 bg-white text-primary font-bold rounded-full hover:bg-zinc-100 transition-all">
                Contact Support
              </button>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
