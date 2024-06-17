const fs = require('fs');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let K = +input.shift();

solution(K)

function solution(K) {
    // write here 
  const array = [];
  let answer = 0;
  let numbers = [];

  for (let i = 0; i < K; i++) {
    numbers.push(+input[i]);
    if (numbers[i] > 0) {
      array.push(numbers[i]);
    } else if (numbers[i] === 0) {
      array.pop();
    }
  }
  for (let i =0; i <array.length; i++) {
    answer += array[i];
  }
  console.log(answer);
}