const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json()); // informa que o body da requisição terá o formato JSON
app.use(routes);
app.use(errors()); // impede que o erro 500 seja retornado quando houver problema no BODY

module.exports = app;
