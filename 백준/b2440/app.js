const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let T = +input;

solution(T);

function solution(T) {
  for (let i = T; i > 0; i--) {
    console.log('*'.repeat(i));
  }
}