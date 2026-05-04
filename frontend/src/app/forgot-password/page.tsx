'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, ArrowLeft, Send } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email });
    setIsSent(true);
  };

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-8 rounded-3xl shadow-xl"
        >
          {!isSent ? (
            <>
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">Reset Password</h1>
                <p className="mt-2 text-zinc-500">Enter your email and we'll send you a link to reset your password.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-zinc-400" />
                    </div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full pl-11 pr-4 py-3 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="name@example.com"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white font-bold py-4 rounded-xl flex items-center justify-center space-x-2 hover:bg-primary-hover transition-all active:scale-[0.98] shadow-lg shadow-primary/20"
                >
                  <span>Send Reset Link</span>
                  <Send className="h-5 w-5" />
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                 <Send className="h-10 w-10" />
              </div>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">Check Your Email</h2>
              <p className="mt-4 text-zinc-500">
                We've sent a password reset link to <span className="font-bold text-zinc-900 dark:text-white">{email}</span>.
              </p>
              <button 
                onClick={() => setIsSent(false)}
                className="mt-8 text-primary font-bold hover:underline"
              >
                Resend email
              </button>
            </div>
          )}

          <div className="mt-8 pt-8 border-t border-zinc-200 dark:border-zinc-800 text-center">
            <Link href="/login" className="inline-flex items-center text-sm font-bold text-zinc-600 dark:text-zinc-400 hover:text-primary transition-colors">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Sign In
            </Link>
          </div>
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
