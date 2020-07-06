var router = require("express").Router();
var firebase = require("firebase");
var database = require("./firebaseAppI");
router.post("/", (req, res) => {
  console.log("in");
  var ref = database.ref("BOOKING_DETAILS");
  console.log("uid" + req.body.puid);
  ref
    .orderByChild("puid")
    .equalTo(req.body.puid)
    .once(
      "value",
      (snapshot) => {
        res.json(Object.values(snapshot.val()));
      },
      (errorObject) => {
        console.log("The read failed: " + errorObject.code);
      }
    );
});

module.exports = router;
