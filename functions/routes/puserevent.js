var router = require('express').Router();
var firebase = require('firebase');
var database =require('./firebaseAppI');
router.post('/',(req,res)=>{
    console.log("in");
     var ref = database.ref("BOOKING_DETAILS");
     console.log("uid"+req.body.userid);
     ref.orderByChild('Puid').equalTo(req.body.userid).once('value', (snapshot)=>{
       res.json(snapshot.val());
        
},(errorObject)=> {
    console.log("The read failed: " + errorObject.code);
 });
  })

module.exports = router;