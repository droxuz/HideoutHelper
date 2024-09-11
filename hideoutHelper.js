// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore} from 'firebase/firestore';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "hideouthelper-a48eb.firebaseapp.com",
  projectId: "hideouthelper-a48eb",
  storageBucket: "hideouthelper-a48eb.appspot.com",
  messagingSenderId: "418103930961",
  appId: "1:418103930961:web:9001306eba6dcd858bc870",
  measurementId: "G-LZMJQ9BHEN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Initialize FireStore
const db = getFirestore(app)

// Get modal element
var modal = document.getElementById("myModal");

// Get open modal button
var openModalBtn = document.getElementById("openModalBtn");

// Get close button
var closeBtn = document.getElementsByClassName("close")[0];

// Listen for open click
openModalBtn.addEventListener("click", function() {
    modal.style.display = "block";
});

// Listen for close click
closeBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

// Listen for outside click
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

const items = ["Screws", "Bolts", "Tape", "Nuts"];
const itemsUl = document.getElementById('itemUl');
for (let i = 0; i<items.length; i++) {
    let li = document.createElement('li');
    li.className = 'item';
    li.textContent = items[i];
    itemsUl.appendChild(li)
}