const { Pitcher } = require('../models/pitcher'); 

const teamsData = {
    1: {
      img: 'https://example.com/team1.jpg',
      team_name: 'Team Alpha',
      team_content: 'This is Team Alpha, a great startup.',
      link: 'https://teamalpha.com'
    },
    2: {
      img: 'https://example.com/team2.jpg',
      team_name: 'Team Beta',
      team_content: 'Team Beta specializes in AI solutions.',
      link: 'https://teambeta.com'
    }
  };

const BusinessList = async (req, res) => {
    try {
        const teamId = req.params.teamId;
        const teamInfo = teamsData[teamId];
      
        if (teamInfo) {
          res.json(teamInfo); 
        } else {
          res.status(404).json({ error: 'Team not found' }); 
        }
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


module.exports = { BusinessList};