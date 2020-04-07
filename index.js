const express = require('express');
const path = require('path');
const app = express();
const firebase = require('@google-cloud/firestore');
const { Storage } = require('@google-cloud/storage');
const { v4 } = require('uuid');
const fs = require('fs');
//--------------------------------------
const stream = require('stream');
const bufferStream = new stream.PassThrough();
//--------------------------------------
require('dotenv').config();
const port = process.env.PORT || 5000;
//Firestore init--------------------------

var admin = require('firebase-admin');

var serviceAccount = require('./spring-internship-firebase-adminsdk-7z0b1-ad7d9b5ea2.json');

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: 'https://spring-internship.firebaseio.com',
	storageBucket: 'spring-internship.appspot.com',
});

const db = admin.firestore();
const storage = new Storage();
const bucket = storage.bucket('spring-internship.appspot.com');

//----------------------------------------

app.use(express.static('public')); //only assets in public will be recognized
app.use(express.json()); //parsing json, limiting it to 1mb

//Setting doc reference
//get request
app.get('/api', (request, response) => {
	//get data from firebase
	//Reading the data
	db.collection('test')
		.get()
		.then((snapshot) => {
			let data = snapshot.docs.map((doc) => {
				let x = doc.data();
				x._id = doc.id;
				return x;
			});
			response.status(200).json(data);
		})
		.catch((err) => {
			err;
		});
});

//post request
app.post('/api', (request, response) => {
	const data = request.body;
	const timestamp = firebase.FieldValue.serverTimestamp();
	data.timestamp = timestamp;
	data._id = v4().split('-').pop();

	//converting data-url to image
	let imgString = data.image64;
	let trimmedImg = imgString.split(';base64,').pop();
	fs.writeFile(
		`./temp/${data._id}.png`,
		trimmedImg,
		{ encoding: 'base64' },
		function (err) {
			console.log('File created');
		}
	);
	//uploading files to firebase
	let localReadStream = fs.createReadStream(`./temp/${data._id}.png`);
	let remoteWriteStream = bucket.file(`${data._id}.png`).createWriteStream({
		metadata: {
			contentType: 'image/png',
			metadata: {
				custom: 'metadata',
			},
		},
	});
	localReadStream
		.pipe(remoteWriteStream)
		.on('error', function (err) {
			console.log(`Failed to upload: ${err}`);
		})
		.on('finish', function () {
			// The file upload is complete.
			console.log('upload finished');
		});

	//setting firestore image attribute to the url
	data.image64 = `https://storage.googleapis.com/spring-internship.appspot.com/${data._id}.png`;

	let docRef = db.collection('test');
	docRef.add(data); // can send to firestore
	//Deletes the local file
	fs.unlink(`./temp/${data._id}.png`, (err) => {
		if (err) throw err;
		console.log('deleting the local file');
	});
});

//Listening
app.listen(port, () => {
	console.log(`listening at ${port}`);
});
