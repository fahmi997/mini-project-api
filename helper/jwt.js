const jwt = require('jsonwebtoken');
const { errorRespose } = require('./utils');

class Token {
    static verify (token) {
        try {
            return jwt.verify(token, process.env.JWT_SECRET);
        } catch (error) {
            return errorRespose(401, false, 'Invalid Token', error);
        }
    }

    static sign (payload) {
        try {
            return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '3h' });
        } catch (error) {
            return errorRespose(500, false, 'Internal Server Error', error);
        }
    }
}