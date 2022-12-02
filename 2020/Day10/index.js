const fs = require('fs') 
  
const raw = fs.readFileSync('input.txt').toString();

let arr = raw.split(/\n/).map(Number).sort((a,b) => a-b);

  arr.unshift(0);
  arr.push(173);

// PART TWO
const partTwo = (arr) => {
  let x=0;
  let count=0;
  let totCount = 1;

  for (let i=0; i<arr.length; i++) {
    if (arr[i+1]-arr[i] === 1) {
      x++;
      //console.log(x);
    }
    if ((arr[i+1]-arr[i]) > 1) {
      if (x === 2) {
        count = 2;
        totCount *= count;
        x=0;
      }
      if (x > 2) {
        count = (3 * 2 ** (x-3))+1;
        totCount *= count;
        x=0;
      }
      else x=0;
    }
  }
  return (`Part Two Answer: ${totCount}`);
}

console.log(partTwo(arr));

//PART ONE 

const partOne = (arr) => {
  let counterOne = 0;
  let counterThree = 0;
  for (let i=0; i<arr.length;i++) {
    if ((arr[i+1]-arr[i]) === 1) {
      counterOne++;
    }
      if ((arr[i+1]-arr[i]) === 3) {
      counterThree++;
    }
  }
  return (`Part One Answer: ${(counterOne)*(counterThree)}`);
}

console.log(partOne (arr));