const profileController = require("../controllers/profile.controller");
const express = require('express');

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

    app.use('/', router);
};