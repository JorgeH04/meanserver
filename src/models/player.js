const mongoose = require('mongoose');
const { Schema } = mongoose;

const playerSchema = new Schema({
    name: { type: String, required: true},
    position: { type: String, required: true },
    club: { type: String, required: true },
    salary: { type: Number, required: true}
});

module.exports = mongoose.model('Player', playerSchema);