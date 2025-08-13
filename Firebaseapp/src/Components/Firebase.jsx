import React from 'react'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcUfR3j8G0izZEdEDe_MDc-hhMCfDjJIY",
  authDomain: "ecom-217af.firebaseapp.com",
  projectId: "ecom-217af",
  storageBucket: "ecom-217af.firebasestorage.app",
  messagingSenderId: "466516908178",
  appId: "1:466516908178:web:f67471f0baccf905262e4b",
  measurementId: "G-EDRD1T70QS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
   