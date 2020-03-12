const User = require('../models/user');
const jwt = require('jsonwebtoken');

const SECRET =  process.env.SECRET;

module.exports = {
    signup,
    login
};




async function login(req, res) {
    // below: to handle login in server side, find user in db by email
    try {
        const user = await User.findOne({ email: req.body.email });
        // below: if user doesn't exist, respond w 400 bad request
        if(!user) return res.status(400).json({err: 'bad credentials'});
        // below: if user is found compare password
        user.comparePassword(req.body.password, (err, isMatch) => {
            if(isMatch) {
                // if pw matches, create token and send to client
                const token = createJWT(user);
                res.json({ token });
            } else {
                // if pw doesn't match, responsd with 401 unauthorized
                return res.status(401).json({err: 'bad credentials' });
            }
        });
    } catch (error) {
        res.status(500).json({err: 'this request cannot be completed at this time '})
    }
}

async function signup(req, res) {
    try {
        const user = await User.create(req.body);
        const token = createJWT(user);

        res.json({ token });
    } catch (error) {
        res.status(400).json(error);
        
    }
}

function createJWT (user) {
    return jwt.sign(
        { user }, 
        SECRET, 
        { expiresIn: '24h'}
    );
}