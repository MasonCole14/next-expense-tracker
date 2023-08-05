// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBw-2Fw3042dGoUc0-vaRUlfO5Do2qwITc",
  authDomain: "next-expense-tracker-80a49.firebaseapp.com",
  projectId: "next-expense-tracker-80a49",
  storageBucket: "next-expense-tracker-80a49.appspot.com",
  messagingSenderId: "129036713475",
  appId: "1:129036713475:web:eac6bea00d790bc07b1836",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
