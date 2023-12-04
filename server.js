const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");

const app = express();
const db = require("./app/models");
const Role = db.role;
const path = require('path');
db.mongoose
    .connect(db.url)
    .then(() => {
        console.log("Successfully connect to Mongo.");
    })
    .catch(err => {
        console.error("Connection error", err);
        process.exit();
    });


var corsOptions = {
    origin: "*"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


app.use(
    cookieSession({
        name: "login-session",
        keys: ["COOKIE_SECRET"], // should use as secret environment variable
        httpOnly: true
    })
);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to job portal application." });
});


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});


require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/job.routes')(app);
require('./app/routes/contact.routes')(app);
require('./app/routes/profile.routes')(app);
