// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUqOQbtruBfwkg44aShLhsbDrl1KTZFKI",
  authDomain: "contact-form-app-e8de0.firebaseapp.com",
  projectId: "contact-form-app-e8de0",
  storageBucket: "contact-form-app-e8de0.firebasestorage.app",
  messagingSenderId: "4007974686",
  appId: "1:4007974686:web:561f32ddbc10854f629b0f",
  measurementId: "G-N40PHBB5DT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);