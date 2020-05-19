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
//-------------session-------------
//TODO change it to cookie session
const cookieParser = require("cookie-parser");
const { Firestore } = require("@google-cloud/firestore");
const { FirestoreStore } = require("@google-cloud/connect-firestore");
const session = require("express-session");

app.set("trust proxy", 1); // trust first proxy
app.use(
	session({
		store: new FirestoreStore({
			dataset: new Firestore({
				kind: "express-sessions",
			}),
		}),
		secret: "my-secret",
		resave: true,
		saveUninitialized: false,
		cookie: { maxAge: 60000, secure: false, httpOnly: false },
	})
);
app.use((req, res, next) => {
	req.session.uid = null;
	next();
});
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

//Listening
exports.app = functions.https.onRequest(app);
