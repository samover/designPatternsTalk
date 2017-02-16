/**
 * server.js
 * .
 *
 * Created by samover on 09/02/2017.
 * Copyright (c) 2016 iCapps. All rights reserved.
 */

'use strict';

const express = require('express');

/*
 * MODULE CONFIGURATION
 */
require('./config/environment.config');
const bodyParser = require('./middlewares/bodyParser.middleware');
const helmet = require('./middlewares/helmet.middleware');
const logger = require('./middlewares/logger.middleware');
const errorHandler = require('./middlewares/errorHandler.middleware');

/*
 * CONSTANT DECLARATION
 */
const port = process.env.PORT || 3000;

/*
 * APP INITIALIAZATION
 */
const app = express();

app.use(helmet);
app.use(bodyParser);

if (process.env.NODE_ENV !== 'test') app.use(logger);

/*
 * ROUTE DECLARATIONS
 */

const authController = require('./controllers/auth.controller');

app.get('/checkToken', authController.checkToken);
app.post('/login', authController.login);

// Catch all unknown routes.
app.all('*', (req, res, next) => res.sendStatus(404));

app.use(errorHandler);

/*
 * START SERVER
 */

app.listen(port, () => {
  console.info(`Server listening on port ${port}`);
});

module.exports = exports = app;
