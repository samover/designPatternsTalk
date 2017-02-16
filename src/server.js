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
 * MODULE WIRING
 */
const dbFactory = require('./db');
const AuthServiceFactory = require('./services/auth.service');
const AuthControllerFactory = require('./controllers/auth.controller');

const User = require('./models/user.model')
const authService = new AuthServiceFactory(User);
const authController = new AuthControllerFactory(authService);

/*
 * ROUTE DECLARATIONS
 */

app.get('/checkToken', (req, res, next) => authController.checkToken(req, res, next));
app.post('/login', (req, res, next) => authController.login(req, res, next));

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
