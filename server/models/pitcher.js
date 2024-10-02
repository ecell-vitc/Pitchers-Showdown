const mongoose = require('mongoose')

const Investment = mongoose.model('Investment', {
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    pitcher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    amt: Number
})



module.exports = { Investment }