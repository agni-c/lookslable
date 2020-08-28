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
        if (snapshot.exists()) {
          res.json(Object.values(snapshot.val()));
        } else {
          res.send(false);
        }
      },
      (errorObject) => {
        console.log("The read failed: " + errorObject.code);
      }
    );
});
router.post("/custom", (req, res) => {
  console.log("in");
  var ref = database.ref("CUSTOM_BOOKING");
  console.log("uid" + req.body.puid);
  ref
    .orderByChild("puid")
    .equalTo(req.body.puid)
    .once(
      "value",
      (snapshot) => {
        if (snapshot.exists()) {
          res.json(Object.values(snapshot.val()));
        } else {
          res.send(false);
        }
      },
      (errorObject) => {
        console.log("The read failed: " + errorObject.code);
      }
    );
});
module.exports = router;
