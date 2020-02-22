/**
 * Created by i532660 on 22.02.20.
 */

const { clamp, identity } = require('lodash');
const theAnswer = require('the-answer');

const foo = identity(clamp(theAnswer, 93));

module.exports = { foo };
