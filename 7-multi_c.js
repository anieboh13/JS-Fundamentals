const { argv } = require('node:process');

myNumber = Math.floor(Number(argv[2]))
let i = 0
const line = 'C is fun'


if(Number.isNaN(myNumber)) {
    console.log('Missing number of occurrences')

}   else {
  while (i < myNumber) {
    console.log(line);
    i++;
  }
}
