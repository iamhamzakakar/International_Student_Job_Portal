const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const User = db.user;
const  verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send({ message: "No token provided!" });
    }

    jwt.verify(token,
        config.secret,
        (err, decoded) => {
            if (err) {
                return res.status(401).send({
                    message: "Unauthorized!",
                });
            }
            req.userId = decoded.id;
            next();
        });
};

const isStudent = (req, res, next) => {
    User.findById(req.userId)
        .then(user => {
            if (user && user.role === 'student') {
                // User is a student
                return next(); // continue to the next middleware or route handler
            } else {
                // User is not a student
                res.status(403).send({ message: 'Access forbidden. User is not a student.' });
            }
        })
        .catch(err => {
            res.status(500).send({ message: err.message || 'Internal Server Error' });
        });
};


const isCompany = (req, res, next) => {
    User.findById(req.userId).then((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        if (user && user.role === 'company') {
            return true;
        } else {
            return false;
        }
    });
};

const authJwt = {
    verifyToken,
    isStudent,
    isCompany
};
module.exports = authJwt;