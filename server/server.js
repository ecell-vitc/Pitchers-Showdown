const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const BusinessList = require('./routes/BusinessInfo');
const PORT = process.env.PORT || 5000;
const connect = require('./models/init'); 

connect();

const app = express();
app.use(cors());

app.use(express.json());

app.use('/api/auth', authRoutes); 

app.use('/api/business', BusinessList);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
