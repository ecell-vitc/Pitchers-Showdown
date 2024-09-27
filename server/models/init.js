const mongoose = require('mongoose')
async function init() { await mongoose.connect('mongodb://127.0.0.1:27017/pitchers_showdown') }

module.exports = { default: init }