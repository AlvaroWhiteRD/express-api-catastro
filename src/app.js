const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const bodyParser = require('body-parser');

//const { notFound, errorHandler } = require('./middlewares');

const app = express();

require('dotenv').config();

app.use(helmet());
app.use(morgan('dev'));
app.use(bodyParser.json());

//const catastro = require('./routes/catastro');
//catastro.get
app.get('/api/catastro', function (req, res) {
    res.send('Ruta INICIO '+req);
});
//app.use('/api/catastro', catastro);

//app.use(notFound);
//app.use(errorHandler);

module.exports = app;
