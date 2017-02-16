/**
 * auth_test.js
 * test/integration
 *
 * Created by samover on 16/02/2017.
 * Copyright (c) 2017 iCapps. All rights reserved.
 */

'use strict';

const User = require('../../src/models/user.model');
const user = new User({
    name: 'sam',
    password: 'test',
    token: 'access_token',
})

const app = require('../../src/server');

describe('INTEGRATION: auth', () => {
    before(() => user.save());
    after(() => user.remove());

    describe('POST /login', () => {
        it('returns 200 with valid credentials', () => request(app)
            .post('/login')
            .send({ name: user.name, password: user.password })
            .expect(200)
            .expect((resp) => {
                expect(resp.body.token).to.eql(user.token);
            })
        );
    })
    describe('GET /checkToken', () => {
        it('returns 200 with valid credentials', () => request(app)
            .get('/checkToken?token=access_token')
            .expect(200)
            .expect((resp) => {
                expect(resp.body.ok).to.be.true;
                expect(resp.body.user.username).to.eql(user.name);
            })
        );
    });
});
