// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore} from 'firebase/firestore';
import { getAuth, onAuthStateChanged} from "firebase/auth";
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
//Initialize FireStore and Auth
const auth = getAuth(app);
const db = getFirestore(app);

//Writing and Reading from Firestore
const random_data = doc(db,'Heating1/21-09-2024');
function inserting_data(){
    const docData = {
        Screws: 3,
        Bolts: 5,
        Duct_tape: 2,
    }
    setDoc(random , docData);
};


//Auth state
onAuthStateChanged(auth, user=>{
    if(user != null){
        console.log("Logged in");
    }
    else{
        console.log("No user");
    }
});



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