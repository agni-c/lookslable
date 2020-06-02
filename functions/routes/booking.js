var router = require("express").Router();
var firebase = require("firebase");
var database = require("./firebaseAppI");
router.post("/:uid", (req, res) => {
  console.log("in");
  var ref = database.ref("BOOKING_DETAILS");
  var obj = {
    numberOfUsers: req.body.numberOfUsers,
    price: req.body.price,
    iUid: req.params.uid,
    //  Puid:'111',
    eventdate: {
      date: req.body.date,
      // time: req.body.time,
    },
    bookingdate: new Date().toISOString().substring(0, 10), //timestamp
  };
  ref.push(obj);
  res.end();
});

module.exports = router;
