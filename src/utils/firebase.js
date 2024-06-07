// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFPqhe3COd13iar6prASmgMdXCxsy0hYs",
  authDomain: "netflixgpt-ace7e.firebaseapp.com",
  projectId: "netflixgpt-ace7e",
  storageBucket: "netflixgpt-ace7e.appspot.com",
  messagingSenderId: "507062031520",
  appId: "1:507062031520:web:0682923fff8f7f76e765c5",
  measurementId: "G-DVSMV7HP37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();