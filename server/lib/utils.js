const prompt = require('prompt-sync')()
const init = require('../models/init')
const { User } = require('../models/user')


const getDetails = async (username) => {
    user = await User.findOne({ username })
    if (!user) console.error('User not found!')
    
    return user
}

const updateUser = async (user, data) => {
    try {
        Object.keys(data).forEach(key => {
            user[key] = data[key]
        })
        await user.save()
        console.log("Updated successfully!")
    } catch (err) {
        console.error(err)
    }

}    

const addUser = async (data) => {
    try {
        await (new User(data)).save()
        console.log("Added successfully!")
    } catch (err) {
        console.error(err)
    }
}

const main = async () => {
    await init()

    while (true) {
        console.log('\n\n\n')
        let username = prompt('Enter username: ')
        let password = prompt('Enter password: ')
        let name = prompt('Enter team name: ')
        let desc = prompt('Enter brief description: ')
        let ppt = prompt('Enter ppt link: ')

        await addUser({ username, password, name, desc, ppt })
    }
}

module.exports = { main, getDetails, updateUser }