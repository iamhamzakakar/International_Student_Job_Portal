const mongoose = require("mongoose");

const Company = mongoose.model(
    "Company",
    new mongoose.Schema({
        name: String,
        email: String,
        password: String,
        role: String,
        website: String,
        address: String,
        logo: String,
        phone: String,
        description: String,
    })
);

module.exports = Company;