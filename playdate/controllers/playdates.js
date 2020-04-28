const Playdate = require('../models/playdate');

module.exports = {
    create,
    index,
    getFeatured
};
 
async function getFeatured(req, res) {
    try {
        const featuredPlaydates = await Playdate.find({})
        .sort('-createdAt').limit(3).populate('addedBy');
        res.json({ featuredPlaydates });
    } catch (error) {
        res.status(400).json({err: 'bad request' });
    }
}

async function index(req, res) {
    try {
        const playdates = await Playdate.find({})
        .sort('-createdAt').populate('addedBy');
        res.json({ playdates });
    } catch (error) {
        res.status(401).json({ err: 'unauthorized'});
    }
}

async function create(req, res) {
    // trycatch is JUST for error handling:
    try {
        // create an instance of playdate model
        // then call res.json and send created document as response
        const playdate = await Playdate.create(req.body);
        res.json({ playdate });
    } catch (error) {
        res.status(401).json({err: 'unauthorized'});

    }
}