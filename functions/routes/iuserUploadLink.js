var router = require("express").Router();
var database = require("./firebaseDAO");

router.put("/", (req, res) => {
  var ref = database.ref("BOOKING_DETAILS");
  ref
    .orderByChild("iuid")
    .equalTo(req.body.iuid)
    .once(
      "value",
      (snapshot) => {
        console.log(snapshot.val());
        const data = Object.values(snapshot.val());
        const keys = Object.keys(snapshot.val());

        for (var i in data) {
          if (
            data[i].bookingdate === req.body.bookingdate &&
            data[i].time === req.body.time
          ) {
            database.ref("BOOKING_DETAILS/" + keys[i]).update({
              link: req.body.link,
            });
          }
        }
      },
      (errorObject) => {
        console.log("The read failed: " + errorObject.code);
        res.send(false);
      }
    );
  res.send(true);
});
router.put("/custom", (req, res) => {
  var ref = database.ref("CUSTOM_BOOKING");
  ref
    .orderByChild("iuid")
    .equalTo(req.body.iuid)
    .once(
      "value",
      (snapshot) => {
        console.log(snapshot.val());
        const data = Object.values(snapshot.val());
        const keys = Object.keys(snapshot.val());

        for (var i in data) {
          if (
            data[i].date === req.body.date &&
            data[i].puid === req.body.puid
          ) {
            var response = database.ref("CUSTOM_BOOKING/" + keys[i]).update({
              link: req.body.link,
            });
          }
        }
      },
      (errorObject) => {
        console.log("The read failed: " + errorObject.code);
        res.send(false);
      }
    );
  res.send(true);
});

module.exports = router;
