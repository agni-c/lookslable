var firebase = require("firebase");

const firebaseConfig = {
	apiKey: "AIzaSyA2NqT0Shr_8yb-YQWWCh3b-1DnFUi4ZhI",
	authDomain: "spring-internship.firebaseapp.com",
	databaseURL: "https://spring-internship.firebaseio.com",
	projectId: "spring-internship",
	storageBucket: "spring-internship.appspot.com",
	messagingSenderId: "871532525324",
	appId: "1:871532525324:web:a6a8cd49b945e5788c3b29",
	measurementId: "G-S2BPC07SW6",
};
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
module.exports = database;
