const firebaseConfig = {
    apiKey: "AIzaSyA5tYe-iYUnICvLeqsnyYcx5ycvdyPsQ10",
    authDomain: "firstproject-d3fbf.firebaseapp.com",
    projectId: "firstproject-d3fbf",
    storageBucket: "firstproject-d3fbf.appspot.com",
    messagingSenderId: "524448410114",
    appId: "1:524448410114:web:7afb7d4cfb696d61e9951b",
    measurementId: "G-DRDP58BY8F"
  };
  firebase.initializeApp(firebaseConfig)

function signup(event){
event.preventDefault()
let email =document.querySelector("#email").value
let password =document.querySelector("#password").value

firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    alert("signup successful")
  })
  .catch((error) => {

console.log(error);

  });

}

function login(event){
    event.preventDefault()
    let email =document.querySelector("#emaillogin").value
    let password =document.querySelector("#passwordlogin").value
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
  alert("login Successful")
    // ...
  })
  .catch((error) => {
 console.log(error);
  });
}