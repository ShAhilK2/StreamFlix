// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebasekey = import.meta.env.VITE_FIREBASE_KEY;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: firebasekey,
  authDomain: "streamflixgpt-a6224.firebaseapp.com",
  projectId: "streamflixgpt-a6224",
  storageBucket: "streamflixgpt-a6224.firebasestorage.app",
  messagingSenderId: "388325876073",
  appId: "1:388325876073:web:c922e61d4f2d5ded5dddf8",
  measurementId: "G-WBQQZ1DSXF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();