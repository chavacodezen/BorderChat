// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

export const getFirebaseApp = () => {
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyApVL9flFE9Kwz_czMEjWFesAMXIHKqoIc",
    authDomain: "borderchat-c454d.firebaseapp.com",
    projectId: "borderchat-c454d",
    storageBucket: "borderchat-c454d.appspot.com",
    messagingSenderId: "139121179890",
    appId: "1:139121179890:web:e919854b33a353681d246b",
    measurementId: "G-0TSRRDDTX7",
  };

  // Initialize Firebase
  return initializeApp(firebaseConfig);
};