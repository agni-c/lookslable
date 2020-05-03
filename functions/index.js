const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const express = require("express");
const app = express();
const fireStore = require("@google-cloud/firestore");
const { Storage } = require("@google-cloud/storage");
const { v4 } = require("uuid");
const { filesUpload } = require("./middleware");

var sessionstorage = require('sessionstorage');

const cors = require("cors");
require("dotenv").config();

//--------------------------------------
app.use(cors());

//Firestore init--------------------------

var admin = require("firebase-admin");
// var serviceAccount = require("./spring-internship-firebase-adminsdk-7z0b1-ad7d9b5ea2.json");

admin.initializeApp();

const db = admin.firestore();
db.settings({ timestampsInSnapshots: true });
const storage = new Storage();
const bucket = storage.bucket("spring-internship.appspot.com");
//REFS
const profileRef = db.collection("User Profile");
let uid = null;
//----------------------------------------

app.use(express.static("../public")); //serving static file in public folders
app.use(express.json({ limit: "50mb" })); //parsing json, limiting it to 1mb\

//Creating A user profile
app.post("/api/profile", (req, res) => {
	const profile = req.body;
	// req.session.uid = profile.uid;
	//session
	uid = profile.uid;
	sessionstorage.setItem("uid",uid);
	const docRef = profileRef.doc(profile.uid);
	if (docRef.uid !== profile.uid) {
		uid = profile.uid;
		profile.tags = docRef.tags;
		docRef.set(profile);
		res.end();
	} else {
		uid = profile.uid;
		res.end();
	}
});
//get request
app.get("/api/webcam", (request, response) => {
	const webCamRef = profileRef.doc(uid).collection("Web Cam");

	webCamRef
		.get()
		.then((snapshot) => {
			let data = snapshot.docs.map((doc) => {
				let x = doc.data();

				return x;
			});
			return response.status(200).json(data);
		})
		.catch((err) => {
			err;
		});
});

//post request
app.post("/api/webcam", (request, response) => {
	const data = request.body;
	const timestamp = new Date(fireStore.Timestamp.now().seconds * 1000);
	(date = timestamp.getDate()),
		(month = timestamp.getMonth()),
		(year = timestamp.getFullYear()),
		(hours = timestamp.getHours()),
		(minutes = timestamp.getMinutes());

	data.timestamp = `${date}/${month}/${year} || ${
		hours >= 12 ? hours - 12 : hours
	}:${minutes}`;
	console.log(data.timestamp);

	let uid = data.uid;
	uid = sessionstorage.getItem("uid");
	data._id = v4().split("-").pop();
	//----------------
	const webCamRef = profileRef.doc(uid).collection("Web Cam").doc(data._id);

	//converting data-url to image
	let imgString = data.image64.split(";base64,").pop();

	const bufferImg = Buffer.from(imgString, "base64");

	// Upload the image to the bucket
	const file = bucket.file(`${data._id}.png`);
	const file_stream = file.createWriteStream({
		contentType: "image/png",
		resumable: false,
	});
	file_stream.write(bufferImg, (err) => {
		if (err) {
			console.log(err);
		}
		//setting firestore image attribute to the url
		data.image64 = `https://storage.googleapis.com/spring-internship.appspot.com/${data._id}.png`;
		webCamRef.set(data); // can send to firestore
		console.log("upload finished");
	});
	file_stream.end();
	response.end();
});

app.post("/api/upload", filesUpload, (req, res) => {
	//TODO make a reference to image array attribute
	const glaryRef = profileRef.doc(uid).collection("Glary");
	const accountRef = profileRef.doc(uid);
	const files = req.files;
	//Save it to database
	let imageURLs = [];
	let imageNames = [];
	files.forEach((file) => {
		imageURLs.push(
			`https://storage.googleapis.com/spring-internship.appspot.com/${file.originalname}`
		);
		imageNames.push(file.originalname);
	});
	const session = {
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

//Listening
exports.app = functions.https.onRequest(app);
