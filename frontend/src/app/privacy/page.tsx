'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950">
      <Navbar />
      
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-black text-zinc-900 dark:text-white tracking-tighter uppercase mb-12">Privacy <span className="text-primary">Policy</span></h1>
          
          <div className="prose prose-zinc dark:prose-invert max-w-none space-y-12 text-zinc-600 dark:text-zinc-400">
            <section>
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">1. Data Collection</h2>
              <p>We collect information that you provide directly to us when you create an account, make a purchase, or communicate with us. This may include your name, email address, shipping address, and payment information.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">2. Use of Information</h2>
              <p>We use the information we collect to process your orders, provide customer support, and send you updates about our collections and special offers (if you have opted in to receive them).</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">3. Data Security</h2>
              <p>We implement a variety of security measures to maintain the safety of your personal information. Your sensitive data is encrypted and protected through secure connections.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">4. Cookies</h2>
              <p>We use cookies to enhance your browsing experience and analyze site traffic. You can choose to disable cookies through your browser settings, though some features of the site may not function properly.</p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
