// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAx-ithJrKIZENCSyhgjmr89RQKlD3ocE",
  authDomain: "bd-plumbing.firebaseapp.com",
  projectId: "bd-plumbing",
  storageBucket: "bd-plumbing.appspot.com",
  messagingSenderId: "126651298105",
  appId: "1:126651298105:web:82dc83739712b5ff2278e8",
  measurementId: "G-4L32N3ERBM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
