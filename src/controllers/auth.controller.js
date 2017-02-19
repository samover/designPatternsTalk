/**
 * auth.controller.js
 * src/controllers
 *
 * Created by samover on 16/02/2017.
 * Copyright (c) 2017 iCapps. All rights reserved.
 */

'use strict';

class AuthController {
    constructor(authService) {
        this.authService = authService;
    }

    login(req, res, next) {
        return this.authService.login(req.body.name, req.body.password)
            .then((token) => res.send(token))
            .catch((err) => next(err));
    }

    checkToken(req, res, next) {
        return this.authService.checkToken(req.query.token)
            .then((userObject) => res.send({ ok: true, user: userObject }))
            .catch(() => next(err));
    }
}

module.exports = exports = AuthController;
