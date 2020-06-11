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

//middlewares
app.use(cors());

app.use(express.json({ limit: "50mb" }));

//-----------------------------

//profile route
const profile = require("./routes/profile");
app.use("/api/profile", profile);

app.get("/", (req, res) => {
	res.send("🌎🌎");
});
// webcam route
const webCam = require("./routes/webCam");
app.use("/api/webcam", webCam);

//Pics upload route 
const picsUpload = require("./routes/picsUpload");
app.use("/api/upload", picsUpload);

//upload form details of my location
const uploaddetails = require("./routes/uploadDetails");
app.use("/api/uploaddetails", uploaddetails);

//popular location
const popularlocation = require("./routes/popularLocation");
app.use("/api/popularlocation", popularlocation);

//booking route
const booking = require("./routes/booking");
app.use("/api/booking", booking);

//I user event
const iuserevent = require("./routes/iuserevent");
app.use("/api/iuserevent", iuserevent);

//puser event
const puserevent = require("./routes/puserevent");
app.use("/api/puserevent", puserevent);

//landmark
const landmark = require('./routes/landmark');
app.use('/api/landmark',landmark);
//Listening
exports.app = functions.https.onRequest(app);
