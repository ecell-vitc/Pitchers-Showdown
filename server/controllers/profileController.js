const { User, Token } = require('./models/user')
const { Investment } = require('./models/pitcher');


let profile = async (req, res) => {
    const userSession = req.session && req.session.user;
    const investments = [];
    const inv_db = await Investment.find({ user: userSession._id });
    for (let i = 0; i < inv_db.length; i++) {
        const pitcher = await User.findById(inv_db[i].pitcher);
        investments.push({
            amt: inv_db[i].amt,
            team: pitcher ? pitcher.name : null
        });
    }
    return res.json({ name: userSession.name, investments });
}

module.exports = { profile };