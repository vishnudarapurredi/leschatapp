// Your web app's Firebase configuration

var firebaseConfig = {

  apiKey: "AIzaSyCy69qU8za7gX4_dS5M5bWONc_mPVjsDyo",

  authDomain: "letuschat-30a43.firebaseapp.com",

  databaseURL: "https://letuschat-30a43-default-rtdb.firebaseio.com",

  projectId: "letuschat-30a43",

  storageBucket: "letuschat-30a43.appspot.com",

  messagingSenderId: "187353883784",

  appId: "1:187353883784:web:fef3eeb60127c98c75ab3d"

};


// Initialize Firebase

firebase.initializeApp(firebaseConfig);

function send() 
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
     });

     document.getElementById("msg").value = "";
}