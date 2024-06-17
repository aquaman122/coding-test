const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(v => +v);

solution();

function solution() {
  let a;
  let b;
  for (let i =0; i < input.length; i++) {
    a = input[0];
    b = input[1];
  }
  console.log(b + ( b - a));
}