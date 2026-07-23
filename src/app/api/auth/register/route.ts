import { NextResponse } from 'next/server';
import { auth, db, hasFirebaseConfig } from '@/lib/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password, address, phone, postalCode } = body;

    if (!name || !email || !password) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    if (hasFirebaseConfig) {
      // Use Firebase
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save additional details to Firestore
      await setDoc(doc(db, "users", user.uid), {
        name,
        email,
        address: address || "",
        phone: phone || "",
        postalCode: postalCode || "",
        createdAt: new Date().toISOString()
      });

      return NextResponse.json({
        _id: user.uid,
        name,
        email,
        isAdmin: false,
        token: await user.getIdToken(),
        address,
        phone,
        postalCode
      });
    } else {
      // Mock LocalStorage Backend (in memory for this serverless function)
      // Since it's serverless, we just echo back the user data with a fake token.
      // The frontend Zustand store will persist it.
      return NextResponse.json({
        _id: `mock-user-${Date.now()}`,
        name,
        email,
        isAdmin: false,
        token: `mock-token-${Date.now()}`,
        address,
        phone,
        postalCode
      });
    }
  } catch (error: any) {
    console.error('Registration Error:', error);
    return NextResponse.json(
      { message: error.message || 'Registration failed' },
      { status: 500 }
    );
  }
}
