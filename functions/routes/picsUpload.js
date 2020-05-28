const router = require("express").Router();
var sessionstorage = require("sessionstorage");
const { filesUpload } = require("../middleware");
const util = require("util");
var admin = require("firebase-admin");

const db = admin.firestore();
const profileRef = db.collection("User Profile");

// let uid = req.session.uid;
/*
 * post - /api/upload/:uid
 * This module uploads files to cloud storage of google
 * returns json after saving file reference with form data
 */
router.post("/:uid", filesUpload, (req, res, next) => {
  // let uid = req.session.uid;
  // let uid = sessionstorage.getItem("uid");
  let uid = req.params.uid;
  const glaryRef = profileRef.doc(uid).collection("Glary");
  const accountRef = profileRef.doc(uid);
  const files = req.files;

  const session = {
    puid: uid,
    images: encodeURI(
      `https://storage.googleapis.com/spring-internship.appspot.com/${files.originalname}`
    ),
    names: files.originalname,
    landmark: req.body.landmark,
    // location: req.body.location,
    // price: req.body.price,
    // time: req.body.time,
  };
  //Adding to Glary sub collection
  glaryRef.add(session);
  //Creating an array in profile which will hold all the landmarks
  accountRef.update({
    landmark: admin.firestore.FieldValue.arrayUnion(
      session.landmark
    ),
  });
  res.end();
  // res.json(session);
});

/**
 * get single p user data of gallery collection
 * get -  /api/upload/usergallery/:uid
 */
router.get("/usergallery/:uid", (req, res, next) => {
  // let uid = req.session.uid;
  let uid = sessionstorage.getItem("uid");
  console.log("Hi this is user gallery", uid);

  const glaryRef = profileRef.doc(uid).collection("Glary");
  // console.log(uid);
  const userGlary = async () => {
    const snapshot = await glaryRef.get();
    const docs = snapshot.docs.map((doc) => doc.data());
    res.json(docs);
  };
  userGlary();
});

/**
 * get all the  user data of gallery collection
 * get -  /api/upload/allUsergallery
 */
router.get("/allUsergallery", (req, res, next) => {
  let json = new Array();
  const Ref = db.collectionGroup("Glary");
  Ref.get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        json.push(doc.data());
      });
      return res.json(json);
    })
    .catch((err) => console.log(err));
});

// router.post("/uid", (req, res) => {
// 	console.log(req.body);
// 	uid = req.body.uid;
// });

module.exports = router;
