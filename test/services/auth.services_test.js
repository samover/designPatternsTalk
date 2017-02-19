/**
 * auth.services_test.js
 * test/services
 *
 * Created by samover on 16/02/2017.
 * Copyright (c) 2017 iCapps. All rights reserved.
 */

'use strict';

const authService = require('../../src/services/auth.service');
const User = require('../../src/models/user.model');

const testUser = new User({
    name: 'sam',
    password: 'test',
    token: 'access_token',
});

describe('services/auth.service', () => {
    before(() => testUser.save());
    after(() => testUser.remove());

    describe('#login', () => {
        it('returns the user\'s token', () => {
            return authService.login(testUser.name, testUser.password)
                .then((result) => expect(result.token).to.eql(testUser.token));
        });
    })
})
