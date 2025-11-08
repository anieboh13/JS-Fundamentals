const { argv } = require('node:process');


myNumber = Math.floor(Number(argv[2]))

if(Number.isNaN(myNumber)) {
    console.log('Not a number');
} else {
   console.log(myNumber)
}
