const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let T = +input;

solution(T);

function solution(T) {
  const DP = [0, 1];
  for (let i = 1; i < T; i++) {
    DP[i + 1] = BigInt(DP[i]) + BigInt(DP[i - 1]);
  }
  console.log(DP[T].toString());
}