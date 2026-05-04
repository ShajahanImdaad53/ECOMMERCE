'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    title: "Premium Handloom Collection",
    subtitle: "Authentic Sri Lankan Heritage",
    description: "Experience the comfort of pure cotton and silk, handcrafted by master artisans.",
    image: "/images/premium_hero_sarong.png",
    color: "from-orange-500 to-red-600",
    buttonText: "Shop Now"
  },
  {
    id: 2,
    title: "New Summer Arrivals",
    subtitle: "Vibrant & Breathable",
    description: "Stay cool this summer with our latest collection of lightweight handloom shirts.",
    image: "/images/shirt_1.png",
    color: "from-blue-500 to-indigo-600",
    buttonText: "Explore Collection"
  },
  {
    id: 3,
    title: "Exclusive Flash Sale",
    subtitle: "Limited Time Offer",
    description: "Get up to 50% off on selected handloom products. Hurry, while stocks last!",
    image: "/images/sarong_1.png",
    color: "from-purple-500 to-pink-600",
    buttonText: "Grab Deals"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden bg-zinc-100 dark:bg-zinc-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          {/* Background Image/Gradient */}
          <div className="absolute inset-0 z-0">
             <Image 
                src={SLIDES[currentSlide].image} 
                alt={SLIDES[currentSlide].title}
                fill
                className="object-contain md:object-cover opacity-80"
                priority
             />
             <div className={`absolute inset-0 bg-gradient-to-r ${SLIDES[currentSlide].color} opacity-40 mix-blend-multiply`} />
             <div className="absolute inset-0 bg-gradient-to-t from-zinc-100 via-transparent to-transparent dark:from-zinc-950" />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-xl">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded-full mb-4"
              >
                {SLIDES[currentSlide].subtitle}
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-white leading-tight mb-6"
              >
                {SLIDES[currentSlide].title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-zinc-700 dark:text-zinc-300 mb-8"
              >
                {SLIDES[currentSlide].description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  href="/shop"
                  className="inline-flex items-center px-8 py-4 bg-primary hover:bg-primary-hover text-white font-bold rounded-md transition-all transform hover:scale-105 active:scale-95 shadow-xl"
                >
                  {SLIDES[currentSlide].buttonText}
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 right-8 flex space-x-4 z-20">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md text-white transition-all"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-md text-white transition-all"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentSlide === index ? "w-8 bg-primary" : "w-2 bg-zinc-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
