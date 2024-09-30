const { User, Token } = require('../models/user'); 
const jwt = require('jsonwebtoken');

// Login controller function with JWT
const loginUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });

        if (!user || !User.checkPassword(password, user.password)) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        await Token.findOneAndDelete({ user: user._id })
        const token = new Token({ user: user._id }); await token.save()
        // const jwtToken = jwt.sign({ token: token.token }, process.env.JWT_SECRET);

        res.status(200).json({ message: 'Login successful', jwtToken: token.token, balance: user.Rbalance });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Registration function for internal use
const registerUser = async (req, res) => {
    const { username, password, name } = req.body;

    try {
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        const newUser = new User({ username, password, name });
        await newUser.save(); 

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { loginUser,registerUser};
