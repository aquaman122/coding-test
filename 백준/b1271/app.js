const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();

const [n, m] = input.split(' ').map(v => BigInt(v));

solution(n, m);

function solution(n, m) {
  console.log((n / m).toString());
  console.log((n % m).toString());
}