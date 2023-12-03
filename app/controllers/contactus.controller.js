const Contactus = require('../models/contactus.model');

exports.postContactRequest = async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).send({ message: 'Name, email, and message are required.' });
    }

    const newContact = new Contactus({
        name: name,
        email: email,
        message: message
    });

    try {
        const savedContact = await newContact.save();
        res.status(200).send({ message: 'Contact request received successfully. We will get back to you.', data: savedContact });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
};
