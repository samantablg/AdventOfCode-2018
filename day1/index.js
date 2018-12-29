const fs = require('fs');

function readInput(data) {
  return fs.readFileSync(data, 'utf-8').trim().split('\n').map(x => parseInt(x));
};



function partOne () {
  let numInput = readInput('input1');

  let sum = numInput.reduce(function(a, b) {
    return a + b;
  });

  return sum;
}

function partTwo() {
  let numInput = readInput('input2');
}


console.log(partOne());