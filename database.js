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
 
 console.log(frb.database);

firebase.database()
.ref("todo")
.on("child_added",(data)=>{
    
  var liElement = document.createElement("li");

  var liText = document.createTextNode(data.val().value)

  liElement.appendChild(liText);
   
  console.log(liElement);

  
//   Delete Button

var delBtn = document.createElement("button");

var delBtnText = document.createTextNode("Delete")

delBtn.appendChild(delBtnText);

delBtn.setAttribute("id",data.val().key)

delBtn.setAttribute("onclick", "deleteItem(this)");


  var list = document.getElementById("list");

  liElement.appendChild(delBtn);

  list.appendChild(liElement);

//   Edit Button

var editBtn = document.createElement("button");

var editBtnText = document.createTextNode("Edit")

editBtn.appendChild(editBtnText);

editBtn.setAttribute("onclick", "editItem(this)");

editBtn.setAttribute("id", data.val().key);


liElement.appendChild(editBtn);
    
})
 
function addTodo() {

  var input = document.getElementById("inputField");

//   console.log(input.value);

  var key = firebase.database().ref("todo").push().key;

  let obj = {
    value: input.value,
    key:key
  };

  firebase.database().ref("todo").child(key).set(obj);

  input.value ="";
  

}

function deleteAllTodos() {

  var list = document.getElementById("list");

 firebase.database().ref("todo").remove();

  list.innerHTML = "";
      
}

function deleteItem(a) {
    
    console.log(a.id);

    firebase.database().ref("todo").child(a.id).remove()

    a.parentNode.remove();
    
}

function editItem(a) {

    // var val = a.parentNode.firstChild.nodeValue;

    var userInput = prompt("Enter Updated Value");

    var editTodo = {
        value : userInput,
        key : a.id
    } 

    firebase.database().ref("todo").child(a.id).set(editTodo);

    a.parentNode.firstChild.nodeValue = userInput; 
}