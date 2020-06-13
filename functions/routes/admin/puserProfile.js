const router = require('express').Router();
var admin = require('firebase-admin');

const db = admin.firestore();
const profileRef = db.collection('User Profile');

router.get('/', (req, res) => {
  console.log('working');
  try {
    const getProfiles = async () => {
      const snapshots = await profileRef.get();
      const docs = snapshots.docs.map((doc) => doc.data());
      return res.json(docs);
    };
    getProfiles();
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
