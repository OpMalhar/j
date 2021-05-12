//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyA-20C3r84RvA0BjAYRDkJ4RCJl31QHCEo",
      authDomain: "baufid-61adf.firebaseapp.com",
      databaseURL: "https://baufid-61adf-default-rtdb.firebaseio.com",
      projectId: "baufid-61adf",
      storageBucket: "baufid-61adf.appspot.com",
      messagingSenderId: "356070002464",
      appId: "1:356070002464:web:475f9cc279978ef481d145"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
var username =localStorage.getItem("username");
var roomname=localStorage.getItem("roomname");
function send(){
      var msg=document.getElementById("message").value;
}  
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot)
 { document.getElementById("output").innerHTML = "";
  snapshot.forEach(function(childSnapshot)
   { childKey  = childSnapshot.key;
       childData = childSnapshot.val();
        if(childKey != "purpose")
         {
         firebase_message_id = childKey;
         message_data = childData;

//Start code

//End code
      } });  }); }
getData();
