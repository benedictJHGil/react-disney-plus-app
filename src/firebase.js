// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5K3F3GyUsIfRp51XKl9QrLUShHUWG1n0",
  authDomain: "react-disney-plus-app-ba51c.firebaseapp.com",
  projectId: "react-disney-plus-app-ba51c",
  storageBucket: "react-disney-plus-app-ba51c.appspot.com",
  messagingSenderId: "704458045225",
  appId: "1:704458045225:web:868163f851eca169966938"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;