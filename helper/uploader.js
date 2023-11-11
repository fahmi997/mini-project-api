const multer = require('multer');
const fs = require('fs');

module.exports = {
    uploader: (directory) => {
        const defaultDirectory = './assets';

        const storage = multer.diskStorage({
            destination: (req, file, cb) => {
                const path = directory ? defaultDirectory + directory : defaultDirectory;

                if (!fs.existsSync(path)) {
                    fs.mkdirSync(path);
                }

                return cb(null, path);
            },
            filename: (req, file, cb) => {
                return cb(null, `${Date.now()}-${file.originalname}`);
            },
        });

        const fileFilter = (req, file, cb) => {
            if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
                return cb(null, true);
            } else {
                return cb(new Error('File extension is denied. Please use png or jpg'), false);
            }
        };

        return multer({ storage, fileFilter });
    },
};