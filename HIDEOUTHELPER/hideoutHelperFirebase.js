// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore, doc, setDoc} from 'https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional\
const firebaseConfig = {
    apiKey: "AIzaSyDL7AlOqEol3u1LHmn7RS4i7fduyy2lmGI",
    authDomain: "hideouthelper-7c1a6.firebaseapp.com",
    projectId: "hideouthelper-7c1a6",
    storageBucket: "hideouthelper-7c1a6.appspot.com",
    messagingSenderId: "1011025758280",
    appId: "1:1011025758280:web:4ecc9b03da3dc2f81b707d",
    measurementId: "G-LV7BW8NQLQ"
  }; 

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

const userRef = doc(db, 'Collection/USERS');

async function writingUsers() {
    const docData = {
        first: "Andrew",
        last: "Nong",
        id: 123
    };
    
    try {
        // Write the data to Firestore
        await setDoc(userRef, docData);
        console.log("User data written successfully");
    } catch (error) {
        console.error("Error writing document: ", error);
    }
}

writingUsers();