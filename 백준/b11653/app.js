const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = +input;

solution(N);

function solution(N) {
  const answer = [];
  for (let i = 2; i <= N; i++) {
    while (N % i === 0) {
      N = N / i;
      answer.push(i);
    }
  }
  console.log(answer.join('\n'));
}