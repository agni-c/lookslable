const router = require("express").Router();
var sessionstorage = require("sessionstorage");
const { filesUpload } = require("../middleware");

var admin = require("firebase-admin");

const db = admin.firestore();
const profileRef = db.collection("User Profile");

/*
 * This module uploads files to cloud storage of google
 * returns json after saving file reference with form data
 */
router.post("/", filesUpload, (req, res) => {
	//TODO make a reference to image array attribute
	let uid = sessionstorage.getItem("uid");
	const glaryRef = profileRef.doc(uid).collection("Glary");
	const accountRef = profileRef.doc(uid);
	const files = req.files;
	//pushing urls and names to array
	let imageURLs = [];
	let imageNames = [];
	files.forEach((file) => {
		imageURLs.push(
			`https://storage.googleapis.com/spring-internship.appspot.com/${file.originalname}`
		);
		imageNames.push(file.originalname);
	});
	//obj which will be saved to db (after parsing form-data)
	const session = {
		puid: uid,
		images: imageURLs,
		names: imageNames,
		landmark: req.body.landmark,
		location: req.body.location,
		price: req.body.price,
		time: req.body.time,
	};
	//Adding to Glary sub collection
	glaryRef.add(session);
	//Creating an array in profile which will hold all the landmarks
	accountRef.update({
		landmark: admin.firestore.FieldValue.arrayUnion(session.landmark),
	});
	res.json(session);
});
/**
 * get all the p user data
 */
router.get("/usergallery", (req, res) => {
	let uid = sessionstorage.getItem("uid");
	const glaryRef = profileRef.doc(uid).collection("Glary");

	const userGlary = async () => {
		const snapshot = await glaryRef.get();
		const docs = snapshot.docs.map((doc) => doc.data());
		res.json(docs);
	};
	userGlary();
});

router.get("/allUsergallery", (req, res) => {
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
