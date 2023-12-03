const mongoose = require("mongoose");

const Contactus = mongoose.model(
    "Contactus",
    new mongoose.Schema({
        name: String,
        email: String,
        message: String,
    })
);

module.exports = Contactus;