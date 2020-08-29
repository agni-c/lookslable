const router = require("express").Router();
var firebase = require("firebase");
var database = require("./firebaseAppI");
require("dotenv").config();

router.post("/", (req, res) => {
  //giving the reference
  var ref = database.ref("CUSTOM_BOOKING");
  console.log(req.body);
  //create the object
  var obj = {
    address: req.body.address,
    PhoneNo: req.body.PhoneNo,
    date: req.body.date,
    lat: req.body.lat,
    lon: req.body.lon,
    key1: req.body.key1,
    key2: req.body.key2,
    name: req.body.user.displayName,
    iuid: req.body.user.uid,
    puid: "",
    link: "NO",
    driveLink: "NO",
    details: req.body.details,
    link1: "NO",
    link2: "NO",
    link3: "NO",
    link4: "NO",
    link5: "NO",
    link6: "NO",
    link7: "NO",
    link8: "NO",
    link9: "NO",
    link10: "NO",
  };

  var pobj = {
    address: req.body.address,
    PhoneNo: req.body.PhoneNo,
    date: req.body.date,
    lat: req.body.lat,
    lon: req.body.lon,
    key1: req.body.key1,
    key2: req.body.key2,
    name: req.body.user.displayName,
    iuid: req.body.user.uid,
    puid: "",
    link: "NO",
    driveLink: "NO",
    details: req.body.details,
    date1: "25/08/2020",
    date2: "26/08/2020",
    date3: "27/08/2020",
    date4: "28/08/2020",
    date5: "29/08/2020",
    value1: "125",
    value2: "250",
    value3: "324",
    value4: "350",
    value5: "409",
    agegroup: "0-100",
    sex: "No",
    location: "No",
  };

  if (req.body.key2 === "Premium") {
    ref.push(pobj);
  } else {
    ref.push(obj);
  }

  //console.log(ref.push(obj));

  res.send(true);
});
router.get("/", (req, res) => {
  //giving the reference
  var ref = database.ref("CUSTOM_BOOKING");
  ref
    .orderByChild("key2")
    .equalTo("basic")
    .once("value", (snapshot) => {
      res.send(snapshot.val());
    });
});

router.get("/premium", (req, res) => {
  //giving the reference
  var ref = database.ref("CUSTOM_BOOKING");
  ref
    .orderByChild("key2")
    .equalTo("Premium")
    .once("value", (snapshot) => {
      res.send(snapshot.val());
    });
});

module.exports = router;
