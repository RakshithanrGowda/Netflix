// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbYjn2swVrLd5-JFOC9mnjNzVtSNa8uhc",
  authDomain: "netflixgpt-ad98e.firebaseapp.com",
  projectId: "netflixgpt-ad98e",
  storageBucket: "netflixgpt-ad98e.firebasestorage.app",
  messagingSenderId: "608235382369",
  appId: "1:608235382369:web:f0a2516e95d8741b706c20",
  measurementId: "G-QMG254DNDT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth();