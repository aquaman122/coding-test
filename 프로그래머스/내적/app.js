const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(v => v.split(' ').map(v => +v));

const [a, b] = input;

solution(a, b)

function solution(a, b) {
  let answer = 0;
  a.forEach((v, i) => {
    answer += v * b[i];
  });
  console.log(answer);
}
