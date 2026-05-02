import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/Product';

dotenv.config();

const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/ecommerce';
mongoose.connect(mongoUri);

const products = [
  {
    name: 'Airpods Wireless Bluetooth Headphones',
    images: ['/images/airpods.png'],
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    category: 'Electronics',
    price: 89.99,
    stock: 10,
    ratings: 4.5,
    numReviews: 12,
  },
  {
    name: 'iPhone 13 Pro 256GB Memory',
    images: ['/images/phone.png'],
    description:
      'Introducing the iPhone 13 Pro. A dramatically more powerful camera system. A display so responsive, every interaction feels new again. The worlds fastest smartphone chip. Exceptional durability. And a huge leap in battery life.',
    brand: 'Apple',
    category: 'Electronics',
    price: 599.99,
    stock: 7,
    ratings: 4.0,
    numReviews: 8,
  },
  {
    name: 'Cannon EOS 80D DSLR Camera',
    images: ['/images/camera.png'],
    description:
      'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    brand: 'Cannon',
    category: 'Electronics',
    price: 929.99,
    stock: 5,
    ratings: 3,
    numReviews: 12,
  },
  {
    name: 'Sony Playstation 5 White Edition',
    images: ['/images/playstation.png'],
    description:
      'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music',
    brand: 'Sony',
    category: 'Electronics',
    price: 399.99,
    stock: 11,
    ratings: 5,
    numReviews: 12,
  },
  {
    name: 'Logitech G-Series Gaming Mouse',
    images: ['/images/mouse.jpg'],
    description:
      'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
    brand: 'Logitech',
    category: 'Electronics',
    price: 49.99,
    stock: 7,
    ratings: 3.5,
    numReviews: 10,
  },
  {
    name: 'Amazon Echo Dot 3rd Generation',
    images: ['/images/alexa.jpg'],
    description:
      'Meet Echo Dot - Our most popular voice-controlled speaker, now with a fabric design and improved speaker for richer and louder sound.',
    brand: 'Amazon',
    category: 'Electronics',
    price: 29.99,
    stock: 0,
    ratings: 4,
    numReviews: 12,
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
