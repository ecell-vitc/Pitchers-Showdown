const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        set: pass => bcrypt.hashSync(pass, 5),
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    Rbalance: {   // remaining balance
        type: Number,
        default: 100000000,
    },
    ppt: String, image: String
});

UserSchema.statics.checkPassword = function (inputPassword, hashedPassword) {
    return bcrypt.compareSync(inputPassword, hashedPassword);
};

const User = mongoose.model('User', UserSchema);

const TokenSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    token: {
        type: String,
        default: crypto.randomBytes(128).toString('hex'),
        unique: true,
    },
});

const Token = mongoose.model('Token', TokenSchema);

module.exports = { User, Token };
