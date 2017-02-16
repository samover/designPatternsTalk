/**
 * user.repository.js
 * src/repositories
 *
 * Created by samover on 16/02/2017.
 * Copyright (c) 2017 iCapps. All rights reserved.
 */

'use strict';

class UserRepository {
    constructor(userModel, userFactory) {
        this.userModel = userModel;
        this.userFactory = userFactory;
    }

    findByName(name) {
        return this.userModel.findOne({ name: name })
            .then((userObject) => this.userFactory.create(userObject));
    }

    findByToken(token) {
        return this.userModel.findOne({ token: token })
            .then((userObject) => this.userFactory.create(userObject));
    }
}

module.exports = exports = UserRepository;
