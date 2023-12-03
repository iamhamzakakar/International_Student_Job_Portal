const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
        title: String,
        type: String,
        company_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Company',
                required: true
        },
        link: String,
        description: String,
        nature: String,
        experience: String,
        qualification: String,
        shift: String,
        skills: [String],
        created: {
                type: Date,
                default: Date.now // Set the default value to the current timestamp when a job is created
        }
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
