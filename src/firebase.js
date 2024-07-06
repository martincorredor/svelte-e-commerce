import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBdMMxQsftbxp8PYqQTUoZIN0_9L8Wous",
  authDomain: "e-commerce-ac54c.firebaseapp.com",
  projectId: "e-commerce-ac54c",
  storageBucket: "e-commerce-ac54c.appspot.com",
  messagingSenderId: "70899057262",
  appId: "1:70899057262:web:029ac27f96e1f0d1289c7f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
