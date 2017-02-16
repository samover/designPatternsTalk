/**
 * auth.service.js
 * src/services
 *
 * Created by samover on 16/02/2017.
 * Copyright (c) 2017 iCapps. All rights reserved.
 */

'use strict';

class AuthService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    login(username, password) {
        return this.userRepository.findByName(username)
            .then((user) => {
                if(!user || user.getPassword() !== password) throw new Error('Login failed');
                return Promise.resolve({ token: user.getToken() });
            })
            .catch((err) => Promise.reject(err));
    }

    checkToken(token) {
        return this.userRepository.findByToken(token)
            .then((user) => Promise.resolve({ username: user.getName() }))
            .catch(() => Promise.reject(new Error('Invalid token')));
    }
}

module.exports = exports = AuthService;
