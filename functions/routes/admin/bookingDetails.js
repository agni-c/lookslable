var router = require("express").Router();
var database = require("../firebaseDAO");

router.get("/", (req, res) => {
  var ref = database.ref("BOOKING_DETAILS");

  ref.once(
    "value",
    (snapshot) => {
      if (snapshot.exists()) {
        res.send(snapshot.val());
      } else {
        res.send("data not found");
      }
    },
    (errorObject) => {
      console.log("The read failed: " + errorObject.code);
    }
  );
});

router.post("", (req, res) => {});

module.exports = router;
