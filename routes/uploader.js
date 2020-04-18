const router = require("express").Router();
const { Storage } = require("@google-cloud/storage"),
	storage = new Storage();
const multer = require("multer");
const multerGoogleStorage = require("multer-google-storage");
const uploadHandler = multer({
	storage: multerGoogleStorage.storageEngine(),
});
// Multer is required to process file uploads and make them available via
// req.files.

const bucket = storage.bucket("spring-internship.appspot.com");

router.post("/upload", uploadHandler.any(), (req, res, next) => {
	console.log(req.files);
	res.json(req.files);
});

module.exports = router;
