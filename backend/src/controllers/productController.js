"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProduct = exports.getProductById = exports.getProducts = void 0;
const Product_1 = __importDefault(require("../models/Product"));
// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = async (req, res) => {
    try {
        const products = await Product_1.default.find({});
        res.json(products);
    }
    catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};
exports.getProducts = getProducts;
// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getProductById = async (req, res) => {
    try {
        const product = await Product_1.default.findById(req.params.id);
        if (product) {
            res.json(product);
        }
        else {
            res.status(404).json({ message: 'Product not found' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};
exports.getProductById = getProductById;
// @desc    Create a product (Admin only)
// @route   POST /api/products
// @access  Private/Admin
const createProduct = async (req, res) => {
    try {
        const { name, price, description, images, brand, category, stock } = req.body;
        const product = new Product_1.default({
            name,
            price,
            description,
            images,
            brand,
            category,
            stock,
            user: req.user._id,
        });
        const createdProduct = await product.save();
        res.status(201).json(createdProduct);
    }
    catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};
exports.createProduct = createProduct;
//# sourceMappingURL=productController.js.map