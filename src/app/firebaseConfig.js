// src/firebaseConfig.js
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCc6uzO2462dPqTT28qbjPi0Uk9h-NqMYo",
  authDomain: "java-rebrand.firebaseapp.com",
  projectId: "java-rebrand",
  storageBucket: "java-rebrand.firebasestorage.app",
  messagingSenderId:"540743412710",
  appId:"1:540743412710:web:68a937817e6171b00b8427",
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
