const express = require("express");
const app = express();
const fireStore = require("@google-cloud/firestore");
const { Storage } = require("@google-cloud/storage");
const { v4 } = require("uuid");
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
app.use(express.json()); //parsing json, limiting it to 1mb

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
	data._id = v4().split("-").pop();
	//----------------
	const webCamRef = profileRef.doc(uid).collection("Web Cam").doc(data._id);

	//converting data-url to image
	let imgString = data.image64.split(";base64,").pop();

	const bufferImg = Buffer.from(imgString, "base64");

	// Upload the image to the bucket
	const file = bucket.file(`${data._id}.png`);

	file
		.createWriteStream({
			resumable: false,
			metadata: {
				contentType: "image/png",
			},
		})
		.on("finish", () => {
			data.image64 = `https://storage.googleapis.com/spring-internship.appspot.com/${data._id}.png`;
			webCamRef.set(data); // can send to firestore
			console.log("upload finished", data.image64);
		})
		.end(bufferImg);

	//==========================================

	// file.save(
	// 	bufferImg,
	// 	{
	// 		metadata: {
	// 			contentType: "image/png",
	// 		},

	// 		resumable: false,
	// 	},
	// 	(err) => {
	// 		if (err) {
	// 			console.log(err);
	// 		}
	// 		//setting firestore image attribute to the url
	// 		data.image64 = `https://storage.googleapis.com/spring-internship.appspot.com/${data._id}.png`;
	// 		webCamRef.set(data); // can send to firestore
	// 		console.log("upload finished");

	// 		response.end();
	// 	}
	// );

	//=================================================works once
	// bufferStream.end(bufferImg);

	// bufferStream
	// 	.pipe(
	// 		file.createWriteStream({
	// 			metadata: {
	// 				contentType: "image/png",
	// 				metadata: {
	// 					custom: "metadata",
	// 				},
	// 			},
	// 			public: true,
	// 			validation: "md5",
	// 		})
	// 	)
	// 	.on("error", function (err) {
	// 		console.log(`Failed to upload: ${err}`);
	// 	})
	// 	.on("finish", function () {
	// 		// The file upload is complete.
	// 		console.log("upload finished");
	// 		//setting firestore image attribute to the url
	// 		data.image64 = `https://storage.googleapis.com/spring-internship.appspot.com/${data._id}.png`;
	// 		webCamRef.set(data); // can send to firestore

	// 		response.json(data);
	// 	});
	//=================================================Works once

	// // const filePath = path.join(__dirname, `tmp/${data._id}.png`);
	// fs.writeFileSync(filePath, trimmedImg, { encoding: "base64" }, function (
	// 	err
	// ) {
	// 	console.log("File created");
	// });
	// //uploading files to firebase
	// let localReadStream = fs.createReadStream(filePath);
	// let remoteWriteStream = bucket.file(`${data._id}.png`).createWriteStream({
	// 	resumable: false,
	// 	gzip: true,
	// 	metadata: {
	// 		contentType: "image/png",
	// 		metadata: {
	// 			custom: "metadata",
	// 		},
	// 	},
	// });
	// localReadStream
	// 	.pipe(remoteWriteStream)
	// .on("error", function (err) {
	// 	console.log(`Failed to upload: ${err}`);
	// })
	// .on("finish", function () {
	// 	// The file upload is complete.
	// 	console.log("upload finished");
	// 	//setting firestore image attribute to the url
	// 	data.image64 = `https://storage.googleapis.com/spring-internship.appspot.com/${data._id}.png`;
	// 	webCamRef.set(data); // can send to firestore

	// 	// Deletes the local file
	// 	fs.unlink(`./tmp/${data._id}.png`, (err) => {
	// 		if (err) throw err;
	// 		console.log("deleting the local file");
	// 	});
	// 	response.end();
	// });
});

//Listening
app.listen(port, () => {
	console.log(`listening at ${port}`);
});
