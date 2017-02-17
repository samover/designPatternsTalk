/**
 * test_helper.js
 * test
 *
 * Created by samover on 09/02/2017.
 * Copyright (c) 2016 iCapps. All rights reserved.
 */

'use strict';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.config.includeStack = true;
chai.config.showDiff = true;
chai.use(chaiAsPromised);

global.expect = chai.expect;
global.request = require('supertest-as-promised');

require('dotenv').config();

