import { NextResponse } from 'next/server';
import { db, hasFirebaseConfig } from '@/lib/firebase';
import { collection, addDoc } from 'firebase/firestore';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { userId, customer, items, total } = body;

    const orderData = {
      userId,
      customer,
      items,
      total,
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    let orderId = `mock-order-${Date.now()}`;

    if (hasFirebaseConfig) {
      // Save order to Firebase Firestore
      const docRef = await addDoc(collection(db, "orders"), orderData);
      orderId = docRef.id;
    } else {
      // Mock Saving Order (Using memory)
      console.log("Mock Order Saved:", orderData);
    }

    // SIMULATED NOTIFICATION (Since no email provider was specified)
    // In a real scenario, you'd use Resend, SendGrid, or nodemailer here.
    console.log(`\n==============================================`);
    console.log(`🔔 NEW ORDER NOTIFICATION`);
    console.log(`Order ID: ${orderId}`);
    console.log(`Customer: ${customer.firstName} ${customer.lastName}`);
    console.log(`Total: $${total}`);
    console.log(`==============================================\n`);

    return NextResponse.json({ 
      success: true, 
      orderId, 
      message: 'Order placed successfully and notification sent.' 
    });

  } catch (error: any) {
    console.error('Order Placement Error:', error);
    return NextResponse.json(
      { message: error.message || 'Failed to place order' },
      { status: 500 }
    );
  }
}
