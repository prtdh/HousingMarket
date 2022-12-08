// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestor e";
const firebaseConfig = {
  apiKey: "AIzaSyAAe0BLJby6PJtiQjpftrQTbXnb6o8eZRg",
  authDomain: "housingmarket-f298b.firebaseapp.com",
  projectId: "housingmarket-f298b",
  storageBucket: "housingmarket-f298b.appspot.com",
  messagingSenderId: "268798996692",
  appId: "1:268798996692:web:d13c92954fc9c7bd3bcb41",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
