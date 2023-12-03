const contactController = require("../controllers/contactus.controller");
const express = require('express');

module.exports = function(app) {
    const router = express.Router();

    router.use(function(req, res, next) {
        // Set any headers you need for the contact route
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, Content-Type, Accept"
        );
        next();
    });

    router.post(
        "/api/contact",
        [
            // Add any middleware you need for contact request
            // For example, verifySignUp middleware if needed
        ],
        contactController.postContactRequest
    );

    // Use the router with the provided app instance
    app.use('/', router);
};
