const { User } = require('../models/user')

const DATA = [
    // { name: 'loomika', username: 'loomika' },
    // { name: 'bavya', username: 'bavya' },
    // { name: 'kishore', username: 'kishore' },
    // { name: 'manas', username: 'manas' },
    // { name: 'adriza', username: 'adriza' },
    // { name: 'siddharth', username: 'siddharth' },
    // { name: 'anuj', username: 'anuj' },
    // { name: 'aryan', username: 'aryan' },
    // { name: 'harshita', username: 'harshita' },
    // { name: 'sipra', username: 'sipra' },
    // { name: 'nerolena', username: 'nerolena' },
    // { name: 'manmay', username: 'manmay' },
    // { name: 'ayush', username: 'ayush' },
    // { name: 'hanan', username: 'hanan' },
    // { name: 'thaarani', username: 'thaarani' },
    // { name: 'timmy', username: 'timmy' },
    // { name: 'logi', username: 'logi' },
    // { name: 'anup', username: 'anup' },
    // { name: 'roshini', username: 'roshini' },
]

const createUsers = async () => {
    await User.insertMany(DATA.map(user => ({
        ...user,
        password: 'password',
        ppt: 'https://ecell-vit.vercel.app',
        Rbalance: 7000
    })))

    console.log('Done successfully!')
}

module.exports = createUsers