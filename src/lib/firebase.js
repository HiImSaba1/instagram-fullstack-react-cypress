/* eslint-disable */

import { initializeApp } from "firebase/app";
import {
  FieldValue,
  getFirestore,
  setDoc,
  doc,
  
} from "firebase/firestore";
import "firebase/firestore";
import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";

const config = {
  //   apiKey: process.env.REACT_APP_API_KEY,
  //   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  //   projectId: process.env.REACT_APP_PROJECT_ID,
  //   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  //   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  //   appId: process.env.REACT_APP_APP_ID
  apiKey: "AIzaSyDs1tD8857hcLhT33jVtKRTohru7BJlm8Y",
  authDomain: "instagram-clone-2023-1c056.firebaseapp.com",
  projectId: "instagram-clone-2023-1c056",
  storageBucket: "instagram-clone-2023-1c056.appspot.com",
  messagingSenderId: "843936159564",
  appId: "1:843936159564:web:68b60402e949da75cda1e9",
};

const firebase = initializeApp(config);
const firestore = getFirestore(firebase);
const auth = getAuth(firebase);
export {
  firebase,
  firestore,
  FieldValue,
  setDoc,
  doc,
  signOut,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
  auth
};
