const mongoose = require('mongoose')

const Pitcher = mongoose.model('Pitcher', {
    name: String, ppt: String, image: String,
})

const Investment = mongoose.model('Investment', {
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    pitcher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pitcher'
    },
    amt: {
        type: Number,
        default: 100000000
    }
})

module.exports = { Pitcher, Investment }