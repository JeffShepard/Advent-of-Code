const fs = require('fs') 
  
const raw = fs.readFileSync('input.txt').toString();

let arr = raw.split(/\n/).map(Number);

// PART TWO

let target = 1504371145;

const partTwo = (arr,target) => {
  for (let j=2; j<50; j++) {
    for (let i=0; i<=(arr.length-j); i++) {
      let subArr = arr.slice(i,i+j);
      let x = subArr.reduce((a,b) => a+b);
      if(x === target) {
        let y = Math.max(...subArr) + Math.min(...subArr);
        return (`Part Two Answer: ${y}`);
      }
    }
  }
}
console.log(partTwo(arr,target));

//PART ONE 

let num = 2;
let arrSize = 25; 

for (let i=0; i<(arr.length-arrSize); i++) {
  
  let subArr = arr.slice(i,i+arrSize);
  let target = arr[i+arrSize];

  function combinations(numArr, choose, callback) {
      var n = numArr.length;
      var c = [];
      var inner = function(start, choose_) {
          if (choose_ == 0) {
              callback(c);
          } else {
              for (let i = start; i <= n - choose_; ++i) {
                  c.push(numArr[i]);
                  inner(i + 1, choose_ - 1);
                  c.pop();
              }
          }
      }
      inner(0, choose);
  }

  function sum(subArr) {
      p = 0;
      for (let i in subArr) {
          p += subArr[i];
      }
      return p;
  }

  let ansArr = [];

  combinations (subArr,num,
      function output(subArr) {
          ansArr.push(sum(subArr));
      });


  if (!(ansArr.includes(target))) {
    console.log(`Part One Answer: ${target}`)
  }
}