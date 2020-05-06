var router  = require('express').Router();
var firebase = require('firebase');
var admin = require('firebase-admin');
var serviceAccount = require("../spring-internship-firebase-adminsdk-7z0b1-6d477bed6f.json");

router.post('/',(req,res)=>{
console.log('in router')

  if (!firebase.apps.length) {
      admin.initializeApp({
        credential: admin.credential.applicationDefault()
      });
  }
let db = admin.firestore();
var userRef = firebase.db.collection('User Profile').doc(id)
var profilePromise = userRef.get().then(doc => {
  if (doc.exists) {
      console.log(doc.data());
    var profile = doc.data()
    profile.id = doc.id
    return profile // I assume you don't want to return undefined
//    ^^^^^^
  } else {
    throw new Error("Profile doesn't exist")
//    ^^^^^
  }
})

res.end();
})


module.exports = router;