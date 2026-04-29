import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzJhCktdLuyvF5nhzE0bjCXXfaZFq4anw",
  authDomain: "wedding-invitation-7d82c.firebaseapp.com",
  projectId: "wedding-invitation-7d82c",
  storageBucket: "wedding-invitation-7d82c.firebasestorage.app",
  messagingSenderId: "955782795165",
  appId: "1:955782795165:web:d088400194f4780ac86974",
  measurementId: "G-9Z7V1957DN"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
