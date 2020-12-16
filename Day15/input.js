let puzzle = [7,14,0,17,11,1,2];
//Rules: 1. first time number used, next number is 0
// 2. if num previously used, next number is difference in //turns from last time used


//PART TWO SOLUTIOM

const endOfLineTwo = (array, final) => {
    let indexes = new Map();
    for (let i=0; i<array.length; i++) {
        indexes.set(array[i],array.indexOf(array[i]))
    }
    let holder = '#';
    let target = array[array.length - 1];
    for (let index = array.length-1; index < final-1; index++) {
        if (indexes.has(target)) {
            target = index - indexes.get(target);
        }
        else target =0;
        
        indexes.set(holder, index);
        holder = target;
    }
    return (`Part Two: ${target}`)
}
    
let x = endOfLineTwo(puzzle,30000000);
console.log(x)

//PART ONE SOLUTION
const findDiff = (array,currentVal) => {
  let indices = [];
  let idx = array.indexOf(currentVal);
  while (idx != -1) {
    indices.push(idx);
    idx = array.indexOf(currentVal, idx + 1);
  }
  let end = indices.length-1
  let diff = indices[end]-indices[end-1];
  return diff;
}

const endOfLine = (puzzle,final) => {
  let currVal = 0;
  let diff = 0;
  for (let i=puzzle.length; i<final; i++) {
    if (puzzle.includes(currVal)) {
      puzzle.push(currVal);
      diff = findDiff(puzzle,currVal);
      currVal=diff;
    }
    else {
      puzzle.push(currVal);
      currVal=0;
    }
  }
  let answer = puzzle[puzzle.length-1]
  return (`Part One: ${answer}`)
}
let z = endOfLine(puzzle,2020);
console.log(z);