import { NextResponse } from 'next/server';
import { auth, db, hasFirebaseConfig } from '@/lib/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    if (hasFirebaseConfig) {
      // Use Firebase
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Fetch additional details from Firestore
      const userDoc = await getDoc(doc(db, "users", user.uid));
      const userData = userDoc.exists() ? userDoc.data() : {};

      return NextResponse.json({
        _id: user.uid,
        name: userData.name || "Customer",
        email,
        isAdmin: false,
        token: await user.getIdToken(),
        address: userData.address || "",
        phone: userData.phone || "",
        postalCode: userData.postalCode || ""
      });
    } else {
      // Mock LocalStorage Backend
      // This is a dummy response because we don't have a real DB if firebase is disabled.
      return NextResponse.json({
        _id: `mock-user-${Date.now()}`,
        name: "Demo Customer",
        email,
        isAdmin: false,
        token: `mock-token-${Date.now()}`,
        address: "123 Mock Street",
        phone: "+1234567890",
        postalCode: "10001"
      });
    }
  } catch (error: any) {
    console.error('Login Error:', error);
    return NextResponse.json(
      { message: error.message || 'Invalid email or password' },
      { status: 401 }
    );
  }
}
