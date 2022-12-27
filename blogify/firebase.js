// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgKExB64sDM5erQ97HV1UG3D-ivWLq8WI",
  authDomain: "blogify-portal.firebaseapp.com",
  projectId: "blogify-portal",
  storageBucket: "blogify-portal.appspot.com",
  messagingSenderId: "233042408263",
  appId: "1:233042408263:web:0dff12ccb5bcc4fbec5262"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 
