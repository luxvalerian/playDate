const Playdate = require('../models/playdate');

module.exports = {
    create
};

async function create(req, res) {
    // trycatch is JUST for error handling:
    try {
        // create an instance of playdate model
        // then call res.json and send created document as response
        const playdate = await Playdate.create(req.body);
        res.json({ restaurant });
    } catch (error) {
        res.status(401).json({err: 'unauthorized'});

    }
}