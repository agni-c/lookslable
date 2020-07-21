var router = require("express").Router();
var database = require("../firebaseDAO");

router.get("/", (req, res) => {
  var ref = database.ref("LANDMARK");

  ref.on(
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

module.exports = router;
