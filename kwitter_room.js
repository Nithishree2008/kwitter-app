
  var firebaseConfig = {
    apiKey: "AIzaSyDdKhJCvw7YhcvHWoM7pdRsVI-hpmgzjxo",
    authDomain: "kwiter-74320.firebaseapp.com",
    databaseURL: "https://kwiter-74320-default-rtdb.firebaseio.com",
    projectId: "kwiter-74320",
    storageBucket: "kwiter-74320.appspot.com",
    messagingSenderId: "869043248695",
    appId: "1:869043248695:web:b2765219ffd243aefee9b2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";

    function addRoom()
    {
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"
      }) ;
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";

       }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name"+Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;



      //End code
      });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem(name);
  window.location="kwitter_room.html";


}

