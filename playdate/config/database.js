const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.connect(process.env.DATABASE_URL || 'mongodb://localhost/playdate', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).catch(err => console.log('error: ', err))
db.on('connected', function() {
    console.log(`MongoDB connected on ${db.host}:${db.port}`);
});
