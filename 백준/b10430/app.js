const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [a, b, c] = fs.readFileSync(filePath).toString().trim().split(' ').map(v => +v);

solution(a, b, c);

function solution(a, b, c) {
  console.log(`${(a + b) % c}\n${(a % c) + (b % c) % c}\n${(a * b) % c}\n${((a % c) * ( b% c))% c}`);
}