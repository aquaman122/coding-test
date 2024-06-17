const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [a, b] = fs.readFileSync(filePath).toString().trim().split(" ").map(v => +v);

solution(a, b);

function solution(a, b) {
  console.log(`${a + b}\n${a - b}\n${a * b}\n${Math.floor(a/b)}\n${a % b}`);
}