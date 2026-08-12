// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Собираем конфигурацию из безопасных переменных окружения
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Инициализируем приложение Firebase
const FBapp = initializeApp(firebaseConfig);

// Экспортируем готовые сервисы для использования в компонентах React
export const auth = getAuth(FBapp); // Сервис авторизации
export const db = getFirestore(FBapp); // Облачная база данных Firestore

export default FBapp;
