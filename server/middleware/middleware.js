// Added by Aakar Gupta
const jwt = require('jsonwebtoken');
const { Token, User } = require('../models/user');

async function is_auth(req, res, next) {
    try {
        // Get token from header
        const token = req.headers['x-access-token'];
        if (!token) {
            return res.status(401).json({ error: 'No token provided' });
        }

        // Try verifying JWT first
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.session = req.session || {};
            req.session.user = decoded;
            return next();
        } catch (jwtErr) {
            // Fallback: check DB token
            const db_token = await Token.findOne({ token: token }).populate('user');
            if (!db_token) {
                return res.status(403).json({ error: 'Invalid token' });
            }

            req.session = req.session || {};
            req.session.user = {
                _id: db_token.user._id,
                username: db_token.user.username,
                name: db_token.user.name,
                Rbalance: db_token.user.Rbalance
            };
            return next();
        }
    } catch (err) {
        console.error('Auth middleware error:', err);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = { is_auth };
