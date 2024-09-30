const { User, Token } = require('../models/user')
const { Pitcher, Investment, InvestmentWindow } = require('../models/pitcher');
const jwt = require('jsonwebtoken');


const BusinessList = async (req, res) => {
  try {
    res.json({
      teams: (await Pitcher.find()).map(pitcher => ({
        id: pitcher._id,
        team_name: pitcher.name,
      })) })
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

const BusinessInfo = async (req, res) => {
  try {
    const teamId = req.params.id;
    const pitcher = await Pitcher.findById(teamId);

    if (pitcher) {
      res.json({
        id: pitcher._id,
        team_name: pitcher.name,
        team_content: '',
        link: pitcher.ppt,
        img: pitcher.image
      });
    } else {
      res.status(404).json({ error: 'Team not found' });
    }
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


const makeInvestment = async (req, res) => {
  try {
    const teamId = req.params.id; const token = req.headers['x-access-token']
    const pitcher = Pitcher.findById(teamId);
    const db_token = await Token.findOne({ token: token })

    if (!db_token)
      return res.status(403).json({ error: 'Token invalid' })
    const user = await User.findById(db_token.user)

    if (!user || user.Rbalance < req.body['amt'])
      return res.status(401).json({ error: 'Balance not sufficient' })

    if (pitcher) {
      const prevInvest = await Investment.findOne({ user: user._id, pitcher: pitcher._id })
      if (prevInvest)
        return res.status(403).json({ error: 'An investment has already been made' })
      await Investment({ user: user._id, pitcher: pitcher._id, amt: req.body['amt'] }).save()
      user.Rbalance -= req.body['amt']
      await user.save()
      
      return res.json({})
    } else {
      res.status(404).json({ error: 'Team/User not found' });
    }
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}


module.exports = { BusinessList, BusinessInfo, makeInvestment };