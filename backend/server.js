const mongoose = require('mongoose');
const express = require('express');
const User = require('./models/user');
const authRoutes = require('./authRoutes'); 
const cors = require('cors');
const app = express();

// Middleware to handle JSON payloads
app.use(express.json());
app.use(cors());

const connectionString = 'mongodb+srv://hamzadurrani976:Hamza%40321@cluster0.cgyb5kl.mongodb.net/InternationalStudentJobPortal?retryWrites=true&w=majority';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB Atlas using Mongoose');
})
.catch(err => {
    console.error('Error connecting to MongoDB Atlas using Mongoose', err);
});

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Basic error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const PORT = 5001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
