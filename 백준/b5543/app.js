const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(v => +v);

solution();

function solution() {
  const bergers = [];
  const drinks = [];
  for (let i = 0; i < 3; i++) {
    bergers.push(input[i]);
  }
  for (let i = 0; i < 2; i++) {
    drinks.push(input[i + 3]);
  }
  console.log(Math.min(...bergers) + Math.min(...drinks) - 50);
}