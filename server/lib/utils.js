const prompt = require('prompt-sync')()
const init = require('../models/init')
const { User } = require('../models/user')


const getDetails = async (username) => {
    user = await User.findOne({ username })
    if (!user) console.error('User not found!')
    
    return user
}

const updateUser = async (user, data) => {
    Object.keys(data).forEach(key => {
        user[key] = data[key]
    })
    await user.save()

    console.log("Updated successfully!")
}

const main = async () => {
    await init()

    while (true) {
        console.log('\n\n\n')
        let username = prompt('Enter username to search: ')
        if (username == "-1") break;
    
        const user = await getDetails(username)
        console.log(user)
        if (!user) continue;
    
        username = prompt("Enter new username: ")
        password = prompt("Enter new password: ")

        if (!username || !password) continue;
    
        await updateUser(user, { username, password })
    }
}

module.exports = { main, getDetails, updateUser }