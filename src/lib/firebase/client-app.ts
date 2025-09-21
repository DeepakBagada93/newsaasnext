// src/lib/firebase/client-app.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyByof-c2eRM9fLv-h1M6ilo9xgy_HvEOLg",
  authDomain: "artechway-96129.firebaseapp.com",
  projectId: "artechway-96129",
  storageBucket: "artechway-96129.firebasestorage.app",
  messagingSenderId: "135768450224",
  appId: "1:135768450224:web:dee7d1d721725e6f700775",
  measurementId: "G-56C56MPN1D"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { app, auth };
