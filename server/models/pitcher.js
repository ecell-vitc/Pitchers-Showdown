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
    amt: Number
})

const InvestmentWindow = mongoose.model('InvestWindow', {
    pitcher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pitcher'
    },
    enabled: Boolean
})

module.exports = { Pitcher, Investment, InvestmentWindow }