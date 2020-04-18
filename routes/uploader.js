const router = require("express").Router();
const { Storage } = require("@google-cloud/storage"),
	storage = new Storage();
const multer = require("multer");

// Multer is required to process file uploads and make them available via
// req.files.
const m = multer({
	storage: multer.memoryStorage(),
	limits: {
		fileSize: 5 * 1024 * 1024, // no larger than 5mb
	},
});

const bucket = storage.bucket("spring-internship.appspot.com");

router.post("/", m.array("Photos", 10), (req, res, next) => {
	if (!req.file) {
		res.status(400).send("No file uploaded.");
		return;
	}

	// Create a new blob in the bucket and upload the file data.
	const blob = bucket.file(req.file.originalname);

	// Make sure to set the contentType metadata for the browser to be able
	// to render the image instead of downloading the file (default behavior)
	const blobStream = blob.createWriteStream({
		metadata: {
			contentType: req.file.mimetype,
		},
	});

	blobStream.on("error", (err) => {
		next(err);
		return;
	});

	blobStream.on("finish", () => {
		// The public URL can be used to directly access the file via HTTP.
		const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;

		// Make the image public to the web (since we'll be displaying it in browser)
		blob.makePublic().then(() => {
			res.status(200).send(`Success!\n Image uploaded to ${publicUrl}`);
		});
	});

	blobStream.end(req.file.buffer);
});

module.exports = router;
