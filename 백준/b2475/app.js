const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ');

let numbers = input.map(v => +v);

solution(numbers);

function solution(numbers) {
  let answer = 0;
  numbers.forEach((v, i) => {
    answer += v ** 2;
  });
  console.log(answer % 10);
}