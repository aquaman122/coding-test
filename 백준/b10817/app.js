const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution();

function solution() {
  const numbers = input[0].split(' ').map(v => +v).sort((a, b) => a - b);
  console.log(numbers[Math.floor(numbers.length / 2)]);
}