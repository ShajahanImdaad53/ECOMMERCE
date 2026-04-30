import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedProducts />
      
      {/* Category Section */}
      <section className="py-24 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-12 text-center">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Electronics', color: 'bg-blue-600' },
              { name: 'Fashion', color: 'bg-pink-600' },
              { name: 'Home', color: 'bg-emerald-600' },
              { name: 'Beauty', color: 'bg-amber-600' }
            ].map((cat) => (
              <div 
                key={cat.name}
                className="aspect-video relative rounded-2xl overflow-hidden group cursor-pointer"
              >
                <div className={`absolute inset-0 ${cat.color} opacity-80 group-hover:opacity-100 transition-opacity`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">{cat.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-600 rounded-3xl p-12 text-center relative overflow-hidden">
             <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
             <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-indigo-400/20 rounded-full blur-3xl" />
             
             <h2 className="text-3xl md:text-4xl font-bold text-white relative z-10">Get 20% Off Your First Order</h2>
             <p className="mt-4 text-indigo-100 relative z-10 max-w-xl mx-auto">
               Join our premium club and stay updated with the latest trends and exclusive offers.
             </p>
             <form className="mt-8 flex flex-col sm:flex-row gap-4 max-w-md mx-auto relative z-10">
               <input 
                 type="email" 
                 placeholder="Enter your email" 
                 className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-indigo-200 focus:outline-none focus:ring-2 focus:ring-white"
               />
               <button className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-full hover:bg-indigo-50 transition-colors">
                 Subscribe
               </button>
             </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
