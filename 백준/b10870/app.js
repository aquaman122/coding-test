const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = +input;

function solution(n) {
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;
  return solution (n - 1) + solution(n - 2);
}

console.log(solution(n));