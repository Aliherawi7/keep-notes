// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD03QD3KO5GL1qqW8pyzNmOkvxR71ggSWo",
    authDomain: "herawi-keep-notes.firebaseapp.com",
    databaseURL: "https://herawi-keep-notes-default-rtdb.firebaseio.com",
    projectId: "herawi-keep-notes",
    storageBucket: "herawi-keep-notes.appspot.com",
    messagingSenderId: "904732458438",
    appId: "1:904732458438:web:886f29fd28fd6e698686c7",
    measurementId: "G-G33YYQSJCV"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
// analytics
export const analytics = getAnalytics(firebaseApp);
// Initialize Realtime Database and get a reference to the service
export const database = getFirestore(firebaseApp);
// authentication tools
export const authentication = getAuth(firebaseApp);

export const googleProvider = new GoogleAuthProvider();











