const fs = require('fs');
const cards = fs.readFileSync('./input22.txt', 'utf-8').trim().split('\r\n\r\n');

let player1 = cards[0].split(/\r\n/);
let player2 = cards[1].split(/\r\n/);

let stop = 0;

//Convert Player Strings to Numbers

for (let i=0; i<player1.length; i++) {
    player1[i] = Number(player1[i]);
}
for (let i=0; i<player2.length; i++) {
    player2[i] = Number(player2[i]);
}

// Check to see if will infinitely recurse
let totSumArr=[];
const infinCount = (player1,player2) => {
    let sum1 = 0
    for (let i=0; i<player1.length; i++) {
        sum1 += player1[i] * (player1.length-i);
        sum1=sum1+player1.length;
    }
    let sum2 = 0
    for (let i=0; i<player2.length; i++) {
        sum2 += player2[i] * (player2.length-i);
        sum2=sum2+player2.length
        sum2 = sum2 *2;
    }
    let totSum = sum1+sum2;

    if (totSumArr.includes(totSum)) {
        return 1;
    }
    totSumArr.push(totSum);
}

// Play subGame
const subGame = (player1, player2) => {
    totSumArr=[];

    //slice the correct number of cards
    let sub1 = player1.slice(1,player1[0]+1);
    let sub2 = player2.slice(1,player2[0]+1); 

    // play subGame
    while (sub1.length > 0 && sub2.length > 0) {
        // check for recursion
        let stop=0;
        stop = infinCount (sub1, sub2);
            if (stop === 1) {
                return 1;
            }
        if (sub1[0] > sub2[0]) {
            let temp1 = sub1.shift();
            let temp2 = sub2.shift();
            sub1.push(temp1);
            sub1.push(temp2);
        }

        else if (sub2[0] > sub1[0]) {
            let temp2 = sub2.shift();
            let temp1 = sub1.shift();
            sub2.push(temp2);
            sub2.push(temp1);
        }
    }
    if (sub1.length>0) {
        return 1;
    }
    else return 2;
}
 
// Play Main Game
const playPrimary = (player1, player2) => {

    //Play main game
    while (player1.length > 0 && player2.length > 0) {

        //check for length in order to play recursive subgame, play subGame
        let subResult = 0;
        if (player1[0]<=(player1.length-1) && player2[0]<=(player2.length-1)) {
             subResult = subGame(player1, player2);
        }
        //play main game
        if (subResult === 0 && player1[0] > player2[0]) {
            let temp1 = player1.shift();
            let temp2 = player2.shift();
            player1.push(temp1);
            player1.push(temp2);
        }

        else if (subResult === 0 && player2[0] > player1[0]) {
            let temp2 = player2.shift();
            let temp1 = player1.shift();
            player2.push(temp2);
            player2.push(temp1);
        }
        
        else if (subResult === 1) {
            let temp1 = player1.shift();
            let temp2 = player2.shift();
            player1.push(temp1);
            player1.push(temp2);
        }

        else if (subResult === 2) {
            let temp2 = player2.shift();
            let temp1 = player1.shift();
            player2.push(temp2);
            player2.push(temp1);
        }
    }
    if (player1.length > 0) {
      winner = player1;  
    }

    else winner = player2;
    let sum = 0
    for (let i=0; i<winner.length; i++) {
        sum += winner[i] * (winner.length-i)
    }
    return console.log(`Part Two: ${sum}`)
}

playPrimary(player1, player2);






//PART ONE
// for (let i=0; i<player1.length; i++) {
//     player1[i] = Number(player1[i]);
// }
// for (let i=0; i<player2.length; i++) {
//     player2[i] = Number(player2[i]);
// }

// let i=0;
// while (player2.length > 0 && player1.length > 0) {

//     if (player1[i] > player2[i]) {
//         let temp1 = player1.shift();
//         let temp2 = player2.shift();
//         player1.push(temp1);
//         player1.push(temp2);
//     }

//     else if (player2[i] > player1[i]) {
//         let temp2 = player2.shift();
//         let temp1 = player1.shift();
//         player2.push(temp2);
//         player2.push(temp1);
//     }
// }


// console.log(player1);
// console.log(player2);

// let winner = player1;
// let sum = 0
// for (let i=0; i<winner.length; i++) {
//     sum += winner[i] * (winner.length-i)
// }

// console.log(sum);