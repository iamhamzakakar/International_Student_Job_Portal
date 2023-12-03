const Company = require('../models/company.model');
const User = require('../models/user.model');

exports.getCompanyById = async (req, res) => {
    try {
        const companyId = req.params.id;
        const company = await Company.findById(companyId);

        if (!company) {
            return res.status(404).send('Company not found');
        }

        res.json(company);
    } catch (error) {
        res.status(500).send('Error occurred while fetching the company data');
    }
};

exports.getStudentId = async (req, res) => {
    try {
        const studentId = req.params.id;
        const student = await User.findById(studentId);
        if (!student) {
            return res.status(404).send('Student not found');
        }

        res.json(student);
    } catch (error) {
        res.status(500).send('Error occurred while fetching the student data');
    }
};
