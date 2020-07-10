/* Route => /api/upload */
const router = require('express').Router();

// var sessionstorage = require("sessionstorage");
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
let cookieParser = require('cookie-parser');
//----------------------------------------
router.use(cookieParser());

/**
 * get - /api/webcam/:uid
 * returns json data from firestore
 */
router.get('/:uid', (request, response, next) => {
  let uid = request.params.uid;
  // let uid = request.session.uid;
  const webCamRef = profileRef.doc(uid).collection('Web Cam');
  // response.json(uid);
  webCamRef
    .get()
    .then((snapshot) => {
      let data = snapshot.docs.map((doc) => {
        let x = doc.data();
        return x;
      });
      return response.status(200).json(data);
    })
    .catch((err) => {
      err;
    });
});

/**
 *
 * post - /api/webcam/:uid
 * clicks photo saves to cloud storage saves to data base
 */

router.post('/:uid', (request, response, next) => {
  // let uid = request.session.uid;

  let uid = request.params.uid;

  const data = request.body;
  console.log('in backend' + data);

  data._id = v4().split('-').pop();
  console.log('id ' + data._id);
  response.cookie('hello', 'hello');
  response.app.set('id', data._id);
  //  selfieID(data._id);
  //----------------
  const webCamRef = profileRef.doc(uid).collection('Web Cam').doc(data._id);

  //converting data-url to image
  let imgString = data.image64.split(';base64,').pop();

  const bufferImg = Buffer.from(imgString, 'base64');

  // Upload the image to the bucket
  const file = bucket.file(`${data._id}.png`);
  const file_stream = file.createWriteStream({
    contentType: 'image/png',
    resumable: false,
  });
  file_stream.write(bufferImg, (err) => {
    if (err) {
      console.log(err);
    }
    //setting firestore image attribute to the url
    data.image64 = encodeURI(
      `https://storage.googleapis.com/spring-internship.appspot.com/${data._id}.png`
    );
    webCamRef.set(data, { merge: true }); // can send to firestore
    console.log('upload finished');
  });
  file_stream.end();
  response.end();
});

/**
 * post - /api/webcam/form
 * sends fields  to data base where selfie resides
 */
router.put('/form/:uid', (req, res, next) => {
  console.log(JSON.stringify(req.cookies.hello));
  const webCamRef = profileRef
    .doc(req.params.uid)
    .collection('Web Cam')
    .doc('025cef676bae');
  //set the form in an object
  const infoData = {
    landmark: req.body.landmark,
    location: {
      lat: req.body.lat,
      long: req.body.long,
    },
    price: req.body.price,
    // time: req.body.time,
  };
  //save it to doc where webcam pic resides
  console.log('infodata' + infoData);
  webCamRef.set(infoData, { merge: true });
  res.end();
});

module.exports = router;
