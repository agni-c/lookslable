var router = require("express").Router();
var firebase = require("firebase");
var database = require("./firebaseAppI");
router.post("/:iuid", (req, res) => {
  console.log("in");
  var ref = database.ref("BOOKING_DETAILS");
  console.log(req.body.data);

  var obj = {
    numberOfUsers: req.body.numberOfUsers,
    price: req.body.price,
    iuid: req.params.iuid,
    puid: req.body.puid,
    phoneNo: req.body.phoneNo,
    landmark: req.body.landmark,
    bookingdate: req.body.date.toString().substring(0, 10),
    time: req.body.date.toString().substring(11, 17),
    timestamp: new Date().toISOString().substring(0, 10), //timestamp
  };
  ref.push(obj);
  res.end();
});

module.exports = router;
