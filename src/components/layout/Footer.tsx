import Link from 'next/link';
import { Globe, Share2, MessageSquare, Play, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import * as motion from 'framer-motion/client';

export default function Footer() {
  return (
    <footer className="relative bg-zinc-950 border-t border-zinc-800 pt-20 pb-8 overflow-hidden text-zinc-100">
      
      {/* Dynamic Colorful Background Effects */}
      <motion.div 
        animate={{ x: [-20, 20, -20], y: [-20, 20, -20] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10"
      />
      <motion.div 
        animate={{ x: [20, -20, 20], y: [20, -20, 20] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Customer Care */}
          <div className="space-y-6">
            <h3 className="text-xl font-black bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">Customer Care</h3>
            <ul className="space-y-4">
              {['Help Center', 'How to Buy', 'Returns & Refunds', 'Contact Us', 'Terms & Conditions'].map((item, i) => (
                <motion.li key={i} whileHover={{ x: 5, color: '#f85606' }} transition={{ type: 'spring', stiffness: 300 }}>
                  <Link href="#" className="text-sm text-zinc-400 hover:text-primary transition-colors flex items-center group">
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* LoomPro */}
          <div className="space-y-6">
            <h3 className="text-xl font-black bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">LoomPro</h3>
            <ul className="space-y-4">
              {['About LoomPro', 'Digital Payments', 'LoomPro Donates', 'LoomPro Blog', 'Affiliate Program'].map((item, i) => (
                <motion.li key={i} whileHover={{ x: 5, color: '#f85606' }} transition={{ type: 'spring', stiffness: 300 }}>
                  <Link href="#" className="text-sm text-zinc-400 hover:text-primary transition-colors flex items-center group">
                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-black bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">Contact Us</h3>
            <ul className="space-y-5">
              <motion.li whileHover={{ scale: 1.05 }} className="flex items-start space-x-4 p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors cursor-default">
                <MapPin className="h-6 w-6 text-primary mt-0.5" />
                <span className="text-sm text-zinc-300">123 E-Commerce Ave, Digital City, 10100</span>
              </motion.li>
              <motion.li whileHover={{ scale: 1.05 }} className="flex items-center space-x-4 p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors cursor-pointer">
                <Phone className="h-6 w-6 text-primary" />
                <span className="text-sm text-zinc-300">+94 11 234 5678</span>
              </motion.li>
              <motion.li whileHover={{ scale: 1.05 }} className="flex items-center space-x-4 p-3 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors cursor-pointer">
                <Mail className="h-6 w-6 text-primary" />
                <span className="text-sm text-zinc-300">support@loompro.lk</span>
              </motion.li>
            </ul>
          </div>

          {/* Socials & Apps */}
          <div className="space-y-6">
            <h3 className="text-xl font-black bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">Follow Us</h3>
            <div className="flex space-x-4">
              {[Globe, Share2, MessageSquare, Play].map((Icon, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.2, rotate: 10, backgroundColor: '#f85606', color: '#ffffff' }}
                  className="p-3 bg-white/10 rounded-2xl text-zinc-300 cursor-pointer border border-white/5 transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </motion.div>
              ))}
            </div>
            
            <div className="pt-6">
              <h3 className="text-xl font-black bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent mb-4">Newsletter</h3>
              <div className="flex bg-white/5 rounded-2xl overflow-hidden p-1.5 border border-white/10 focus-within:border-primary/50 transition-colors group">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 px-4 py-2 text-sm bg-transparent outline-none text-white placeholder:text-zinc-500"
                />
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary text-white px-6 py-2 text-sm font-bold rounded-xl shadow-lg shadow-primary/25 hover:bg-primary-hover transition-colors"
                >
                  Join
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-sm text-zinc-500 flex items-center">
              © {new Date().getFullYear()} <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400 mx-2 text-lg">LOOMPRO</span> All rights reserved.
            </div>
            <div className="flex items-center space-x-4">
              {['visa', 'mastercard', 'paypal', 'amex'].map((card, i) => (
                <motion.img 
                  key={i}
                  whileHover={{ scale: 1.1, filter: 'grayscale(0%)' }}
                  src={`https://img.icons8.com/color/48/000000/${card}.png`} 
                  alt={card} 
                  className="h-8 grayscale opacity-70 transition-all cursor-pointer bg-white/10 p-1 rounded-md" 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
