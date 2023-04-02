// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js"
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbsJlnP4l3hx5SpuTaW0yg0G135m5cwZU",
  authDomain: "signupform-1c0aa.firebaseapp.com",
  projectId: "signupform-1c0aa",
  storageBucket: "signupform-1c0aa.appspot.com",
  messagingSenderId: "243437279047",
  appId: "1:243437279047:web:cba9c366fcb503efa31e62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
const auth = getAuth()


// let cpassword = document.getElementById('cpass')
const username = document.getElementById('username')
let email = document.getElementById('Email')
let password = document.getElementById('password')
const signup = document.getElementById('login')

signup.addEventListener('click', (e) => {
    e.preventDefault()

    let obj = {
        email: email.value,
        password: password.value,
    }
    signInWithEmailAndPassword(auth, obj.email, obj.password)
        .then((userCredential) => {
            const user = userCredential.user 

            set(ref(database, 'users/' + user.uid), {
                username: username,
                email: email,
            })

            alert('login successfully')
            if(window.location.assign('index.html')){
                logoutUser()
            }else{
                console.log('error')
            }

        })
        .catch((error) => {
            if(error.code == "auth/email-already-in-use"){
                alert("The email address is already in use");
            } else if (error.code == "auth/invalid-email") {
                alert("The email address is not valid.");
            } else if (error.code == "auth/operation-not-allowed") {
                alert("Operation not allowed.");
            } else if (error.code == "auth/weak-password") {
                alert("The password is too weak.");
            }
        })
})

const displayLogout = document.querySelector('.logout')


function logoutUser(){
    displayLogout.style.display = 'block'
}