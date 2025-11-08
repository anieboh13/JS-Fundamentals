const { argv } = require('node:process');

const n = Number(argv[2]);

function factorial(num) {
  if (Number.isNaN(num) || num === 0) {
    return 1;
  } else {
  return num * factorial(num - 1);}
}

console.log(factorial(n));