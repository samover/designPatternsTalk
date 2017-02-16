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
    name: 'testUser',
    password: 'secret',
    token: 'access_token',
};

const UserModel = {
    findOne: () => Promise.resolve(testUser),
}

const authService = new AuthService(UserModel);

describe('services/auth.service', () => {
    describe('#login', () => {
        it('returns the user\'s token', () => {
            return authService.login(testUser.name, testUser.password)
                .then((result) => expect(result.token).to.eql(testUser.token));
        });
    })
})
