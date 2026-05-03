'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Star, ShoppingCart, Heart, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: {
    _id: string;
    name: string;
    price: number;
    images: string[];
    ratings: number;
    category: string;
    discount?: number;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const discountPrice = product.discount ? product.price * (1 - product.discount / 100) : product.price;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group bg-white dark:bg-zinc-900 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl border border-transparent hover:border-primary/20"
    >
      <Link href={`/product/${product._id}`}>
        <div className="relative aspect-[3/4] overflow-hidden bg-zinc-100 dark:bg-zinc-800">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Discount Badge */}
          {product.discount && (
            <div className="absolute top-2 left-2 bg-primary text-white text-[10px] font-black px-2 py-1 rounded flex items-center space-x-1">
              <Zap className="h-3 w-3 fill-current" />
              <span>-{product.discount}%</span>
            </div>
          )}

          {/* Wishlist Button */}
          <button className="absolute top-2 right-2 p-2 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-full text-zinc-400 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300">
            <Heart className="h-4 w-4" />
          </button>
        </div>
      </Link>

      <div className="p-4">
        <div className="text-[10px] font-bold text-primary uppercase tracking-tighter mb-1">{product.category}</div>
        <Link href={`/product/${product._id}`}>
          <h3 className="font-medium text-zinc-800 dark:text-zinc-200 line-clamp-2 leading-snug group-hover:text-primary transition-colors h-10">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex items-center mt-2 space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-3 w-3 ${i < Math.floor(product.ratings) ? 'text-orange-400 fill-orange-400' : 'text-zinc-300 dark:text-zinc-600'}`}
            />
          ))}
          <span className="text-[10px] text-zinc-500 ml-1">({product.ratings})</span>
        </div>

        <div className="mt-3 flex flex-col">
          <div className="flex items-baseline space-x-2">
            <span className="text-xl font-black text-primary">Rs. {discountPrice.toLocaleString()}</span>
            {product.discount && (
              <span className="text-xs text-zinc-400 line-through">Rs. {product.price.toLocaleString()}</span>
            )}
          </div>
          <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="w-full py-2 bg-primary text-white text-xs font-bold rounded hover:bg-primary-hover transition-colors flex items-center justify-center space-x-2">
              <ShoppingCart className="h-3 w-3" />
              <span>ADD TO CART</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
