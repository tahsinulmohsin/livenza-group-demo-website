import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAmGmoYwacokx38PcH82XgZaW90bj2GZzU",
  authDomain: "livenza-web.firebaseapp.com",
  projectId: "livenza-web",
  storageBucket: "livenza-web.firebasestorage.app",
  messagingSenderId: "557093567261",
  appId: "1:557093567261:web:56b80d92b875dd00747ff4",
  measurementId: "G-1NHQEJMV60"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
