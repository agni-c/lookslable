var router = require("express").Router();

var firebase = require("firebase");

var database = require("./firebaseDAO");

router.post("/", (req, res) => {
  var ref = database.ref("BOOKING_DETAILS");
  console.log(req.body.iuid);
  ref
    .orderByChild("iuid")
    .equalTo(req.body.iuid)
    .once(
      "value",
      (snapshot) => {
        //   var newPostKey = snapshot.key;

        const data = Object.values(snapshot.val());
        const keys = Object.keys(snapshot.val());
        res.send(keys);
        for (var i in data) {
          if (
            data[i].bookingdate === req.body.bookingdate &&
            data[i].time === req.body.time
          ) {
            database.ref("BOOKING_DETAILS/" + keys[i]).update({
              rating: req.body.rating,
            });
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
  console.log(req.body.iuid);
  ref
    .orderByChild("iuid")
    .equalTo(req.body.iuid)
    .once(
      "value",
      (snapshot) => {
        //   var newPostKey = snapshot.key;

        const data = Object.values(snapshot.val());
        const keys = Object.keys(snapshot.val());
        res.send(keys);
        for (var i in data) {
          if (
            data[i].date === req.body.date &&
            data[i].puid === req.body.puid
          ) {
            database.ref("CUSTOM_BOOKING/" + keys[i]).update({
              rating: req.body.rating,
            });
          }
        }
      },
      (errorObject) => {
        console.log("The read failed: " + errorObject.code);
      }
    );
});

module.exports = router;
