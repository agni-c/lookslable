const express = require('express');
const path = require('path');
const app = express();
const firebase = require('@google-cloud/firestore');
require('dotenv').config();
const port = process.env.PORT || 5000;
//Firestore init--------------------------

var admin = require('firebase-admin');

var serviceAccount = require('./spring-internship-firebase-adminsdk-7z0b1-ad7d9b5ea2.json');

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: 'https://spring-internship.firebaseio.com',
});

let db = admin.firestore();

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
	const data = request.body; //saving req in data
	const timestamp = firebase.FieldValue.serverTimestamp(); //saving current date
	data.timestamp = timestamp; //saving current time var in data obj
	// response.json(data); //sending response to debug
	//test firebase post
	let docRef = db.collection('test');
	docRef.add(data); // can send to firestore
});

//Listening
app.listen(port, () => {
	console.log(`listening at ${port}`);
});
