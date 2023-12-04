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



exports.updateCompanyProfile = async (req, res) => {
    const companyId = req.params.id;
    const updatedData = req.body;

    try {
        const company = await Company.findByIdAndUpdate(companyId, updatedData, { new: true });
        if (!company) {
            return res.status(404).send({ message: "Company not found" });
        }
        res.send(company);
    } catch (error) {
        res.status(500).send({ message: "Error updating company profile" });
    }
};

const upload = require('../config/multer.config');

exports.uploadCompanyLogo = (req, res) => {
    const companyId = req.params.id;
    const uploadSingle = upload.single('logo');

    uploadSingle(req, res, async (err) => {

        if (err) {
            return res.status(500).send({ message: err.message });
        }

        if (!req.file) {
            return res.status(400).send({ message: "No file uploaded" });
        }

        try {
            const logoUrl = req.file.path;
            const company = await Company.findByIdAndUpdate(companyId, { logo: logoUrl }, { new: true });
            console.log(company);
            if (!company) {
                return res.status(404).send({ message: "Company not found" });
            }
            res.send(company);
        } catch (error) {
            console.error("Error occurred while updating the logo in the database: ", error);
            res.status(500).send({ message: "Error uploading logo", error: error.message });
        }
    });
};
exports.updateStudentProfile = async (req, res) => {
    const studentId = req.params.id;
    const updatedData = req.body;

    try {
        const student = await User.findByIdAndUpdate(studentId, updatedData, { new: true });
        if (!student) {
            return res.status(404).send({ message: "Student not found" });
        }
        res.json(student);
    } catch (error) {
        res.status(500).send({ message: "Error updating student profile", error: error.message });
    }
};
exports.uploadStudentCV = async (req, res) => {
    const studentId = req.params.id;

    if (!req.file) {
        return res.status(400).send({ message: "No file uploaded" });
    }

    try {
        const cvUrl = req.file.path; // Adjust this depending on how you want to store/access files
        const student = await User.findByIdAndUpdate(studentId, { cv: cvUrl }, { new: true });

        if (!student) {
            return res.status(404).send({ message: "Student not found" });
        }
        res.json(student);
    } catch (error) {
        res.status(500).send({ message: "Error uploading CV", error: error.message });
    }
};
exports.uploadStudentPhoto = async (req, res) => {
    const studentId = req.params.id;

    if (!req.file) {
        return res.status(400).send({ message: "No file uploaded" });
    }

    try {
        const photoUrl = req.file.path; // Adjust this depending on how you want to store/access files
        const student = await User.findByIdAndUpdate(studentId, { photo: photoUrl }, { new: true });

        if (!student) {
            return res.status(404).send({ message: "Student not found" });
        }
        res.json(student);
    } catch (error) {
        res.status(500).send({ message: "Error uploading photo", error: error.message });
    }
};
