// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC91HCd3HHiawFNPNhLxm0cG7JZ2766oVI",
  authDomain: "sanjanaa-portfolio.firebaseapp.com",
  projectId: "sanjanaa-portfolio",
  storageBucket: "sanjanaa-portfolio.firebasestorage.app",
  messagingSenderId: "134136493992",
  appId: "1:134136493992:web:1896441c377b6bee568f9d",
  measurementId: "G-VFSG60R36W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
