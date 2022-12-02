const fs = require('fs');
const raw = fs.readFileSync('./input13.txt', 'utf-8').trim().split('\r\n');
let rawTwo = [...raw];

//PartOne data Prep
raw[1] = raw[1].replace(/x,/g,'').split(',');
for (let i=0;i<raw[1].length;i++) {
    raw[1][i] = Number(raw[1][i]);
}
raw[0] = Number(raw[0])

//Part Two Data Prep
rawTwo.shift()
let busesTwo = rawTwo[0].split(/,/g);
let busesTwoArr=[]
for (let i=0; i<busesTwo.length; i++) {
    if (busesTwo[i]!=='x') {
         busesTwo[i]=Number(busesTwo[i]);
         busesTwoArr.push(Array.of(busesTwo[i],i))
    }
}

//PART TWO

// The do/while loop works but the run time is too great.  I did not program the last step but rather ran the code for
// each successively larger array and manually increased the initial i and the step increase for the i.  I was stuck for a long
// time until I figured out the formula.
// So, you can't use the code for Part Two without manual manipulation.

const busSchedTwo = (arr) => {
    let i=57172854366423;
    let mark = i;
    let count=0;
    let diff=0;
    do {
        count=0
            i +=37792522553201;
            for (let j=0; j<arr.length; j++) {
                diff = ((i+arr[j][1]) % (arr[j][0]));
                count += diff;
            }
            //console.log(count,i)
        } while (count !== 0)
    console.log(`end`,i)
}
let k = 19380331813222
let m = 57172854366423
console.log(m-k)

busSchedTwo(busesTwoArr)
console.log (busesTwoArr)

//PART ONE
const busSched = (arr) => {
    let myTime = raw[0];
    let buses = raw[1];
    let diffLow = 50;
    let diff=50;
    let bus = 0;
    for (let i=0; i<buses.length; i++) {
        diff = buses[i] - myTime%buses[i];
        if (diff<diffLow) {
            diffLow=diff;
            bus = buses[i];
        }

    }
    let ans = diffLow*bus
    return (`Part One: ${ans}`);
}

let x = busSched(raw);
console.log(x);