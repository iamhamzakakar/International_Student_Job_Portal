const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const Company = db.company;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {
    try {
        let user;
        let company;

        if (req.body.role === 'company') {
            company = new Company({
                name: req.body.name,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 8),
                website: req.body.website,
                phone: req.body.phone,
                address: req.body.address,
                role: req.body.role,
            });

            const savedCompany = await company.save();

            if (!savedCompany) {
                return res.status(500).send({ message: "Failed to save company details." });
            }
            return res.send({
                message: "Company was registered successfully!",
                data: savedCompany // Include the company details in the response
            });
        } else if (req.body.role === 'student') {
            user = new User({
                name: req.body.name,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 8),
                university: req.body.university,
                role: req.body.role,
            });
            const savedUser = await user.save();

            if (!savedUser) {
                return res.status(500).send({ message: "Failed to save user details." });
            }

            return res.send({
                message: "User was registered successfully!",
                data: savedUser // Include the user details in the response
            });
        } else {
            return res.status(400).send({ message: "Select Student or Company" });
        }
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};

const authenticateUser = async (model, email, password, role) => {
    const user = await model.findOne({ email });

    if (!user) {
        return null; // User not found
    }

    const passwordIsValid = bcrypt.compareSync(password, user.password);

    if (!passwordIsValid) {
        return null; // Invalid password
    }

    const token = jwt.sign({ id: user.id },
        config.secret,
        {
            algorithm: 'HS256',
            allowInsecureKeySizes: true,
            expiresIn: 86400 // 24 hours
        });

    return {
        id: user._id,
        username: user.username,
        email: user.email,
        role,
        accessToken: token
    };
};

exports.signin = async (req, res) => {
    try {

        const role = req.body.role;

        if (role !== 'company' && role !== 'student') {
            return res.status(400).send({ message: "Login as Student or Company" });
        }

        let userData;

        if (role === 'company') {
            userData = await authenticateUser(Company, req.body.email, req.body.password, 'company');
            if (!userData) {
                return res.status(404).send({ message: "Register as a Company." });
            }
        } else {
            userData = await authenticateUser(User, req.body.email, req.body.password, 'student');
            if (!userData) {
                return res.status(404).send({ message: "Register as a User" });
            }
        }

        res.status(200).send(userData);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};
