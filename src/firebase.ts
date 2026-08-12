// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlF6mhiYiGP-v3aA8V7t8WmO8LH4jD7uI",
  authDomain: "bookshelf-4f573.firebaseapp.com",
  projectId: "bookshelf-4f573",
  storageBucket: "bookshelf-4f573.firebasestorage.app",
  messagingSenderId: "595019564221",
  appId: "1:595019564221:web:fb6393a302c93ae14123d4",
  measurementId: "G-BYQHJGSBGY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);