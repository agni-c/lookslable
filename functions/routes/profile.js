const router = require("express").Router();

var sessionstorage = require("sessionstorage");
const fireStore = require("@google-cloud/firestore");
const { v4 } = require("uuid");
const { Storage } = require("@google-cloud/storage");
//Firestore init--------------------------
var admin = require("firebase-admin");

const db = admin.firestore();
const storage = new Storage();
const bucket = storage.bucket("spring-internship.appspot.com");
//REFS
const profileRef = db.collection("User Profile");

//----------------------------------------

//Creating A user profile

router.post("/", (req, res, next) => {
	const profile = req.body;
	//session
	uid = profile.uid;
	sessionstorage.setItem("uid", uid);
	// req.session.uid = uid;

	const docRef = profileRef.doc(uid);
	// console.log(req.session.uid);

	docRef.set(profile, { merge: true });
	res.end();
});

module.exports = router;
