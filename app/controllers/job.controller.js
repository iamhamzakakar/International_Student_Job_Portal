// jobController.js
const Job = require('../models/job.model');

exports.createJob = async (req, res) => {
    try {

        console.log(req.body)
        if (! req.body.title || ! req.body.type || ! req.body.company_id ) {
            return res.status(400).json({ message: 'Please provide all required fields' });
        }

        const newJob = new Job({
            title: req.body.title,
            type: req.body.type,
            company_id: req.body.company_id,
            link: req.body.link,
            description: req.body.description,
            nature: req.body.nature,
        });


        await newJob.save();

        res.status(201).json({ message: 'Job created successfully', job: newJob });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
exports.getAllJobs = async (req, res) => {
    try {
        const jobs = await Job.find().populate('company_id');

        console.log('Populated Jobs:', jobs);

        const formattedJobs = jobs.map(job => {
            console.log('Company Object:', job.company_id);

            return {
                _id: job._id,
                title: job.title,
                type: job.type,
                nature: job.nature,
                created: job.created,
                companyName: job.company_id ? job.company_id.name : null,
            };
        });

        res.status(200).json({ status: true, message: 'Jobs fetched successfully', jobs: formattedJobs });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: false, message: 'Internal Server Error' });
    }
};