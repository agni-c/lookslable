const router = require('express').Router();
var firebase = require('firebase');
var database = require('./firebaseAppI');
require('dotenv').config();

router.post('/', (req, res) => {
  //giving the reference
  var ref = database.ref('CUSTOM_BOOKING');
  console.log(req.body);
  //create the object
  var obj = {
    address: req.body.address,
    PhoneNo: req.body.PhoneNo,
    date: req.body.date,
    lat: req.body.lat,
    lon: req.body.lon,
    key1: req.body.key1,
    key2: req.body.key2,
    name: req.body.user.displayName,
    iuid: req.body.user.uid,
    puid: '',
    details: req.body.details,
  };

  console.log(ref.push(obj));

  res.send(true);
});
router.get('/', (req, res) => {
  //giving the reference
  var ref = database.ref('CUSTOM_BOOKING');
  ref.once('value', (snapshot) => {
    res.send(snapshot.val());
  });
});

module.exports = router;
