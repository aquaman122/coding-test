const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input.shift();

solution(n);

function solution(n) {
  input.sort((a, b) => a.split(' ')[0] - b.split(' ')[0]);

  console.log(input.join('\n'));
}