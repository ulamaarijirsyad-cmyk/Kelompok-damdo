import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDUDnEkZ5OjpnVzDL8OaPnKqYs4ESsR2x8",
  authDomain: "mlbbunimus.firebaseapp.com",
  projectId: "mlbbunimus",
  storageBucket: "mlbbunimus.firebasestorage.app",
  messagingSenderId: "121855150863",
  appId: "1:121855150863:web:91ca0b826068a819d54c7a",
  measurementId: "G-PHJ9B428BQ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.login = function(){
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Login berhasil!");
      window.location.href = "index.html";
    })
    .catch(err => alert(err.message));
}

window.register = function(){
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => alert("Akun berhasil dibuat!"))
    .catch(err => alert(err.message));
}

function login(){
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Login berhasil!");
      window.location.href = "index.html";
    })
    .catch(err => alert(err.message));
}

function register(){
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => alert("Akun berhasil dibuat!"))
    .catch(err => alert(err.message));
}

window.login = login;
window.register = register;

function loginGoogle(){
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      alert("Login Google berhasil!");
      window.location.href = "index.html";
    })
    .catch((error) => {
      alert(error.message);
    });
}

window.loginGoogle = loginGoogle;

import { GoogleAuthProvider, signInWithPopup } 
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";