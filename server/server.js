const PORT = process.env.PORT || 5000;

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const authRoutes = require('./routes/authRoutes');
const BusinessList = require('./routes/BusinessInfo');
const { User, Token } = require('./models/user')
const { Investment } = require('./models/pitcher');

const connect = require('./models/init'); 
connect();

const app = express();
app.use(cors());

app.use(express.json());

app.use('/api/auth', authRoutes); 

app.use('/api/business', BusinessList);

app.get('/api/profile', async (req, res) => {
    const token = req.headers['x-access-token']
    const db_token = await Token.findOne({ token: token })
    if (!db_token)
        return res.status(403).json({ error: 'Token invalid' })

    const investments = []
    const user = await User.findById(db_token.user)
    const inv_db = await Investment.find({ user: user._id })
    for (let i = 0; i < inv_db.length; i++)
        investments.push({
            amt: inv_db[i].amt,
            team: (await User.findById(inv_db[i].pitcher)).name
        })

    return res.json({ name: user.name, investments })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
