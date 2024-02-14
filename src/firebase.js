// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4lK-c0IIFOPgwJTin5j7YZCItRo5Lg_w",
  authDomain: "fir-reactapp-c24f0.firebaseapp.com",
  projectId: "fir-reactapp-c24f0",
  storageBucket: "fir-reactapp-c24f0.appspot.com",
  messagingSenderId: "731393963586",
  appId: "1:731393963586:web:78633be37493d0f6a41fdb",
  measurementId: "G-L6XYJQBJFG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);