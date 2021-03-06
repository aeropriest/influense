
import firebase from 'firebase';
  
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSq9FRd-3yXhB8fTU95LDQoHWe4VEGKDA",
  authDomain: "influense-64aa7.firebaseapp.com",
  projectId: "influense-64aa7",
  storageBucket: "influense-64aa7.appspot.com",
  messagingSenderId: "393496835159",
  appId: "1:393496835159:web:65c65906c56d98ac809f12",
  measurementId: "G-5HBPWY0Q5M"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();
  
export default db;
