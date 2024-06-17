const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution();

function solution() {
  for (let i =0; i < input.length; i++) {
    const numbers = input[i].split(' ').map(v => +v);
    let count = 0;
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[j] === 0) {
        count++;
      }
    }
    if (count === 1) {
      console.log('A');
    } else if (count === 2) {
      console.log('B');
    } else if (count === 3) {
      console.log('C');
    } else if (count === 4) {
      console.log('D');
    } else if (count === 0) {
      console.log('E');
    }
  }
}