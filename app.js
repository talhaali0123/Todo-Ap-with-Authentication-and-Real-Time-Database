var firebaseConfig = {
    apiKey: "AIzaSyDl-54NqceexYB7rjTath2JVtt0SJhHkKY",
    authDomain: "todo-app-with-firebase-8e8c0.firebaseapp.com",
    databaseURL: "https://todo-app-with-firebase-8e8c0-default-rtdb.firebaseio.com",
    projectId: "todo-app-with-firebase-8e8c0",
    storageBucket: "todo-app-with-firebase-8e8c0.firebasestorage.app",
    messagingSenderId: "969121945983",
    appId: "1:969121945983:web:9b387ad32324ea563ba24a"
  };

 var frb = firebase.initializeApp(firebaseConfig);

 var auth = firebase.auth();

 console.log(frb.auth);
var form = document.getElementById("form");

 function signUp() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
  
    auth
      .createUserWithEmailAndPassword(email.value, password.value)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }
  
  function Login() {
    var email = document.getElementById("Loginemail");
    var password = document.getElementById("Loginpassword");
    
  
    auth
      .signInWithEmailAndPassword(email.value, password.value)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log(user);
        window.location.href = "./database.html";
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
      });
  }

  