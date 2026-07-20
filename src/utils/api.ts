import axios from 'axios';

// Automatically detect if we are in production on Vercel
const isProduction = process.env.NODE_ENV === 'production' || process.env.VERCEL === '1';

// If the user set NEXT_PUBLIC_API_URL to "/api" in Vercel, we override it to "/express/api"
// to avoid conflicts with Next.js App Router (src/app/api).
let configuredUrl = process.env.NEXT_PUBLIC_API_URL;
if (isProduction && configuredUrl === '/api') {
  configuredUrl = '/express/api';
} else if (isProduction && !configuredUrl) {
  configuredUrl = '/express/api';
}

const api = axios.create({
  baseURL: configuredUrl 
    ? (configuredUrl.endsWith('/') ? configuredUrl : `${configuredUrl}/`)
    : (typeof window !== 'undefined' ? '/express/api/' : 'http://localhost:5000/api/'),
});

export default api;
