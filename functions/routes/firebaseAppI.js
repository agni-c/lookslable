var firebase =require('firebase');
var firebaseConfig = {
    apiKey:process.env.API_KEY,
    authDomain: "spring-internship.firebaseapp.com",
    databaseURL: "https://spring-internship.firebaseio.com",
    projectId: "spring-internship",
    storageBucket: "spring-internship.appspot.com",
    messagingSenderId: "871532525324",
    appId: "1:871532525324:web:a6a8cd49b945e5788c3b29",
    measurementId: "G-S2BPC07SW6"
  };
  //intializeapp
firebase.initializeApp(firebaseConfig);
// instance of database
var database = firebase.database();
//export instance
module.exports = database;