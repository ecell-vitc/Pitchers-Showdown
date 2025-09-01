const crypto = require('crypto')
const prompt = require('prompt-sync')()
const init = require('../models/init')
const { User } = require('../models/user')
const { Investment } = require('../models/pitcher')


const getDetails = async (username) => {
    user = await User.findOne({ username })
    if (!user) console.error('User not found!')
    
    return user
}

const revertInvestment = async (username) => {
    let user = await getDetails(username)

    await Investment.deleteMany({ user: user._id })
    await updateUser(user, { Rbalance: 7000 })
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
        let password = crypto.randomBytes(8).toString('hex')
        await (new User({ ...data, password, desc: ' ', ppt: ' ' })).save()
        console.log(`Added successfully: ${data.username} ${password}`)
    } catch (err) {
        console.error(err)
    }
}

const main = async () => {
    await init()

    while (true) {
        console.log('\n\n\n')
        let username = prompt('Enter username: ')
        let name = prompt('Enter team name: ')

        await addUser({ username, name })
    }
}

module.exports = { main, getDetails, updateUser, revertInvestment }