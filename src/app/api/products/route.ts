import { NextResponse } from 'next';
import { products } from '../../../../backend/src/data/products';

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
