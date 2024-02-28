// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import {getAuth} from 'firebase/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWf9asrj9QIEImqqai-MQTrQDzYNj6STk",
  authDomain: "clone-acb11.firebaseapp.com",
  projectId: "clone-acb11",
  storageBucket: "clone-acb11.appspot.com",
  messagingSenderId: "715980170759",
  appId: "1:715980170759:web:9afc11b37a64bc5e4aaca2"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = app.firestore()