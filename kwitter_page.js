//YOUR FIREBASE LINKS
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
    room_name=localStorage.getItem("room_name");

    function send()
    {
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value="";

    }



function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
