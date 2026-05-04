import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import productRoutes from './routes/productRoutes';
import authRoutes from './routes/authRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);
app.use('/api/auth', authRoutes);

// Basic Route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Database Connection
const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/ecommerce';
mongoose.connect(mongoUri)
  .then(() => {
    console.log('MongoDB Connected');
    if (process.env.NODE_ENV !== 'test' && !process.env.VERCEL) {
      app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
      });
    }
  })
  .catch((err) => {
    console.error('Database connection error:', err);
  });

export default app;
