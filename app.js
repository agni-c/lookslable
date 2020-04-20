const express = require("express");
const app = express();
const fireStore = require("@google-cloud/firestore");
const { Storage } = require("@google-cloud/storage");
const { v4 } = require("uuid");

const multer = require("multer");
const multerGoogleStorage = require("multer-google-storage");

const fs = require("fs");
const path = require("path");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 5000;
//--------------------------------------
const stream = require("stream");
var bufferStream = new stream.PassThrough();
app.use(cors());
//Firestore init--------------------------

var admin = require("firebase-admin");
var serviceAccount = require("./spring-internship-firebase-adminsdk-7z0b1-ad7d9b5ea2.json");

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: "https://spring-internship.firebaseio.com",
	storageBucket: "spring-internship.appspot.com",
});

const db = admin.firestore();
db.settings({ timestampsInSnapshots: true });
const storage = new Storage();
const bucket = storage.bucket("spring-internship.appspot.com");
//REFS
const profileRef = db.collection("User Profile");
let uid = null;
//----------------------------------------

app.use(express.static("public")); //serving static file in public folders
app.use(express.json()); //parsing json, limiting it to 1mb\

//Creating A user profile
app.post("/api/profile", (req, res) => {
	const profile = req.body;
	// req.session.uid = profile.uid;
	uid = profile.uid;
	const docRef = profileRef.doc(profile.uid);
	if (docRef.uid !== profile.uid) {
		uid = profile.uid;
		docRef.set(profile);
		res.end();
	} else {
		uid = profile.uid;
		res.end();
	}
});
//get request
app.get("/api/webcam", (request, response) => {
	//get data from firebase
	//Reading the data
	// let uid = request.session.uid;

	const webCamRef = profileRef.doc(uid).collection("Web Cam");

	webCamRef
		.get()
		.then((snapshot) => {
			let data = snapshot.docs.map((doc) => {
				let x = doc.data();

				return x;
			});
			response.status(200).json(data);
		})
		.catch((err) => {
			err;
		});
});

//Creating Picture upload route
const uploadHandler = multer({
	storage: multerGoogleStorage.storageEngine({
		bucket: "spring-internship.appspot.com",
		getFilename(req, file, cb) {
			cb(null, `${file.originalname}`);
		},
		contentType(req, file) {
			return file.mimetype;
		},
	}),
});

//post request
app.post("/api/webcam", uploadHandler.any(), (request, response) => {
	const data = request.body;
	const files = request.files;
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

app.post("/api/upload", uploadHandler.any(), (req, res, next) => {
	//TODO make a reference to image array attribute
	const accountRef = profileRef.doc(uid).collection("Glary");
	//TODO Save it to database
	let imageURLs = [];
	req.files.forEach((file) => {
		imageURLs.push(
			`https://storage.googleapis.com/spring-internship.appspot.com/${file.filename}`
		);
	});
	const session = {
		images: imageURLs,
		landmark: req.body.landmark,
	};
	accountRef.add(session);
	res.json(session);
});

// app.get("/upload", (req, res) => {
// 	//TODO Fetch Data from DB reference
// 	//TODO Transform it to json
// });

//Listening
app.listen(port, () => {
	console.log(`listening at ${port}`);
});
