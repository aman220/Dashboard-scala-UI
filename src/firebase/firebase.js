
import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC-tbtb34l29e_7YnZPItWHJ6Ib5uhVNOY",
    authDomain: "scala-c1f05.firebaseapp.com",
    projectId: "scala-c1f05",
    storageBucket: "scala-c1f05.appspot.com",
    messagingSenderId: "984602902060",
    appId: "1:984602902060:web:9ff4c53b6b12aa8139db89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);