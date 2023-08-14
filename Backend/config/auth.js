const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'your_jwt_secret';

const authenticateJWT = (req, res, next) => {
    const token = req.headers.authorization;

    if (token) {
        jwt.verify(token, secret, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

const generateJWT = (user) => {
    return jwt.sign({ user }, secret, { expiresIn: '1h' });
};

module.exports = {
    authenticateJWT,
    generateJWT
};