/**
 * Created by i532660 on 22.02.20.
 */

const { add } = require('lodash');
const { foo } = require('@dwiyatci/foo-pkg');

module.exports = { bar: add(foo, 1) };
