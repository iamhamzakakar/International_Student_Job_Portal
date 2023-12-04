// jobController.js
const Job = require('../models/job.model');
const ApplyJob = require('../models/appliedjob.model');


exports.createJob = async (req, res) => {
    try {

        if (! req.body.title || ! req.body.type || ! req.body.company_id ) {
            return res.status(400).json({ message: 'Please provide all required fields' });
        }
        const skills = req.body.skills ? req.body.skills : [];
        console.log(skills)
        const newJob = new Job({
            title: req.body.title,
            type: req.body.type,
            company_id: req.body.company_id,
            link: req.body.link,
            description: req.body.description,
            nature: req.body.nature,
            experience: req.body.experience,
            qualification: req.body.qualification,
            shift: req.body.shift,
            skills: skills

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
        const formattedJobs = jobs.map(job => {

            return {
                id: job._id,
                title: job.title,
                type: job.type,
                location: job.nature,
                qualification: job.qualification,
                experience: job.experience,
                postedOn: job.created,
                description: job.description,
                companyName: job.company_id ? job.company_id.name : null,
                skills:job.skills,
                shift: job.shift,
            };
        });

        res.status(200).json({ status: true, message: 'Jobs fetched successfully', jobData: formattedJobs });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: false, message: 'Internal Server Error' });
    }
};

exports.applyJob = async (req, res) => {
    try {

        const newApplyJob = new ApplyJob({
            position: req.body.title,
            user_id: req.body.user_id,
        });


        await newApplyJob.save();

        res.status(201).json({ message: 'Applied for Job Successfully', job: newApplyJob });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

exports.getAllAppliedJobs = async (req, res) => {
    try {

        const applyJob = await ApplyJob.find().populate('company_id');
        const formattedJobs = jobs.map(job => {

            return {
                id: job._id,
                title: job.title,
                type: job.type,
                location: job.nature,
                qualification: job.qualification,
                experience: job.experience,
                postedOn: job.created,
                description: job.description,
                companyName: job.company_id ? job.company_id.name : null,
                skills:job.skills,
                shift: job.shift,
            };
        });

        res.status(200).json({ status: true, message: 'Jobs fetched successfully', jobData: formattedJobs });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: false, message: 'Internal Server Error' });
    }
};