/**
 * auth.controller.js
 * src/controllers
 *
 * Created by samover on 16/02/2017.
 * Copyright (c) 2017 iCapps. All rights reserved.
 */

'use strict';

const authService = require('../services/auth.service');

exports.login = function(req, res, next) {
    return authService.login(req.body.username, req.body.password)
        .then(() => res.sendStatus(200))
        .catch(() => res.sendStatus(403))
};

exports.checkToken = function(req, res, next) {
    return authService.checkToken(req.query.token)
        .then(() => res.sendStatus(200))
        .catch(() => res.sendStatus(403))
};
