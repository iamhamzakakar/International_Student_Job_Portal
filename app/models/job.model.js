const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
        title: String,
        type: String,
        company_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Company'
        },
        link: String,
        description: String,
        cv: String,
        nature: String
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
