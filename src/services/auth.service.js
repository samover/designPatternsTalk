/**
 * auth.service.js
 * src/services
 *
 * Created by samover on 16/02/2017.
 * Copyright (c) 2017 iCapps. All rights reserved.
 */

'use strict';

class AuthService {
    constructor(UserModel) {
        this.User = UserModel;
    }

    login(username, password) {
        return this.User.findOne({ name: username })
            .then((user) => {
                if(!user || user.password !== password) throw new Error('Login failed');
                return Promise.resolve({ token: user.token });
            })
            .catch((err) => Promise.reject(err));
    }

    checkToken(token) {
        return this.User.findOne({ token })
            .then((user) => Promise.resolve({ username: user.name }))
            .catch(() => Promise.reject(new Error('Invalid token')));
    }
}

module.exports = exports = AuthService;
