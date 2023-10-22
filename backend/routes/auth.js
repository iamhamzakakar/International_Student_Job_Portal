const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('<path_to_user_model>'); // Replace <path_to_user_model> with the actual path to your User model


router.post('/signup', async (req, res) => {
    const { userType, name, email, university, website, contactNumber, address, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ error: 'Email already registered' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const user = new User({
        userType,
        name,
        email,
        university,
        website,
        contactNumber,
        address,
        password: hashedPassword
    });

    try {
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error registering user' });
    }
});

// ... existing routes ...
