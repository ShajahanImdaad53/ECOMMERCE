import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-zinc-50 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link href="/shop" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-indigo-600">All Products</Link></li>
              <li><Link href="/categories/electronics" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-indigo-600">Electronics</Link></li>
              <li><Link href="/categories/fashion" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-indigo-600">Fashion</Link></li>
              <li><Link href="/categories/home" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-indigo-600">Home & Living</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-indigo-600">Contact Us</Link></li>
              <li><Link href="/faq" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-indigo-600">FAQ</Link></li>
              <li><Link href="/shipping" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-indigo-600">Shipping Info</Link></li>
              <li><Link href="/returns" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-indigo-600">Returns</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-indigo-600">About Us</Link></li>
              <li><Link href="/careers" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-indigo-600">Careers</Link></li>
              <li><Link href="/privacy" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-indigo-600">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-indigo-600">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider mb-4">Newsletter</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">Subscribe to get special offers and once-in-a-lifetime deals.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-3 py-2 text-sm border border-zinc-200 dark:border-zinc-800 rounded-l-md bg-white dark:bg-zinc-800 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
              <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-r-md hover:bg-indigo-700 transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800 text-center">
          <p className="text-sm text-zinc-500">&copy; {new Date().getFullYear()} PREMIUM E-Commerce. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
