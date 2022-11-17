const { val } = require('./xbar');

const x = Math.random() > 0.5;

if (x) {
  console.log([24].join('-'));
} else {
  console.log([43, val].join('-'));
  import('./xbaz').then((m) => console.log(m));
}
