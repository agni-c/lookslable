var router = require("express").Router();
var firebase = require("firebase");
var database = require("../firebaseDAO");

router.put("/", (req, res) => {
  var ref = database.ref("BOOKING_DETAILS");
  ref
    .orderByChild("iuid")
    .equalTo(req.body.iuid)
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
            data[i].time === req.body.time
          ) {
            database.ref("BOOKING_DETAILS/" + key[i]).update({
              puid: req.body.puid,
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

router.put("/", (req, res) => {
  var ref = database.ref("CUSTOM_BOOKING");
  ref
    .orderByChild("iuid")
    .equalTo(req.body.iuid)
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
            data[i].time === req.body.time
          ) {
            database.ref("BOOKING_DETAILS/" + key[i]).update({
              puid: req.body.puid,
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

module.exports = router;
