/**
 * user.model.js
 * src/models
 *
 * Created by samover on 16/02/2017.
 * Copyright (c) 2017 iCapps. All rights reserved.
 */

'use strict';

const db = require('../db');
const Schema = db.Schema;

const User = new Schema({
    name: String,
    password: String,
    token: String,
});

module.exports = exports = db.model('User', User);
