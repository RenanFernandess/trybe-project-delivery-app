// app
const express = require('express');
const ErrorHandler = require('../middlewares/error.middleware');
const router = require('../routes');

const app = express();
app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());
app.use(router);
app.use(ErrorHandler.errorMiddleware);

module.exports = app;
