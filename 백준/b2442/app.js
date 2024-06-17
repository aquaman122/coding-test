const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let T = +input.shift();

solution(T);

function solution(T) {
  let output = '';
  for (let i = 1; i <= T; i++) {
    output += ' '.repeat(T - i) + '*'.repeat(i * 2 - 1) + '\n'
  }
  console.log(output);
}