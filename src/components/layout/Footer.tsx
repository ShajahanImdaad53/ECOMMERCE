import Link from 'next/link';
import { Globe, Share2, MessageSquare, Play, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-100 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Customer Care */}
          <div>
            <h3 className="text-primary font-bold text-lg mb-6">Customer Care</h3>
            <ul className="space-y-3">
              <li><Link href="/help" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link href="/shop" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-primary transition-colors">How to Buy</Link></li>
              <li><Link href="/returns" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-primary transition-colors">Returns & Refunds</Link></li>
              <li><Link href="/contact" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/terms" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-primary transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* LoomPro */}
          <div>
            <h3 className="text-primary font-bold text-lg mb-6">LoomPro</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-primary transition-colors">About LoomPro</Link></li>
              <li><Link href="#" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-primary transition-colors">Digital Payments</Link></li>
              <li><Link href="#" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-primary transition-colors">LoomPro Donates</Link></li>
              <li><Link href="#" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-primary transition-colors">LoomPro Blog</Link></li>
              <li><Link href="#" className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-primary transition-colors">Join the LoomPro Affiliate Program</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-primary font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-sm text-zinc-600 dark:text-zinc-400">123 E-Commerce Ave, Digital City, 10100</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-sm text-zinc-600 dark:text-zinc-400">+94 11 234 5678</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-sm text-zinc-600 dark:text-zinc-400">support@loompro.lk</span>
              </li>
            </ul>
          </div>

          {/* Socials & Apps */}
          <div>
            <h3 className="text-primary font-bold text-lg mb-6">Follow Us</h3>
            <div className="flex space-x-4 mb-8">
              <Link href="#" className="p-2 bg-white dark:bg-zinc-900 rounded-full shadow-sm hover:text-primary transition-all hover:scale-110">
                <Globe className="h-5 w-5" />
              </Link>
              <Link href="#" className="p-2 bg-white dark:bg-zinc-900 rounded-full shadow-sm hover:text-primary transition-all hover:scale-110">
                <Share2 className="h-5 w-5" />
              </Link>
              <Link href="#" className="p-2 bg-white dark:bg-zinc-900 rounded-full shadow-sm hover:text-primary transition-all hover:scale-110">
                <MessageSquare className="h-5 w-5" />
              </Link>
              <Link href="#" className="p-2 bg-white dark:bg-zinc-900 rounded-full shadow-sm hover:text-primary transition-all hover:scale-110">
                <Play className="h-5 w-5" />
              </Link>
            </div>
            <h3 className="text-primary font-bold text-lg mb-4">Newsletter</h3>
            <div className="flex bg-white dark:bg-zinc-900 rounded-md overflow-hidden p-1 ring-1 ring-zinc-200 dark:ring-zinc-800 focus-within:ring-primary">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-1 px-3 py-2 text-sm bg-transparent outline-none"
              />
              <button className="bg-primary text-white px-4 py-2 text-sm font-bold rounded-md hover:bg-primary-hover transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-zinc-500 dark:text-zinc-500">
              © {new Date().getFullYear()} <span className="font-bold text-primary">LOOMPRO</span>. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" className="h-8 grayscale hover:grayscale-0 transition-all" />
              <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="Mastercard" className="h-8 grayscale hover:grayscale-0 transition-all" />
              <img src="https://img.icons8.com/color/48/000000/paypal.png" alt="Paypal" className="h-8 grayscale hover:grayscale-0 transition-all" />
              <img src="https://img.icons8.com/color/48/000000/amex.png" alt="Amex" className="h-8 grayscale hover:grayscale-0 transition-all" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

