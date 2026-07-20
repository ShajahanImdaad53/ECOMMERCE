import { NextResponse } from 'next';
import { products } from '../../../../../backend/src/data/products';

const getFallbackProducts = () => {
  return products.map((p, index) => ({
    ...p,
    _id: `fallback-${index}`
  }));
};

export async function GET(request: Request, context: { params: Promise<{ id: string }> | { id: string } }) {
  const resolvedParams = await context.params;
  const id = resolvedParams.id;
  
  const allFallback = getFallbackProducts();
  const product = allFallback.find(p => p._id === id);

  if (product) {
    return NextResponse.json(product);
  }

  return NextResponse.json({ message: 'Product not found' }, { status: 404 });
}
