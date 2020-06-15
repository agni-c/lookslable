const router = require("express").Router();
var admin = require("firebase-admin");

const db = admin.firestore();
const profileRef = db.collection("User Profile");

router.get("/", (req, res) => {
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

module.exports = router;
