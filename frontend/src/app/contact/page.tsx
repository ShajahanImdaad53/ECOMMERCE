'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950">
      <Navbar />
      
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h1 className="text-5xl font-black text-zinc-900 dark:text-white tracking-tighter uppercase">Get in <span className="text-primary">Touch</span></h1>
            <p className="mt-4 text-zinc-500 max-w-xl mx-auto">Have questions about our collections or an order? Our team is here to help you.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              {[
                { icon: Mail, label: 'Email Us', value: 'support@loompro.lk', desc: 'Response within 24 hours' },
                { icon: Phone, label: 'Call Us', value: '+94 11 234 5678', desc: 'Mon - Fri, 9am - 6pm' },
                { icon: MapPin, label: 'Visit Showroom', value: '78 Artisans Lane, Colombo 07', desc: 'Sri Lanka' },
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-6">
                  <div className="p-4 bg-primary/10 rounded-2xl">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest">{item.label}</h3>
                    <p className="text-lg font-bold text-zinc-900 dark:text-white mt-1">{item.value}</p>
                    <p className="text-sm text-zinc-500">{item.desc}</p>
                  </div>
                </div>
              ))}

              <div className="pt-8">
                 <div className="bg-zinc-900 text-white p-8 rounded-[2.5rem] relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                      <MessageSquare className="h-24 w-24" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Live Chat</h3>
                    <p className="text-zinc-400 text-sm mb-6">Need immediate assistance? Our experts are available for live consultation.</p>
                    <button className="w-full py-3 bg-white text-zinc-900 font-bold rounded-xl hover:bg-primary hover:text-white transition-all">
                      Start Chat
                    </button>
                 </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[3rem] p-12">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-3">Full Name</label>
                  <input type="text" className="w-full px-6 py-4 bg-white dark:bg-zinc-800 border border-transparent rounded-2xl focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-3">Email Address</label>
                  <input type="email" className="w-full px-6 py-4 bg-white dark:bg-zinc-800 border border-transparent rounded-2xl focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="john@example.com" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-3">Subject</label>
                  <input type="text" className="w-full px-6 py-4 bg-white dark:bg-zinc-800 border border-transparent rounded-2xl focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="How can we help?" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs font-bold text-zinc-400 uppercase tracking-widest mb-3">Message</label>
                  <textarea rows={6} className="w-full px-6 py-4 bg-white dark:bg-zinc-800 border border-transparent rounded-2xl focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none" placeholder="Write your message here..."></textarea>
                </div>
                <div className="md:col-span-2">
                  <button className="w-full md:w-auto px-12 py-5 bg-primary text-white font-bold rounded-full shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center space-x-2">
                    <span>Send Message</span>
                    <Send className="h-5 w-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
