const router = require('express').Router();
var admin = require('firebase-admin');

const db = admin.firestore();
const profileRef = db.collection('User Profile');

router.get('/', (req, res) => {
  let json = new Array();
  const Ref = db.collectionGroup('Glary');
  Ref.get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        var obj = {
          id: doc.id,
        };
        var data = Object.assign(doc.data(), obj);
        json.push(data);
        // console.log(json);
      });
      return res.json(json);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
