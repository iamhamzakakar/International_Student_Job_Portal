// jobController.js
const Job = require('../models/job.model');

exports.createJob = async (req, res) => {
    try {


        // Check if the required fields are provided
        if (! req.body.title || ! req.body.type || ! req.body.company_id ) {
            return res.status(400).json({ message: 'Please provide all required fields' });
        }
        const cvPath = req.file ? req.file.path : '';


        // Create a new job instance
        const newJob = new Job({
            title: req.body.title,
            type: req.body.type,
            company_id: req.body.company_id,
            link: req.body.link,
            description: req.body.description,
            cv: cvPath, // Save the path to the uploaded CV file
            nature: req.body.nature,
        });


        await newJob.save();

        res.status(201).json({ message: 'Job created successfully', job: newJob });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
