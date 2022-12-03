const fs = require('fs') 
  
const raw = fs.readFileSync('input3.txt').toString();
let arr = raw.split('\n')

const partOne = (arr) => {
    let total=0;
    for (let x=0; x<arr.length; x++) {
        let len = arr[x].length
        let tempEnd = arr[x].slice(len/2)
        let tempBegin = arr[x].slice(0,len/2)
        let z=0;

        for (y of tempBegin) {
            tempEnd.includes(y) ?
            z = y.charCodeAt(0) : null;     
        }
        z>96 ? z=z-96 : z=z-38

        total+=z
    }
    return total
}

console.log('The solution to Part One is', partOne(arr))

const partTwo = (arr) => {
    let total=0;

    for (let x=0; x<arr.length; x+=3) {
        let tempEnd = arr[x+2]
        let tempMid = arr[x+1]
        let tempBegin = arr[x]

        let tempArr=[];

        let char=0;
        console.log('tempEnd',tempEnd,'tempBegin',tempBegin, 'tempMid', tempMid)

        for (let y of tempBegin) {
            tempMid.includes(y) ? tempArr.push(y) : null
        }
        for (let z of tempArr) {
            tempEnd.includes(z) ? char=z.charCodeAt(0) : null
        }

        char>96 ? char=char-96 : char=char-38

        total+=char
        console.log(total)
    }
    return total
}

console.log('The solution to Part Two is', partTwo(arr))