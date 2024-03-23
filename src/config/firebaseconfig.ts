// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDqqvl2zSsqkA6NOfnmv9hoYlPVeHCIECA",

  authDomain: "todo-app-5c2bc.firebaseapp.com",

  projectId: "todo-app-5c2bc",

  storageBucket: "todo-app-5c2bc.appspot.com",

  messagingSenderId: "646642194642",

  appId: "1:646642194642:web:91b0c6bebb1fecc5c3350b",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
