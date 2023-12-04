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
        default: Date.now
    }
});

const Appliedjob = mongoose.model("Appliedjob", appliedjobSchema);
module.exports = Appliedjob;
