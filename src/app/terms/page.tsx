'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950">
      <Navbar />
      
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-black text-zinc-900 dark:text-white tracking-tighter uppercase mb-12">Terms & <span className="text-primary">Conditions</span></h1>
          
          <div className="prose prose-zinc dark:prose-invert max-w-none space-y-12 text-zinc-600 dark:text-zinc-400">
            <section>
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">1. Introduction</h2>
              <p>Welcome to LoomPro. By accessing our website and purchasing our products, you agree to comply with and be bound by the following terms and conditions. Please read them carefully before using our services.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">2. Artisanal Nature of Products</h2>
              <p>Please note that all LoomPro products are handcrafted by artisans. Minor variations in weave, color, and texture are inherent characteristics of handloom products and should not be considered defects. These variations contribute to the unique beauty of each artisanal piece.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">3. Intellectual Property</h2>
              <p>All content included on this site, such as text, graphics, logos, images, and software, is the property of LoomPro or its content suppliers and is protected by international copyright laws.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">4. Limitation of Liability</h2>
              <p>LoomPro shall not be liable for any special or consequential damages that result from the use of, or the inability to use, the materials on this site or the performance of the products.</p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
