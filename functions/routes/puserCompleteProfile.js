const router = require("express").Router();
var admin = require("firebase-admin");

const db = admin.firestore();
const profileRef = db.collection("User Profile");

router.get("/", (req, res) => {
  console.log("working");
  try {
    const getProfiles = async () => {
      const snapshots = await profileRef.doc(req.body.puid).get();
      return res.json(snapshots.data().complete);
    };
    getProfiles();
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
