var router = require('express').Router();
var database = require('../firebaseDAO');

router.get('/', (req, res) => {
  var ref = database.ref('BOOKING_DETAILS');

  ref.once(
    'value',
    (snapshot) => {
      res.send(snapshot.val());
    },
    (errorObject) => {
      console.log('The read failed: ' + errorObject.code);
    }
  );
});

module.exports = router;
