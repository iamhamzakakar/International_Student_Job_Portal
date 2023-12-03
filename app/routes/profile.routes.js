const profileController = require("../controllers/profile.controller");
const express = require('express');
const upload = require('../config/multer.config');

module.exports = function(app) {
    const router = express.Router();

    router.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, Content-Type, Accept"
        );
        next();
    });

    // Use GET instead of POST for fetching data
    router.get(
        "/api/get-company/:id",
        profileController.getCompanyById
    );
    router.get(
        "/api/get-student/:id",
        profileController.getStudentId
    );
    router.put("/api/update-company/:id", profileController.updateCompanyProfile);
    router.put('/api/update-student/:id', profileController.updateStudentProfile);
    router.post("/api/upload-logo/:id", upload.single('logo'), profileController.uploadCompanyLogo);
    router.post('/api/upload-student-photo/:id', upload.single('photo'), profileController.uploadStudentPhoto);
    router.post('/api/upload-student-cv/:id', upload.single('cv'), profileController.uploadStudentCV);
    app.use('/', router);
};