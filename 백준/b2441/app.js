const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const T = +input;

solution(T);

function solution(T) {
  for (let i = 0; i < T; i++) {
    console.log(' '.repeat(i) + '*'.repeat(T - i));
  }
}