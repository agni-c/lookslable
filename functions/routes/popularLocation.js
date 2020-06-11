const router = require("express").Router();
const firebase = require("firebase");
const admin = require("firebase-admin");
var database = require("./firebaseAppI");
let count = 0;
let jsonsimage = new Array();
let jsonsid = new Array();
let array = new Array();
let jsons = new Array();
let db = firebase.firestore();
let adds = new Array();
router.get("/",  (req, res) => {
  
  let json = new Array();
	const Ref = db.collectionGroup("Glary");
	Ref.get()
		.then((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				json.push(doc.data());
			});
			return res.json(json);
		})
    .catch((err) => console.log(err));
  });
   
  

 

module.exports = router;
