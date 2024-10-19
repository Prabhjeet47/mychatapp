import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD4MG0QxGbZSM-jO4KNzqCNzVOgPsBYP9I",
  authDomain: "chatapp-620b0.firebaseapp.com",
  projectId: "chatapp-620b0",
  storageBucket: "chatapp-620b0.appspot.com",
  messagingSenderId: "190124804594",
  appId: "1:190124804594:web:407cb6907704f06b86036b"
};

export const app = initializeApp(firebaseConfig);