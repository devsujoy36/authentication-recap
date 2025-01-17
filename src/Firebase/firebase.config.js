// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqsuqJ0K6BIApyA_E826mi3i3uTx7tEhc",
  authDomain: "authentication-recap-36.firebaseapp.com",
  projectId: "authentication-recap-36",
  storageBucket: "authentication-recap-36.firebasestorage.app",
  messagingSenderId: "802769363339",
  appId: "1:802769363339:web:2d1c809791f6b7dedb4f8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app);

export default auth;