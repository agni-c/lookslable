const router = require("express").Router();
var admin = require("firebase-admin");

const db = admin.firestore();
const profileRef = db.collection("User Profile");

router.post("/", (req, res) => {
	let json = new Array();
    
    const glaryRef = profileRef.doc(req.body.puid).collection('Glary').doc(req.body.id);
    var obj ={
        trending : 1
    }
    glaryRef.update(obj)
    res.end();
	
});

module.exports = router;
