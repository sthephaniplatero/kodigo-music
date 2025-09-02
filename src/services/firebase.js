import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAcPIHA-1YkTC673x3XCaSLLakYhviEbpY",
  authDomain: "kodigo-music-50cce.firebaseapp.com",
  projectId: "kodigo-music-50cce",
  storageBucket: "kodigo-music-50cce.firebasestorage.app",
  messagingSenderId: "405490558626",
  appId: "1:405490558626:web:675304d3a850c5339159fb"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);