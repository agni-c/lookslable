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
router.put("/photo", (req, res) => {
  console.log("in");
  var ref = database.ref("MYLOCATION/Photo");

  ref.update({
    bfirst: req.body.bfirst,
    bsecond: req.body.bsecond,
    bthird: req.body.bthird,
    bprice: req.body.bprice,
    pfirst: req.body.pfirst,
    psecond: req.body.psecond,
    pthird: req.body.pthird,
    pprice: req.body.pprice,
  });
  res.end();
});
router.put("/video", (req, res) => {
  console.log("in");
  var ref = database.ref("MYLOCATION/Video");

  ref.update({
    bfirst: req.body.bfirst,
    bsecond: req.body.bsecond,
    bthird: req.body.bthird,
    bprice: req.body.bprice,
    pfirst: req.body.pfirst,
    psecond: req.body.psecond,
    pthird: req.body.pthird,
    pprice: req.body.pprice,
  });
  res.end();
});
module.exports = router;
