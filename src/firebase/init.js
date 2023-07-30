// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB83K_QzMiyyGhwVmKM1fxpmj_hsMehugk",
  authDomain: "dnipro-delivery.firebaseapp.com",
  projectId: "dnipro-delivery",
  storageBucket: "dnipro-delivery.appspot.com",
  messagingSenderId: "741778376617",
  appId: "1:741778376617:web:860fa8fa8992d4c968a6b8",
  measurementId: "G-Q73LMZWTZ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore();

// Initialize Cloud Firestore and get a reference to the service
// import firebase from 'firebase/app';
// import 'firebase/storage';
// firebase.initializeApp(firebaseConfig);
// export const storage = firebase.storage();

export default db;