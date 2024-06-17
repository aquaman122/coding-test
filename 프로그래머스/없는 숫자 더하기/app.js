const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ').map(v => +v);

const numbers = input

solution(numbers)

function solution(numbers) {
  let answer = 0;
  answer = 45 - numbers.reduce((acc, cur) => acc += cur);
  console.log(answer);
}
