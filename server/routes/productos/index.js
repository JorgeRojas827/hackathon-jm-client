const { getProducts }= require('../../controllers/products');
const express = require('express');
const app = express();

app.get('/productos/show', getProducts);

module.exports = app;