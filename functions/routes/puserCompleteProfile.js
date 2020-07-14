const router = require('express').Router();
var admin = require('firebase-admin');

const db = admin.firestore();
const profileRef = db.collection('User Profile');

router.post('/', (req, res) => {
  console.log('working');
  try {
    const getProfiles = async () => {
      console.log(req.body.puid);
      const snapshots = await profileRef.doc(req.body.puid).get();
      console.log(snapshots.data().complete);
      if (snapshots.data().complete) {
        return res.json(snapshots.data().complete);
      } else {
        return res.json(false);
      }
    };
    getProfiles();
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
