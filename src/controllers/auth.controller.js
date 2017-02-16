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
    return authService.login(req.body.name, req.body.password)
        .then((token) => res.send(token))
        .catch((err) => next(err));
};

exports.checkToken = function(req, res, next) {
    return authService.checkToken(req.query.token)
        .then((userObject) => res.send({ ok: true, user: userObject }))
        .catch(() => res.sendStatus(403))
};
