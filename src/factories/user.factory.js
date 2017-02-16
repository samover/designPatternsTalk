/**
 * user.factory.js
 * src/factories
 *
 * Created by samover on 16/02/2017.
 * Copyright (c) 2017 iCapps. All rights reserved.
 */

'use strict';

class UserEntity {
    constructor(userObject) {
        this._name = userObject.name;
        this._password = userObject.password;
        this._token = userObject.token;
    }

    getName() {
        return this._name;
    }

    getPassword() {
        return this._password;
    }

    getToken() {
        return this._token;
    }
}

module.exports = exports = {
    create: (userObject) => new UserEntity(userObject),
};
