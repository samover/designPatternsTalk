/**
 * auth.services_test.js
 * test/services
 *
 * Created by samover on 16/02/2017.
 * Copyright (c) 2017 iCapps. All rights reserved.
 */

'use strict';

const AuthService = require('../../src/services/auth.service');

const testUser = {
    getName: () => 'testUser',
    getPassword: () => 'secret',
    getToken: () => 'access_token',
};

const userRepository = {
    findByName: () => Promise.resolve(testUser),
}

const authService = new AuthService(userRepository);

describe('services/auth.service', () => {
    describe('#login', () => {
        it('returns the user\'s token', () => {
            return authService.login(testUser.getName(), testUser.getPassword())
                .then((result) => expect(result.token).to.eql(testUser.getToken()));
        });
    })
})
