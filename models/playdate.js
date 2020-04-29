const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playdateSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    location: String,
    addedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Playdate', playdateSchema);