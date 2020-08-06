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
              link1: req.body.link1,
              link2: req.body.link2,
              link3: req.body.link3,
              link4: req.body.link4,
              link5: req.body.link5,
              link6: req.body.link6,
              link7: req.body.link7,
              link8: req.body.link8,
              link9: req.body.link9,
              link10: req.body.link10,
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
router.put("/custom", (req, res) => {
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
          if (data[i].date === req.body.date) {
            database.ref("CUSTOM_BOOKING/" + key[i]).update({
              link1: req.body.link1,
              link2: req.body.link2,
              link3: req.body.link3,
              link4: req.body.link4,
              link5: req.body.link5,
              link6: req.body.link6,
              link7: req.body.link7,
              link8: req.body.link8,
              link9: req.body.link9,
              link10: req.body.link10,
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
