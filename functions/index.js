const functions = require("firebase-functions");
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

//-----------
const admin = require("firebase-admin");
admin.initializeApp({
  storageBucket: "spring-internship.appspot.com",
});

const db = admin.firestore();
db.settings({ timestampsInSnapshots: true });

//middlewares
app.use(cors());

app.use(express.json({ limit: "50mb" }));

//-----------------------------

//profile route
const profile = require("./routes/profile");
app.use("/api/profile", profile);

//Testing purposes
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

// set trending photos
const trendingphotos = require("./routes/admin/trendingPhotos");
app.use("/api/admin/trendingPhotos", trendingphotos);

// remove seted trending photos
const deapprovedphoto = require("./routes/admin/deapprovedPhotos");
app.use("/api/admin/deapprovedphoto", deapprovedphoto);

//popular location
const popularlocation = require("./routes/popularLocation");
app.use("/api/popularlocation", popularlocation);

const booking = require("./routes/booking");
app.use("/api/booking", booking);

//give the perticuler i-user event
const iuserevent = require("./routes/iuserevent");
app.use("/api/iuserevent", iuserevent);

//give the perticuler p-user event
const puserevent = require("./routes/puserevent");
app.use("/api/puserevent", puserevent);

//booking deatils upload
const landmark = require("./routes/landmark");
app.use("/api/landmark", landmark);

//mylocation text
const mylocation = require("./routes/mylocation");
app.use("/api/mylocation", mylocation);

//custom booking
const custombooking = require("./routes/customBooking");
app.use("/api/custombooking", custombooking);

// rating
const rating = require("./routes/rating");
app.use("/api/rating", rating);

//upolad drive link
const uploadlink = require("./routes/uploadlink");
app.use("/api/uploadlink", uploadlink);
//iuserprofile
const iuserProfile = require("./routes/admin/iUserProfile");
app.use("/api/iuserprofile", iuserProfile);

// after signup puser form
const puserform = require("./routes/puserForm");
app.use("/api/puserform", puserform);

const iuseruploadlink = require("./routes/iuserUploadLink");
app.use("/api/iuseruploadlink", iuseruploadlink);

//profile fo puser is complete or not
const pusercompleteprofile = require("./routes/puserCompleteProfile");
app.use("/api/pusercompleteprofile", pusercompleteprofile);

//puser profile
const PuserProfile = require("./routes/admin/puserProfile");
app.use("/api/admin/puserprofile", PuserProfile);

//remove booking
const removeBooking = require("./routes/admin/removeBooking");
app.use("/api/admin/removebooking", removeBooking);

//remove landmark
const removeLandmark = require("./routes/admin/removeLandmark");
app.use("/api/admin/removelandmark", removeLandmark);

//Iuser profile
const iuserProfiles = require("./routes/admin/iUserProfile");
app.use("/api/admin/iuserprofile", iuserProfiles);

// booking details
const bookingDetails = require("./routes/admin/bookingDetails");
app.use("/api/admin/bookingdetails", bookingDetails);

//landmark Details
const landmarkDetails = require("./routes/admin/landmarkDetails");
app.use("/api/admin/landmarkdetails", landmarkDetails);

//Approved Photos
const approvedPhotos = require("./routes/admin/approvedPhotos");
app.use("/api/admin/approved-photos", approvedPhotos);

// asssign booking to puser
const asignpuser = require("./routes/admin/asigningPuser");
app.use("/api/admin/asignpuser", asignpuser);

const uploadlinks = require("./routes/admin/uploadLinks");
app.use("/api/admin/uploadlinks", uploadlinks);

const graphvalues = require("./routes/admin/customBooking");
app.use("/api/admin/graphvalue", graphvalues);

//Listening
exports.app = functions.https.onRequest(app);
