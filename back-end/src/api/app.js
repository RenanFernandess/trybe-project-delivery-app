// app
const express = require('express');
const ErrorHandler = require('../middlewares/error.middleware');
const cors = require('cors');
const router = require('../routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/images', express.static(`${__dirname}/../images`));

app.get('/coffee', (_req, res) => res.status(418).end());
app.use(router);
app.use(ErrorHandler.errorMiddleware);

module.exports = app;
