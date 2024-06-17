const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let numbers = input.shift().split(' ').map(v => +v);
let [num1, num2] = input.map(v => +v);


solution(numbers, num1, num2)

function solution (numbers, num1 ,num2) {
  console.log(numbers.slice(num1, num2 + 1));
}
