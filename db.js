
var mongoose = require('mongoose');
const db = mongoose.connect('mongodb://Monika:test123@ds149914.mlab.com:49914/test-form');
mongoose.connection.once('open', () => {
    console.log('connected to database');
});

module.exports = db;