const PORT = process.env.PORT || 5000;

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const authRoutes = require('./routes/authRoutes');
const BusinessList = require('./routes/BusinessInfo');
const profileController = require('./controllers/profileController');
const {is_auth}=require('./middleware/middleware');
const connect = require('./models/init'); 
connect();

const app = express();
app.use((req, _, next) => { console.log(req.method, req.path); next() })
app.use(cors());

app.use(express.json());

app.use('/api/auth', authRoutes); 

app.use('/api/business', BusinessList);

app.get('/api/profile',is_auth, profileController.profile);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});