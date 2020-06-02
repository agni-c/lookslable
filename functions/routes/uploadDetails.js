const router = require("express").Router();
var firebase = require("firebase");
var database = require("./firebaseAppI");
require("dotenv").config();

router.post("/", (req, res) => {
	//giving the reference
	var ref = database.ref("MY_LOCATION");
	//create the object
	var obj = {
		adress: req.body.address,
		PhoneNo: req.body.phoneno,
		date: req.body.date,
		time: req.body.time,
		location: {
			lat: req.body.lat,
			lon: req.body.lon,
		},
		order: req.body.order,
		price: req.body.price,
	};
	//push the object
	ref.push(obj);
	res.end();
});

module.exports = router;
