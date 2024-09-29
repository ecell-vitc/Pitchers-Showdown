// config/mongo.js
const mongoose = require('mongoose');
require('dotenv').config(); 

async function init() {
    try {
        const dbUrl = process.env.DATABASE_URL;
        
        await mongoose.connect(dbUrl, {
        });
        
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB', err);
        process.exit(1); 
    }
}

module.exports = { init };
