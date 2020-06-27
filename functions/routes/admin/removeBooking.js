var router = require("express").Router();
var database = require("../firebaseDAO");

router.delete("/", (req, res) => {
  var ref = database.ref("BOOKING_DETAILS/" + req.body.key).remove();
  res.send("deleted");
});

module.exports = router;
