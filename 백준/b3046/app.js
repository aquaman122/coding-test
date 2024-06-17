const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [R1, S] = input[0].split(' ').map(v => +v);

solution(R1, S);

function solution(R1, S) {
  let R2 = S * 2 - R1;
  console.log(R2);
}