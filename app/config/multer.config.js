const multer = require('multer');
const { v4: uuidv4 } = require('uuid');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/logo/'); // Set the destination folder for file uploads
    },
    filename: function (req, file, cb) {
        const uniqueIdentifier = uuidv4();
        cb(null, `${uniqueIdentifier}-${file.originalname}`); // Set the filename with a unique identifier
    }
});

const upload = multer({ storage: storage });

module.exports = upload;