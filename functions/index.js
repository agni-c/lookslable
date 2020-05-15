const functions = require("firebase-functions");
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
//-----------
const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();
db.settings({ timestampsInSnapshots: true });
//-----------

//middlewares
app.use(cors());
app.use(express.static("../public"));
app.use(express.json({ limit: "50mb" }));

//profile route
const profile = require("./routes/profile");
app.use("/api/profile", profile);

// webcam route
const webCam = require("./routes/webCam");
app.use("/api/webcam", webCam);

//Pics upload route
const picsUpload = require("./routes/picsUpload");
app.use("/api/upload", picsUpload);

//upload form details of my location
const uploaddetails = require("./routes/uploadDetails");
app.use("/api/uploaddetails",uploaddetails);

//popular location
const popularlocation = require("./routes/popularLocation");
app.use("/api/popularlocation",popularlocation);

const booking = require("./routes/booking");
app.use("/api/booking",booking);

const iuserevent = require("./routes/iuserevent");
app.use("/api/iuserevent",iuserevent);

const puserevent = require("./routes/puserevent");
app.use("/api/puserevent",puserevent);

//Listening
exports.app = functions.https.onRequest(app);
