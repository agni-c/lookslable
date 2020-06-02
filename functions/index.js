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

const landmark = require("./routes/landmark");
app.use("/api/landmark", landmark);
// booking detalis
const bookingdetails = require("./routes/admin/bookingDetalis");
app.use("/api/admin/booking",bookingdetails);
//landmark details
const landmarkdetails = require("./routes/admin/landmarkDetails");
app.use("/api/admin/landmark",landmarkdetails);
//Listening

exports.app = functions.https.onRequest(app);
