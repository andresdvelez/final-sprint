// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZZlqBBGCJrHAJBxPNAf_eeuQQeH7RO-E",
  authDomain: "delivery-app-73554.firebaseapp.com",
  projectId: "delivery-app-73554",
  storageBucket: "delivery-app-73554.appspot.com",
  messagingSenderId: "75606763607",
  appId: "1:75606763607:web:8b43b95801ee63cf1adb12",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
