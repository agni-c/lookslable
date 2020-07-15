var router = require("express").Router();
var firebase = require("firebase");
var database = require("./firebaseAppI");
router.get("/", (req, res) => {
  console.log("in");
  var ref = database.ref("MYLOCATION");
  console.log(req.body.data);
  ref.once("value", (snapshot) => {
    res.send(snapshot.val());
  });
});
router.put("/", (req, res) => {
  console.log("in");
  var ref = database.ref("MYLOCATION/Video/basic");

  ref.update({
    First: "hello",
    Second: "nikunj",
    Third: "How",
  });
  res.end();
});
module.exports = router;
