const router = require("express").Router();
var firebase = require("firebase");
var database = require("./firebaseAppI");
require("dotenv").config();

router.post("/", (req, res) => {
	//giving the reference
	var ref = database.ref("MY_LOCATION");
	//create the object
	var obj = {
		Email: req.body.email,
		Adress: req.body.address,
		PhoneNo: req.body.phoneno,
		Event: req.body.event,
		Date: req.body.date,
		Time: req.body.time,
	};
	//push the object
	ref.push(obj);
	res.end();
});

module.exports = router;
