const mongoose = require("mongoose");

const User = mongoose.model(
    "User",
    new mongoose.Schema({
        name: String,
        email: String,
        password: String,
        role: String,
        university: String,
        cv: String,
        photo: String,
        aboutMe: String
    })
);

module.exports = User;