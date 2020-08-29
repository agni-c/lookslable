var router = require("express").Router();
var firebase = require("firebase");
var database = require("../firebaseDAO");

router.put("/", (req, res) => {
  console.log("in");
  var ref = database.ref("CUSTOM_BOOKING");
  ref
    .orderByChild("iuid")
    .equalTo(req.body.iuid)
    .on(
      "value",
      (snapshot) => {
        var data = Object.values(snapshot.val());
        var key = Object.keys(snapshot.val());

        for (var i = 0; i < data.length; i++) {
          if (
            data[i].date === req.body.date &&
            data[i].PhoneNo === req.body.PhoneNo
          ) {
            database.ref("CUSTOM_BOOKING/" + key[i]).update({
              date1: req.body.date1,
              date2: req.body.date2,
              date3: req.body.date3,
              date4: req.body.date4,
              date5: req.body.date5,
              value1: req.body.value1,
              value2: req.body.value2,
              value3: req.body.value3,
              value4: req.body.value4,
              value5: req.body.value5,
              agegroup: req.body.agegroup,
              sex: req.body.sex,
              location: req.body.location,
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
