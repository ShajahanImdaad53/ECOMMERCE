import { Request, Response } from 'express';
import Product from '../models/Product';
import mongoose from 'mongoose';
import { products as fallbackProducts } from '../data/products';

// Helper to add mock IDs to fallback products
const getFallbackProducts = () => {
  return fallbackProducts.map((p, index) => ({
    ...p,
    _id: `fallback-${index}`
  }));
};

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
export const getProducts = async (req: Request, res: Response) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      console.log('MongoDB not connected. Serving fallback products.');
      return res.json(getFallbackProducts());
    }
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error('Database connection error. Serving fallback products.');
    res.json(getFallbackProducts());
  }
};

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
export const getProductById = async (req: Request, res: Response) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      console.log('MongoDB not connected. Serving fallback product.');
      const allFallback = getFallbackProducts();
      const product = allFallback.find(p => p._id === req.params.id);
      if (product) {
        return res.json(product);
      } else {
        return res.status(404).json({ message: 'Product not found' });
      }
    }
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    const allFallback = getFallbackProducts();
    const product = allFallback.find(p => p._id === req.params.id);
    if (product) {
      return res.json(product);
    }
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc    Create a product (Admin only)
// @route   POST /api/products
// @access  Private/Admin
export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, price, description, images, brand, category, stock } = req.body;
    const product = new Product({
      name,
      price,
      description,
      images,
      brand,
      category,
      stock,
      user: (req as any).user._id,
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
