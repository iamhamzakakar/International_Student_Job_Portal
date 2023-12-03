const mongoose = require("mongoose");

const Company = mongoose.model(
    "Company",
    new mongoose.Schema({
            name: {
                    type: String,
                    required: true
            },
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