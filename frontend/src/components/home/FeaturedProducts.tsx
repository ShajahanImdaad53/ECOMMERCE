'use client';

import { motion } from 'framer-motion';
import ProductCard from '../product/ProductCard';

const MOCK_PRODUCTS = [
  {
    _id: '1',
    name: 'Airpods Wireless Bluetooth Headphones',
    price: 89.99,
    images: ['/images/airpods.jpg'],
    ratings: 4.5,
    category: 'Electronics',
  },
  {
    _id: '2',
    name: 'iPhone 13 Pro 256GB Memory',
    price: 599.99,
    images: ['/images/phone.jpg'],
    ratings: 4.0,
    category: 'Electronics',
  },
  {
    _id: '3',
    name: 'Cannon EOS 80D DSLR Camera',
    price: 929.99,
    images: ['/images/camera.jpg'],
    ratings: 3.5,
    category: 'Electronics',
  },
  {
    _id: '4',
    name: 'Sony Playstation 5 White Edition',
    price: 399.99,
    images: ['/images/playstation.jpg'],
    ratings: 5.0,
    category: 'Electronics',
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white">Featured Products</h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">Our hand-picked selections just for you.</p>
          </div>
          <button className="text-indigo-600 font-semibold hover:underline">View All</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {MOCK_PRODUCTS.map((product, index) => (
            <motion.div
              key={product._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
