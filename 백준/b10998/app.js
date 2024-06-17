const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [a, b] = fs.readFileSync(filePath).toString().trim().split(' ');

solution(a, b);

function solution(a, b) {
  console.log(a * b);
}