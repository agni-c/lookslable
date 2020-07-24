var router = require("express").Router();
var database = require("./firebaseDAO");

router.post("/", (req, res) => {
  var ref = database.ref("BOOKING_DETAILS");
  ref
    .orderByChild("iuid")
    .equalTo(req.body.iuid)
    .once(
      "value",
      (snapshot) => {
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
      }
    );
  res.send("updated");
});

module.exports = router;
