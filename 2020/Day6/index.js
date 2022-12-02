const fs = require('fs') 
  
const raw = fs.readFileSync('input.txt').toString();

const custQues = (ansArr) => {

  //Part One
  let ansArr2 = ansArr;

  ansArr = ansArr.split(/\n\n/);
  for (let i=0; i<ansArr.length; i++) {
    ansArr[i] = ansArr[i].replace(/\n/g,'');
  }

  let totPartOne = 0;

  for (let i=0; i<ansArr.length; i++) {
    let count = 0;
    for (let j=0; j<ansArr[i].length; j++) {
      temp = ansArr[i].slice(j+1);
      if (!(temp.includes(ansArr[i][j]))) {
        count++;
      }
    }
  totPartOne+=count;
  }

  //Part Two
  //ansArr2[i] is each passenger group in a single string
  let ansArr3=[];
  let totPartTwo=0;
  ansArr2 = ansArr2.split(/\n\n/);
  for (let i=0; i<ansArr2.length; i++) {
  //ansArr3[i] is each passenger group as an array
  //ansArr3[i][j] is each passenger
    ansArr3[i] = ansArr2[i].split(/\n/);
  }
  for (let i=0; i<ansArr2.length; i++) {
    ansArr2[i] = ansArr2[i].replace(/\n/,"");
  }

  for (let i=0; i<ansArr2.length; i++) {
    count=0;
    for (let j=0; j<ansArr2[i].length; j++) {
      let re = new RegExp((ansArr2[i][j]),'g');
      let x = ansArr2[i].match(re);
      if (x.length===ansArr3[i].length) {
        count++;
      }
    }
    count=count/ansArr3[i].length;
    totPartTwo +=count;
  }
  return (`Part One: ${totPartOne}
Part Two: ${totPartTwo}`);
}

let solution = custQues(raw);
console.log(solution);