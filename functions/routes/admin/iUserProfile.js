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

const IprofileRef = db.collection('Iuser');

//----------------------------------------

router.get('/', async (req, res) => {
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
