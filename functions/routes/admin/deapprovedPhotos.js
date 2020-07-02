const router = require("express").Router();
var admin = require("firebase-admin");

const db = admin.firestore();
const profileRef = db.collection("User Profile");

router.post("/", (req, res) => {
  let json = new Array();
  // const Ref = admin.firestore.document('/Users Profile/ID6d5U2K19OaPeUf24ndCkuBhml2/Glary');
  const glaryRef = profileRef
    .doc(req.body.puid)
    .collection("Glary")
    .doc(req.body.id);
  var obj = {
    trending: false,
  };
  glaryRef.update(obj, { merge: true });
  res.end();
});

module.exports = router;
