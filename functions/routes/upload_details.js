const router =require('express').Router()
var firebase = require("firebase");
var database =require('./firebaseAppI');
 require('dotenv').config();

router.post('/',(req,res)=>{
    console.log("in");``
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