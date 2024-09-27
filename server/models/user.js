const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const crypto = require('crypto')

const User = mongoose.model('User', {
    username: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        set: pass => bcrypt.hashSync(pass, 5)
    },
    name: String, credits: Number,
})
User.check_password = (pass, enc) => bcrypt.compareSync(pass, enc)



const Token = mongoose.model('Token', {
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    token: {
        type: String,
        default: crypto.randomBytes(128).toString('hex'),
        unique: true
    },
})

module.exports = { User, Token }