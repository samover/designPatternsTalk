/**
 * auth.service.js
 * src/services
 *
 * Created by samover on 16/02/2017.
 * Copyright (c) 2017 iCapps. All rights reserved.
 */

'use strict';

const db = require('../db');
const User = require('../models/user.model');

exports.login = function(username, password) {
    return User.findOne({ name: username })
        .then((user) => {
            if(!user || user.password !== password) throw new Error('Login failed');
            return Promise.resolve({ token: user.token });
        })
        .catch((err) => Promise.reject(err));
};

exports.checkToken = function(token) {
    return User.findOne({ token })
        .then((user) => Promise.resolve({ username: user.name }))
        .catch(() => Promise.reject(new Error('Invalid token')));
};
