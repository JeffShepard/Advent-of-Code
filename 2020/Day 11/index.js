const fs = require('fs');
let seats = fs.readFileSync('./input.txt', 'utf-8').trim().split('\n')

//PART TWO

const day11Part2 = (seats) => {

  let newSeats=[];
  let seatChanged = false;
  let totTaken=0;
  let takenSeats=0;
  let newSeat='';

  do {
    const getTakenSeatsTwo = (array,row,col) => {

      let occupied=0;

      const directions = [
        [1,-1],[-1,0],
        [1,1],[-1,-1],
        [1,0],[-1,1],
        [0,1],[0,-1]
      ]

      directions.forEach(x => {
        let posX = row+x[0];
        let posY = col+x[1];


        while (posX>=0 && posY>=0 && posX<array.length &&     posY<array[0].length) {


            if (array[posX][posY]==='#') {
              occupied++;
              break;
            }
            else if (array[posX][posY]==='L') {
              break;
            }
            else if (array[posX][posY]==='.') {
              posX +=x[0];
              posY +=x[1];
            }
        }  

      })
      return occupied;
    }


      totTaken = 0;
      seatChanged=false;
    for (let i=0; i<seats.length; i++) {
      newSeats.push('');
      for (let j=0; j<seats[i].length; j++) {
        if (seats[i][j] === 'L') {
          takenSeats = getTakenSeatsTwo(seats,i,j);
          if (takenSeats===0) {
            newSeat='#';
            seatChanged = true;
          }
          else newSeat='L';
        }
        else if (seats[i][j] === '#') {
          takenSeats = getTakenSeatsTwo(seats,i,j);
          if (takenSeats>=5) {
            newSeat=('L');
            seatChanged = true;
          }
          else newSeat=('#');
        }
        else newSeat=('.')
        if (newSeat==='#') {
          totTaken++;
        }
        newSeats[i]=`${newSeats[i]}${newSeat}`;
      }
    }
    seats = [...newSeats];
    //console.log (seats,totTaken);
    newSeats=[];
  }
  while (seatChanged===true);
  return totTaken
}

let x = day11Part2(seats);
console.log(`Part Two: ${x}`)


//PART ONE

const day11Part1 = (seats) => {
  let newSeats=[];
  let seatChanged = false;
  let totTaken=0;
  let takenSeats=0;
  let newSeat='';
  do {
  //array of adjacent seats returns number of taken seats
    const getTakenSeats = (array, row, col) => {
      let adjArray = [];
      if (row>0) {
        adjArray.push(array[row-1][col-1]);
        adjArray.push(array[row-1][col]);
        adjArray.push(array[row-1][col+1]);
      }
          
      adjArray.push(array[row][col-1]);
      adjArray.push(array[row][col+1]);

      if (row<array.length-1) {
        adjArray.push(array[row+1][col-1]);
        adjArray.push(array[row+1][col]);
        adjArray.push(array[row+1][col+1]);
      }
    return (adjArray.filter(x => x==='#').length);
    }

      totTaken = 0;
      seatChanged=false;
    for (let i=0; i<seats.length; i++) {
      newSeats.push('');
      for (let j=0; j<seats[i].length; j++) {
        if (seats[i][j] === 'L') {
          takenSeats = getTakenSeats(seats,i,j);
          if (takenSeats===0) {
            newSeat='#';
            seatChanged = true;
          }
          else newSeat='L';
        }
        else if (seats[i][j] === '#') {
          takenSeats = getTakenSeats(seats,i,j);
          if (takenSeats>=4) {
            newSeat=('L');
            seatChanged = true;
          }
          else newSeat=('#');
        }
        else newSeat=('.')
        if (newSeat==='#') {
          totTaken++;
        }
        newSeats[i]=`${newSeats[i]}${newSeat}`;
      }
    }
    seats = [...newSeats];
    newSeats=[];
  }
  while (seatChanged===true); 
  return totTaken;
}

let y = day11Part1(seats);
console.log(`Part One: ${y}`);