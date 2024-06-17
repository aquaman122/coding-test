const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();

solution();

function solution() {
  const [N, M] = input.split(' ').map(v => +v);
  console.log(Math.abs(N - M));
}