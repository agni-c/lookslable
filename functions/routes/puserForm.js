const router = require('express').Router();
var admin = require('firebase-admin');

const db = admin.firestore();
const profileRef = db.collection('User Profile');

router.post('/', (req, res) => {
  console.log('in');
  let json = new Array();
  const glaryRef = profileRef.doc(req.body.puid);

  var obj = {
    phoneNo: req.body.phoneNo,
    City: req.body.City,
    Address: req.body.Address,
    DriveLink: req.body.DriveLink,
    complete: true,
  };
  glaryRef.update(obj, { merge: true });
  res.end();
});

module.exports = router;
