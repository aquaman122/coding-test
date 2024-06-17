const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const numbers = input[0].split(' ');
const direction = input[1];

solution(numbers, direction)

function solution(numbers, direction) {
  const answer = [];
  switch (direction) {
    case 'right':
      answer.push(numbers[numbers.length - 1]);
      for (let i = 0; i < numbers.length - 1; i++) {
        answer.push(numbers[i]);
      }
      break;
    case 'left':
      for (let i = 1; i < numbers.length; i++) {
        answer.push(numbers[i]);
      }
      break;
  }
  console.log(answer);
}
