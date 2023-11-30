const db = require("../models");
const Company = db.company;
const User = db.user;

const checkDuplicateEmail = async (req, res, next) => {
    try {
        const email = req.body.email;

        const userWithEmail = await User.findOne({ email });
        const companyWithEmail = await Company.findOne({ email });

        if (userWithEmail || companyWithEmail) {
            return res.status(400).send({ message: "Failed! Email is already in use!" });
        } else {
            next(); // Continue with the next middleware/route
        }
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};


const verifySignUp = {
    checkDuplicateEmail,
};

module.exports = verifySignUp;