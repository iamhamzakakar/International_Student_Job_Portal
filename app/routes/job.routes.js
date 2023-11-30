const { verifySignUp } = require("../middlewares");
const jobController = require("../controllers/job.controller");
const multer = require('multer');
const express = require('express');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Set the destination folder for file uploads
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Set the filename
    }
});

const upload = multer({ storage: storage });

module.exports = function(app) {
    const router = express.Router();

    router.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    router.post(
        "/api/post-job",
        [
            // Add any middleware you need for job creation
        ],
        upload.single('cv'),
        jobController.createJob
    );

    // Use the router with the provided app instance
    app.use('/', router);
};
