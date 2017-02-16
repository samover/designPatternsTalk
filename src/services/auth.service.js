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
    return User.find({ name: username })
        .then((user) => {
            if(user.password === password) return Promise.resolve();
            throw new Error('Login failed');
        })
        .catch((err) => Promise.reject(err));
};

exports.checkToken = function(token) {
    return User.find({ token })
        .then((user) => 'Valid token')
        .catch(() => Promise.reject(new Error('Invalid token')));
};
