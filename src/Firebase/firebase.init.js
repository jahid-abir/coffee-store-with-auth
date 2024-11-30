// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_1KVP8fnBfMIx6Kl12EVohdm8xWIt4OQ",
  authDomain: "coffee-store-2c898.firebaseapp.com",
  projectId: "coffee-store-2c898",
  storageBucket: "coffee-store-2c898.firebasestorage.app",
  messagingSenderId: "972243237280",
  appId: "1:972243237280:web:d0fca71b5b5ac6fa398cc5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);