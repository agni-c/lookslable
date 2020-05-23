var router = require("express").Router();

var firebase = require("firebase");

var database = require("./firebaseDAO");
const { v4 } = require("uuid");

/**
 * post - api/landmark/
 * desc= takes data about location and landmark and saves it to database (realTime)
 */
router.post("/", (req, res) => {
  console.log("called");
  var ref = database.ref("LANDMARK");

  var obj = {
    uuid: v4().split("-").pop(),
    puid: req.body.puid,
    location: {
      lat: req.body.lat,
      long: req.body.long,
    },
    landmark: req.body.landmark,
    price: req.body.price,
  };

  ref.push(obj);
  res.send(obj);
});
/**
 * get - api/landmark/:puid
 * desc= takes data about location and landmark and saves it to database (realTime)
 */
router.get("/:puid", (req, res) => {
  var ref = database.ref("LANDMARK");

  ref
    .orderByChild("puid")
    .equalTo(req.params.puid)
    .once(
      "value",
      (snapshot) => {
        res.json(snapshot.val());
      },
      (errorObject) => {
        console.log("The read failed: " + errorObject.code);
      }
    );
});
router.post("/update/:uuid", (req, res) => {
  var ref = database.ref("LANDMARK");
  ref
    .orderByChild("uuid")
    .equalTo(req.params.uuid)
    .on(
      "child_added",
      (snapshot) => {
        var newPostKey = snapshot.key;
        var json = JSON.stringify(snapshot);
        var FinalJson = JSON.parse(json);

        database.ref("LANDMARK/" + newPostKey).update({
          price: req.body.price,
          landmark: req.body.landmark,
        });
        res.end("change successfull");
      },
      (errorObject) => {
        console.log("The read failed: " + errorObject.code);
      }
    );
});
module.exports = router;
