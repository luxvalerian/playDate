const mongoose = require('mongoose');
const db = mongoose.connection;


mongoose.connect('mongodb://localhost/playdate'/*process.env.DATABASE_URL*/, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).catch(err => console.log('error: ', err))

db.on('connected', function() {
    console.log(`MongoDB connected on ${db.host}:${db.port}`);
});
