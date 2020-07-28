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
    driveLink: "NO",
    timestamp: new Date().toISOString().substring(0, 10), //timestamp
    link: "NO",
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
  ref.push(obj);
  res.send(true);
});

router.post("/", (req, res) => {
  console.log("in");
  var ref = database.ref("LANDMARK");
  ref
    .orderByChild("landmark")
    .equalTo(req.body.landmark)
    .once("child_added", (snapshot) => {
      res.send(snapshot.val().location);
    });
});

module.exports = router;
