import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/Product';

dotenv.config();

const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/ecommerce';
mongoose.connect(mongoUri);

const products = [
  {
    name: 'Premium Cotton Sarong - Deep Burgundy',
    images: ['/images/handloom/sarong-1.jpeg'],
    description:
      'Handloom Cotton Puni Sarong - Deep Burgundy with White Royal Blue and Red Stripes. Authentic craftsmanship with a multi-color bottom border.',
    brand: 'LoomPro Artisans',
    category: 'Cotton',
    price: 45.00,
    stock: 15,
    ratings: 4.8,
    numReviews: 24,
  },
  {
    name: 'Artisanal Sarong - Aqua Blue & Charcoal',
    images: ['/images/handloom/sarong-2.jpeg'],
    description:
      'Handloom Cotton Sarong - Aqua Blue, Dark Charcoal Grey and White with Black Stripes. Lightweight and breathable for maximum comfort.',
    brand: 'LoomPro Artisans',
    category: 'Cotton',
    price: 38.00,
    stock: 20,
    ratings: 4.6,
    numReviews: 18,
  },
  {
    name: 'Traditional Sri Lankan Sarong - Beige',
    images: ['/images/handloom/sarong-5.jpeg'],
    description:
      'Classic Handloom Cotton Sarong in Beige with Dark Grey and Black Horizontal Stripes. A timeless piece for formal or casual wear.',
    brand: 'LoomPro Artisans',
    category: 'Traditional',
    price: 42.00,
    stock: 10,
    ratings: 4.9,
    numReviews: 32,
  },
  {
    name: 'The Galle Fort Dusk Sarong',
    images: ['/images/handloom/sarong-4.jpeg'],
    description:
      'Part of our Heritage Collection - The Galle Fort Dusk. Features intricate patterns inspired by the historical coastal architecture.',
    brand: 'Heritage Collection',
    category: 'Premium',
    price: 55.00,
    stock: 8,
    ratings: 5.0,
    numReviews: 15,
  },
  {
    name: 'Midnight Black Handloom Sarong',
    images: ['/images/handloom/sarong-10.jpeg'],
    description:
      'Handloom Cotton Sarong - Black and Dark Grey with Beige accents. Expertly woven with premium thread for a soft touch.',
    brand: 'LoomPro Artisans',
    category: 'Cotton',
    price: 40.00,
    stock: 12,
    ratings: 4.7,
    numReviews: 21,
  },
  {
    name: 'Sunset Citron Handloom Sarong',
    images: ['/images/handloom/sarong-15.jpeg'],
    description:
      'Vibrant Citron Yellow and Charcoal Grey with Teal highlights. A bold choice for the modern gentleman.',
    brand: 'LoomPro Artisans',
    category: 'Modern',
    price: 48.00,
    stock: 5,
    ratings: 4.5,
    numReviews: 10,
  },
];

const importData = async () => {
  try {
    await Product.deleteMany();
    await Product.insertMany(products);

    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

importData();
