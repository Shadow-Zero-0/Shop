// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDwYNmnNWrz9H7fO-PaqZvjMZRS4sLyK4",
  authDomain: "shop-da864.firebaseapp.com",
  projectId: "shop-da864",
  storageBucket: "shop-da864.firebasestorage.app",
  messagingSenderId: "767694778737",
  appId: "1:767694778737:web:15672ab04999c138b6c6d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);