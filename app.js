const express = require('express');
const cors = require('cors');

const productRouter = require('./routes/product');

const db = require('./db');

const app = express();

app.use(express.json());
app.use(productRouter);
app.use('/public', express.static('./static/images'));

app.use(cors);

module.exports = app;
