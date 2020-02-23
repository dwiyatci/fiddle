/**
 * Created by i532660 on 22.02.20.
 */

import('./myStyles.less');

import { clamp, identity } from 'lodash';
import theAnswer from 'the-answer';

const foo = identity(clamp(theAnswer, 93));

function* foo_gen() {}

var sym = Symbol();

var promise = Promise.resolve();

const arr = [];
var check = arr.includes('yeah!');

console.log(arr[Symbol.iterator]());

(async () => {
  const val = await f();

  console.log(val);
})();

async function f() {
  return 23;
}

export { foo };
