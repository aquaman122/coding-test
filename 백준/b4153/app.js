const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');


solution();

function solution() {
  const answer = [];
  for (let i =0; i < input.length - 1; i++) {
    let values = input[i].split(' ').map(v => +v);
    if (values[0] === 0) break;
    values.sort((a, b) => {
      return a - b;
    });
    
    if ((values[0] * values[0]) + (values[1] * values[1]) === (values[2] * values[2])) {
      console.log('right');
    } else {
      console.log('wrong');
    }
  }
}