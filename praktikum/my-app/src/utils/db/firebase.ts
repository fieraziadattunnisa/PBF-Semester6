import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhONg8h8VSeijyxZFhq-RFZyX448XDRzY",
  authDomain: "framework-next-e1fa6.firebaseapp.com",
  projectId: "framework-next-e1fa6",
  storageBucket: "framework-next-e1fa6.firebasestorage.app",
  messagingSenderId: "827031893296",
  appId: "1:827031893296:web:65d8ce7b3da097638644f5",
  measurementId: "G-YBW4WJHVZP"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export default app;