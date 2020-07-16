const router = require("express").Router();
var firebase = require("firebase");
var database = require("./firebaseAppI");
require("dotenv").config();

router.post("/", (req, res) => {
  //giving the reference
  var ref = database.ref("CUSTOM_BOOKING");
  //create the object
  var obj = {
    address: req.body.address,
    PhoneNo: req.body.PhoneNo,
    date: req.body.date,
    lat: req.body.lat,
    lon: req.body.lon,
    key1: req.body.key1,
    key2: req.body.key2,
    //details: req.body.details,
  };

  ref.push(obj);
  res.end();
});

module.exports = router;
