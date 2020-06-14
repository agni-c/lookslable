var firebase = require('firebase');
require('dotenv').config();
const firebaseConfig = {
  apiKey: process.env.DAO_KEY,
  authDomain: 'spring-internship.firebaseapp.com',
  databaseURL: 'https://spring-internship.firebaseio.com',
  projectId: 'spring-internship',
  storageBucket: 'spring-internship.appspot.com',
  messagingSenderId: '871532525324',
  appId: '1:871532525324:web:a6a8cd49b945e5788c3b29',
  measurementId: 'G-S2BPC07SW6',
};
if (!firebase.app.length) {
  firebase.initializeApp(firebaseConfig);
}

var database = firebase.database();
module.exports = database;
