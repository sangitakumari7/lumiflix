// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkjLHLZADOUrQsY6J4kecSXeBRuKcwAeY",
  authDomain: "lumniflix-f5441.firebaseapp.com",
  projectId: "lumniflix-f5441",
  storageBucket: "lumniflix-f5441.firebasestorage.app",
  messagingSenderId: "16695702164",
  appId: "1:16695702164:web:0cb5a70d81ac3c01a33a81",
  measurementId: "G-QDHEXV30JP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();