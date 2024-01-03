

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDdTZFOiQIjU4eBuHfBkiSnj9k0t7HKN1Q",
    authDomain: "ntho-24.firebaseapp.com",
    projectId: "ntho-24",
    storageBucket: "ntho-24.appspot.com",
    messagingSenderId: "878124638885",
    appId: "1:878124638885:web:136dd109eaefcfe854234c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
