// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsLmIEmLgKuqu_R0h2ha6rH4lPcALgF6I",
  authDomain: "online-library-b38ad.firebaseapp.com",
  projectId: "online-library-b38ad",
  storageBucket: "online-library-b38ad.appspot.com",
  messagingSenderId: "274577678217",
  appId: "1:274577678217:web:427031250a59c3e1874b58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
