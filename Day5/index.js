const fs = require('fs') 
  
const raw = fs.readFileSync('./input.txt').toString();

const seatFinder = (seatArray) => {
let myId=0;
let idArr = [];
let arr = seatArray.split('\n');

for (let i=0; i<arr.length; i++) {
  let currSeat = arr[i];
  
  let rowCount = 0;
  for (let j=0; j<7; j++) {
    if (currSeat[j] === 'B') {
      rowCount += 2**(6-j);
    }
  }

  let seatCount = 0;
  for (let j=0; j<3; j++) {
    if (currSeat[7+j] === 'R') {
      seatCount += 2**(2-j);
    }
  }

  let seatId = rowCount*8 + seatCount;
  idArr.push(seatId);

}
  let min = Math.min(...idArr);
  let max = Math.max(...idArr);

for (let i=min; i<max; i++) {
  if (!(idArr.includes(i))) {
    myId = i;
    return myId;
  }
}
}

let solution = seatFinder(raw);
console.log(solution);