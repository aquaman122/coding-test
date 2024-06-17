const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');

solution(input);

function solution(input) {
  let n = +input;
  console.log((2 ** n + 1) ** 2)
}