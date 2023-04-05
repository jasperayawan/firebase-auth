
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";
  import { getDatabase, set, get, update, remove, ref, child } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";
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
  const Auth = getAuth();
  const db = getDatabase();

  const email = document.getElementById('email')
  const password = document.getElementById('password')
  const loginBtn = document.getElementById('login')

  loginBtn.addEventListener('click', function(e){
    e.preventDefault()

    const obj = {
        email: email.value,
        password: password.value
    }
    signInWithEmailAndPassword(Auth, obj.email, obj.password)
        .then(() => {
            alert('login successfully!')
            window.location.assign('home.html')
        })
        .catch((error) => {
            alert(error)
        })
  })

