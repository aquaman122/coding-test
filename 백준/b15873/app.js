const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = input;

solution(n);

function solution(n) {
  if (n < 100) {
    const [a, b] = n.toString().split('').map(v => +v);
    console.log(a + b);
  } else if (n < 1000) {
    const [a, b] = n.toString().split(0).map(v => +v);
    console.log((a * 10) + b);
  } else {
    const [a, b] = n.toString().split(0).map(v => +v);
    console.log((a * 10) + (b * 10));
  }
}