const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = +input;

solution(n);

function solution(n) {
  const DP = [0, 1];

  for (let i = 1; i < n; i++) {
    DP[i + 1] = DP[i] + DP[i-1];
  }
  console.log(DP[n]);
}