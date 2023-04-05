
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";
  import { getDatabase, set, get, ref } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB1ReGI1nMJnKZZH-_lK_LyS0AodkY6coE",
    authDomain: "harvesthubform.firebaseapp.com",
    projectId: "harvesthubform",
    storageBucket: "harvesthubform.appspot.com",
    messagingSenderId: "794268749245",
    appId: "1:794268749245:web:aef59142c96efcbe26d6d4"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth()
  const db = getDatabase();

  const firstName = document.getElementById('fname')
  const lastName = document.getElementById('lname')
  const email = document.getElementById('email')
  const pass = document.getElementById('pass')
  const cpass = document.getElementById('cpass')

  const submit = document.getElementById('submit')

  submit.addEventListener('click', function(e){
    e.preventDefault(); 
    
    const obj = {
        FirstName: firstName.value,
        LastName: lastName.value,
        Email: email.value,
        Password: pass.value,
        Cpassword: cpass.value,
    };
    createUserWithEmailAndPassword(auth, obj.Email, obj.Password)
        .then(() => {
            alert('signup successfully')
            window.location.assign('login.html')
        })
        .catch((error) => {
            alert(error)
        })
        console.log(obj)
  })