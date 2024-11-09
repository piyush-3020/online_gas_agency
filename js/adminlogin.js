
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

// import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyAlwl2UdUcNqnxbf88rxlOg7dZUBYyYvuI",
//     authDomain: "gas-system-624d7.firebaseapp.com",
//     projectId: "gas-system-624d7",
//     storageBucket: "gas-system-624d7.appspot.com",
//     messagingSenderId: "37872274327",
//     appId: "1:37872274327:web:6762a2117e46766c4712d2"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// // login User

// function loginUser () {
//     const email = document.querySelector('#ad-email').value;
//     const password = document.querySelector('#ad-password').value;

//     if(!email || !password){
//         alert("Plz enter email and password")
//         return;
//     }

//     signInWithEmailAndPassword(auth,email,password).then((userCredintial)=>{
//         console.log("Login User");
//     })

//     .catch((error)=>{
//         console.log(error);
//     })


// }

// const login_btn = document.querySelector('#ad-loginbtn');

//  login_btn.addEventListener('click', loginUser);

