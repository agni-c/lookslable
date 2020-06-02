var router = require("express").Router();
var firebase = require("firebase");
var database = require("./firebaseAppI");
router.post("/:uid", (req, res) => {
	console.log("in");
	var ref = database.ref("BOOKING_DETAILS");
	var obj = {
		Name: req.body.name,
		Numbersofuser: req.body.numbersofuser,
		Price: req.body.price,
		Iuid: req.params.uid,
		//  Puid:'111',
		Eventdate: req.body.eventdate,
		bookingdate: new Date().toISOString().substring(0, 10),
	};
	ref.push(obj);
	res.end();
});

module.exports = router;
