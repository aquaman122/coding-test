const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();

solution();

function solution() {
  const numbers = input.split(' ');
  const [a, b, c, d] = numbers;
  console.log(Number(a + b) + Number(c + d));
}