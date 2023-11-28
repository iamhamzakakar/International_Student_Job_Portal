const mongoose = require("mongoose");

const Job = mongoose.model(
    "Job",
    new mongoose.Schema({
        title: String,
        type: String,
        company_id: String,
        link: String,
        description: String,
        cv: String,
        nature: String
    })
);

module.exports = Job;