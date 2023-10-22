const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('./models/user');

const router = express.Router();

router.post('/signup', async (req, res) => {
    try {
        // Validate data
        if (!req.body.email || !req.body.password || !req.body.name || !req.body.userType) {
            return res.status(400).json({ error: 'Required fields are missing.' });
        }

        // Check for existing user
        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(400).json({ error: 'User with this email already exists.' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        // Create a new user
        const user = new User({
            userType: req.body.userType,
            name: req.body.name,
            email: req.body.email,
            university: req.body.university,
            website: req.body.website,
            contactNumber: req.body.contactNumber,
            address: req.body.address,
            password: hashedPassword
        });

        // Log user data before saving
        console.log('User Data:', user);

        // Save the user
        await user.save();

        // Send response
        res.status(201).json({ message: 'User created successfully!' });

    } catch (error) {
        console.error('Error saving user:', error);
        res.status(500).json({ error: 'Server error. Please try again later.' });
    }
});

module.exports = router;
