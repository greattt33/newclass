// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
import {getStorage} from "firebase/storage"


// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtL0xSix3qcc3pwtHuhpjGiWa27HlxF-4",
  authDomain: "lsetf-rebuild-greattt.firebaseapp.com",
  projectId: "lsetf-rebuild-greattt",
  storageBucket: "lsetf-rebuild-greattt.appspot.com",
  messagingSenderId: "636927484813",
  appId: "1:976458438651:web:03eed6f5879e5e529c5d5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db=getFirestore(app)
export const storage=getStorage(app)