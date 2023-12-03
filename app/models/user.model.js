const mongoose = require("mongoose");

const User = mongoose.model(
    "User",
    new mongoose.Schema({
        username: String,
        email: String,
        password: String,
        role: String,
        university: String,
        cv: String,
        profile_picture: String
    })
);

module.exports = User;