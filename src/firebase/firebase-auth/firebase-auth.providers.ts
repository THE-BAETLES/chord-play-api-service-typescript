import { initializeApp } from 'firebase-admin';
import { applicationDefault } from 'firebase-admin/app';

export const firebaseAuthProvider = [
  {
    provide: 'FIREBASE_AUTH',
    useValue: initializeApp({
      credential: applicationDefault(),
    }).auth,
  },
];
