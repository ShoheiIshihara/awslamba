// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnxA8WKkvgv7PIt5Uf8iQanOVFI7gKff8",
  authDomain: "mineruba-79ba8.firebaseapp.com",
  projectId: "mineruba-79ba8",
  storageBucket: "mineruba-79ba8.appspot.com",
  messagingSenderId: "338461796166",
  appId: "1:338461796166:web:1e0f160292a87976152747",
  measurementId: "G-D10NZ415LM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);