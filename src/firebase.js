// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDP85jBMPkBBTVkiTUjrw4cJz3OZAUI5gs",
  authDomain: "front-end-final-login.firebaseapp.com",
  projectId: "front-end-final-login",
  storageBucket: "front-end-final-login.appspot.com",
  messagingSenderId: "622043403030",
  appId: "1:622043403030:web:9151c2496c553a54bfb637"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
