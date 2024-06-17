const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution();

function solution() {
  let avg = 0;
  for (let i =0; i < input.length; i++) {
    if (+input[i] >= 40) {
      avg += +input[i];
    } else {
      avg += 40;
    }
  }
  console.log(avg / input.length);
}