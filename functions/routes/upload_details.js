const router =require('express').Router()
var firebase = require("firebase");

router.post('/',(req,res)=>{
    console.log("in");
    //firebase realtime database
    var firebaseConfig = {
        apiKey: "AIzaSyA2NqT0Shr_8yb-YQWWCh3b-1DnFUi4ZhI",
        authDomain: "spring-internship.firebaseapp.com",
        databaseURL: "https://spring-internship.firebaseio.com",
        projectId: "spring-internship",
        storageBucket: "spring-internship.appspot.com",
        messagingSenderId: "871532525324",
        appId: "1:871532525324:web:a6a8cd49b945e5788c3b29",
        measurementId: "G-S2BPC07SW6"
      };
      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }
      //create the varible of database
      var database = firebase.database();
      //giving the reference
      var ref = database.ref("I_USER");
      //create the object
      var obj = {
        Email:req.body.email,
        Adress:req.body.address,
        PhoneNo:req.body.phoneno,
        Event:req.body.event,
        Date:req.body.date,
        Time:req.body.time
      };
      //push the object
       var result = ref.push(obj);
       console.log("out");
    
    res.end();
    

})


module.exports =router