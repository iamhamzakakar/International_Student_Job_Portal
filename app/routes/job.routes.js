const { verifySignUp } = require("../middlewares");
const jobController = require("../controllers/job.controller");
const multer = require('multer');
const express = require('express');

const { v4: uuidv4 } = require('uuid');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Set the destination folder for file uploads
    },
    filename: function (req, file, cb) {
        const uniqueIdentifier = uuidv4();
        cb(null, `${uniqueIdentifier}-${file.originalname}`); // Set the filename with a unique identifier
    }
});

const upload = multer({ storage: storage });

module.exports = function (app) {
    const router = express.Router();

    router.use(function (req, res, next) {
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
    router.get(
        "/api/get-job",
        [
            // Add any middleware you need for job retrieval
        ],
        jobController.getAllJobs
    );
    router.get(
        "/api/get-applied-job/:id",
        [
            // Add any middleware you need for job retrieval
        ],
        jobController.getAllAppliedJobs
    );
    router.post(
        "/api/apply-job",
        [
            // Add any middleware you need for job retrieval
        ],
        jobController.applyJob
    );
    // Use the router with the provided app instance
    app.use('/', router);
};