const { User, Token } = require('../models/user')
const { Investment } = require('../models/pitcher');
const jwt = require('jsonwebtoken');

const BusinessList = async (req, res) => {
  try {
    res.json({
      teams: (await User.find()).map(pitcher => ({
        id: pitcher._id,
        team_name: pitcher.name,
      }))})
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

const BusinessInfo = async (req, res) => {
  try {
    const teamId = req.params.id;
    const pitcher = await User.findById(teamId);

    if (pitcher) {
      res.json({
        team_name: pitcher.name,
        team_content: '',
        link: pitcher.ppt,
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
    const teamId = req.params.id;
    const userSession = req.session && req.session.user;
    const pitcher = await User.findById(teamId);
    if (!pitcher) {
      return res.status(404).json({ error: 'Team/User not found' });
    }
    if (userSession._id.toString() === pitcher._id.toString()) {
      return res.status(412).json({ error: 'Cannot invest in your own team' });
    }

    const amt = req.body['amt'];
    if (amt < 0) return res.status(400).json({ error: 'Invalid amount' })
    if (userSession.Rbalance < amt) return res.status(400).json({ error: 'Insufficient Balance' });

    const prevInvest = await Investment.findOne({ user: userSession._id, pitcher: pitcher._id });
    if (prevInvest) {
      return res.status(412).json({ error: 'An investment has already been made' });
    }

    await Investment({ user: userSession._id, pitcher: pitcher._id, amt }).save();
    const user = await User.findById(userSession._id);
    user.Rbalance -= amt;
    await user.save();

    return res.json({ message: 'Investment successful' });
  } catch (error) {
    console.error('Investment error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


module.exports = { BusinessList, BusinessInfo, makeInvestment };