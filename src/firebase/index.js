// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth/web-extension";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFmHGyEkZFu-eLVxh4wPgnGynNGDwiZqc",
  authDomain: "authentication-9154b.firebaseapp.com",
  projectId: "authentication-9154b",
  storageBucket: "authentication-9154b.appspot.com",
  messagingSenderId: "760516938922",
  appId: "1:760516938922:web:b3bfc582773a1561ba14d3",
  measurementId: "G-YQ6YE94WM4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {app, auth, analytics}