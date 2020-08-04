var router = require("express").Router();
var firebase = require("firebase");
var database = require("./firebaseDAO");

router.put("/", (req, res) => {
  var ref = database.ref("BOOKING_DETAILS");
  ref
    .orderByChild("puid")
    .equalTo(req.body.puid)
    .on(
      "value",
      (snapshot) => {
        var data = Object.values(snapshot.val());
        var key = Object.keys(snapshot.val());
        console.log(data);
        console.log(key);
        for (var i = 0; i < data.length; i++) {
          if (
            data[i].bookingdate === req.body.bookingdate &&
            data[i].time === req.body.time &&
            data[i].iuid === req.body.iuid
          ) {
            database.ref("BOOKING_DETAILS/" + key[i]).update({
              driveLink: req.body.driveLink,
            });
            res.end("changed");
          }
        }
      },
      (errorObject) => {
        console.log("The read failed: " + errorObject.code);
      }
    );
});
router.post("/custom", (req, res) => {
  var ref = database.ref("CUSTOM_BOOKING");
  ref
    .orderByChild("puid")
    .equalTo(req.body.puid)
    .on(
      "value",
      (snapshot) => {
        var data = Object.values(snapshot.val());
        var key = Object.keys(snapshot.val());
        console.log(data);
        console.log(key);
        for (var i = 0; i < data.length; i++) {
          if (
            data[i].date === req.body.date &&
            data[i].iuid === req.body.iuid
          ) {
            database.ref("CUSTOM_BOOKING/" + key[i]).update({
              driveLink: req.body.driveLink,
            });
            res.end("changed");
          }
        }
      },
      (errorObject) => {
        console.log("The read failed: " + errorObject.code);
      }
    );
});
module.exports = router;
