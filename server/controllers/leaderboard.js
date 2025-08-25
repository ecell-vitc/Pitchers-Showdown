// server/controlBoard.js

const { User } = require('./models/user');
const { Investment } = require('./models/pitcher'); // change path if model is in different file

class ControlBoard {

    // figure out how much investment each user actually got
    async getInvestmentReceived() {
        const data = await Investment.aggregate([
            {
                $group: {
                    _id: "$pitcher",
                    total: { $sum: "$amt" }
                }
            }
        ]);

        const irMap = {};
        data.forEach(row => {
            irMap[row._id.toString()] = row.total;
        });

        return irMap;
    }

    // calc profit from the stuff they've invested in
    async getProfitFromInvestments(irMap, avgIR) {
        const allInvestments = await Investment.find({});
        const profitMap = {};

        allInvestments.forEach(inv => {
            const investorId = inv.user.toString();
            const targetId = inv.pitcher.toString();
            const amt = inv.amt;

            const targetIR = irMap[targetId] || 0;

            // main formula: amt * (that guy’s IR / avg IR)
            const profit = avgIR > 0 ? amt * (targetIR / avgIR) : 0;

            if (!profitMap[investorId]) profitMap[investorId] = 0;
            profitMap[investorId] += profit;
        });

        return profitMap;
    }

    // full scoreboard generator (IR, PI, score, sorted)
    async getScoreboardWithScores() {
        const users = await User.find({}).select('_id username name image');

        // IR = investment received
        const irMap = await this.getInvestmentReceived();

        // make sure every user is in the map
        const userIds = users.map(u => u._id.toString());
        userIds.forEach(id => {
            if (!irMap[id]) irMap[id] = 0;
        });

        const totalIR = Object.values(irMap).reduce((sum, val) => sum + val, 0);
        const avgIR = users.length ? totalIR / users.length : 0;

        // PI = profit from investments
        const piMap = await this.getProfitFromInvestments(irMap, avgIR);
        userIds.forEach(id => {
            if (!piMap[id]) piMap[id] = 0;
        });

        const maxIR = Math.max(...Object.values(irMap), 1);
        const maxPI = Math.max(...Object.values(piMap), 1);

        // final scoreboard array
        let scoreboard = users.map(u => {
            const id = u._id.toString();
            const IR = irMap[id];
            const PI = piMap[id];
            const score = (0.6 * (IR / maxIR)) + (0.4 * (PI / maxPI));

            return {
                id,
                username: u.username,
                name: u.name,
                image: u.image,
                IR,
                PI,
                finalScore: score
            };
        });

        // higher scores first
        scoreboard.sort((a, b) => b.finalScore - a.finalScore);

        return scoreboard;
    }
}

module.exports = new ControlBoard();
