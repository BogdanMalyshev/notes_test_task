import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const app = initializeApp({
  apiKey: "AIzaSyD8HDb4gUBMmWrf7Sc6qXaaAov0Ki39nH4",
  authDomain: "notes-20517.firebaseapp.com",
  projectId: "notes-20517",
  storageBucket: "notes-20517.appspot.com",
  messagingSenderId: "882403958854",
  appId: "1:882403958854:web:19a945d092c237fc35aa47"
});

export const db = getFirestore(app);
