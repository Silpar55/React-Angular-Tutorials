import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDqQbgzTvFJMnK4pWxXspND8QnpPL3QFl8",
  authDomain: "react-notes-149a2.firebaseapp.com",
  projectId: "react-notes-149a2",
  storageBucket: "react-notes-149a2.appspot.com",
  messagingSenderId: "227254934386",
  appId: "1:227254934386:web:7ddb1720e61d201aa69beb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
