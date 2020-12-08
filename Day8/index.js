const fs = require('fs') 
  
const raw = fs.readFileSync('input.txt').toString();

let splitRaw1 = raw.split(/\n/);
let splitRaw2 = raw.split(/\n/);

let end = splitRaw2.length;

//changing jmp to nop

const partTwo = (splitRaw) => {

for (let j=0; j<end; j++) {
  let accume=0;
  let counter=[];
  let i=0;

  if (splitRaw[j].slice(0,3)==='jmp') {
    splitRaw[j]=('nop +1');
    while (!(counter.includes(i))) {
      if (splitRaw[i].slice(0,3)==='acc') {
        counter.push(i);
        accume += Number(splitRaw[i].slice(4))
        i++;  
      }
      else if (splitRaw[i].slice(0,3)==='nop') {
        counter.push(i);
        i++;
      }
      else  if (splitRaw[i].slice(0,3)==='jmp') {
        counter.push(i);
        i+= Number(splitRaw[i].slice(4));
      }
      if (i>=end) { 
        return (`PartTwo answer: ${accume}`);
      }
    }
    splitRaw = raw.split(/\n/);
  }
}
}


const partOne = (splitRaw) => {
  let accume=0;
  let counter=[];
  let i=0;
  let end = splitRaw.length;

  while (!(counter.includes(i))) {
    if (splitRaw[i].slice(0,3)==='acc') {
      counter.push(i);
      //console.log(splitRaw[i].slice(4))
      accume += Number(splitRaw[i].slice(4))
      //console.log(accume);
      i++;  
    }
    else if (splitRaw[i].slice(0,3)==='nop') {
      counter.push(i);
      i++;
    }
    else  if (splitRaw[i].slice(0,3)==='jmp') {
      counter.push(i);
      i+= Number(splitRaw[i].slice(4));
    }
    if (i > end || i<0) { 
      console.log(accume);
      break;
    }
  }
return (`PartOne answer: ${accume}`);
}

console.log(partOne(splitRaw1));
console.log(partTwo(splitRaw2));