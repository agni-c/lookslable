const router = require('express').Router();

var sessionstorage = require('sessionstorage');
const fireStore = require('@google-cloud/firestore');
const { v4 } = require('uuid');
const { Storage } = require('@google-cloud/storage');
//Firestore init--------------------------
var admin = require('firebase-admin');

const db = admin.firestore();
const storage = new Storage();
const bucket = storage.bucket('spring-internship.appspot.com');
//REFS
const profileRef = db.collection('User Profile');
const IprofileRef = db.collection('Iuser');

//----------------------------------------

//Creating A user profile

router.post('/:uid', (req, res, next) => {
  const profile = req.body;
  //session
  let uid = req.params.uid;
  let completeprofile = {
    complete: false,
  };

  sessionstorage.setItem('uid', uid);
  // req.session.uid = uid;

  const docRef = profileRef.doc(uid);
  // console.log(req.session.uid);

  docRef.set(profile, { merge: true });
  //docRef.update(completeprofile, { merge: true });
  console.log(uid);
  res.end();
});

//Creating A Iuser profile

router.post('/iuser/:uid', (req, res, next) => {
  const profile = req.body;
  //session
  let uid = req.params.uid;

  const docRef = IprofileRef.doc(uid);
  // console.log(req.session.uid);

  docRef.set(profile, { merge: true });

  console.log(uid);
  res.end();
});

router.get('/puser', async (req, res) => {
  const pUser = async () => {
    try {
      const snapshot = await profileRef.get();
      const docs = snapshot.docs.map((doc) => doc.data());
      res.json(docs);
    } catch (error) {
      console.log(error);
    }
  };
  pUser();
});

router.get('/iuser', async (req, res) => {
  const iUser = async () => {
    try {
      const snapshot = await IprofileRef.get();
      const docs = snapshot.docs.map((doc) => doc.data());
      res.json(docs);
    } catch (error) {
      console.log(error);
    }
  };
  iUser();
});
module.exports = router;
