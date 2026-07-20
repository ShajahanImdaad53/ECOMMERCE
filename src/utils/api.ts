import axios from 'axios';

// Use the native Next.js API route (/api) when on Vercel since we moved 
// the product fetcher to src/app/api/products
const isProduction = process.env.NODE_ENV === 'production' || process.env.VERCEL === '1';

const api = axios.create({
  baseURL: isProduction ? '/api/' : 'http://localhost:5000/api/',
});

export default api;
