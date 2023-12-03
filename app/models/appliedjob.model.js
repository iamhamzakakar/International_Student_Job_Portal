const mongoose = require("mongoose");

const appliedjobSchema = new mongoose.Schema({
    position: String,
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    created: {
        type: Date,
        default: Date.now // Set the default value to the current timestamp when a job is created
    }
});

const Appliedjob = mongoose.model("Appliedjob", appliedjobSchema);
module.exports = Job;
