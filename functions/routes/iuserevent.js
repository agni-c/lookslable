var router = require("express").Router();
var firebase = require("firebase");
var database = require("./firebaseAppI");
router.post("/", (req, res) => {
  console.log("in");
  var ref = database.ref("BOOKING_DETAILS");
  ref
    .orderByChild("iuid")
    .equalTo("oFf5YC7ARfcTM19y10XNyvdg1JQ2")
    .once(
      "value",
      (snapshot) => {
        res.json(snapshot.val());
      },
      (errorObject) => {
        console.log("The read failed: " + errorObject.code);
      }
    );
});

module.exports = router;
