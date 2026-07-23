import { NextResponse } from 'next/server';
import { products } from '../../../data/products';

// Helper to add mock IDs to fallback products
const getFallbackProducts = () => {
  return products.map((p, index) => ({
    ...p,
    _id: `fallback-${index}`
  }));
};

export async function GET() {
  return NextResponse.json(getFallbackProducts());
}
