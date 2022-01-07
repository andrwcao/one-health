const jwt = require('jsonwebtoken');
const HttpError = require("../models/http-error");

module.exports = (req, res, next) => {
    if (req.method === 'OPTIONS') {
        return next();
    }
    
    try {
        const token = req.headers.authorization;
        if (!token) {
            const error = new HttpError(
                'Authentication failed.', 
                401
            );
            return next(error);
        };

        const decodedToken = jwt.verify(token, 'zKt6ncsG92iHSys4All6');
        req.userData = {userId: decodedToken.userId};
        next();
    } catch(err) {
        const error = new HttpError(
            'Authentication failed.', 
            401
        );
        return next(error);
    }
}