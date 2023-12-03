const dbConfig = require("../config/db.config.js");
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.company = require("./company.model");
db.job = require("./job.model");
db.contactus = require("./contactus.model");

db.url = dbConfig.url;

module.exports = db;