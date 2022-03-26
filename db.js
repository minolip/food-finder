const mongoose = require('mongoose');
const { response } = require('./app');
const dotenv = require('dotenv').config()

const url = process.env.MONGO_URI

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect( url, connectionParams);

module.exports = {
    url
}