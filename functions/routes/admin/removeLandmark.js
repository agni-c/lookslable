var router = require("express").Router();
var database = require("../firebaseDAO");

router.delete("/", (req, res) => {
  var Ref = database.ref("LANDMARK");
  Ref.orderByChild("uuid")
    .equalTo(req.body.uuid)
    .on("child_added", (snapshoot) => {
      var key = snapshoot.key;
      database.ref("LANDMARK/" + key).remove();
    });
  res.send("deleted");
});

module.exports = router;
