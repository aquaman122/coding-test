const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();

const [n, k] = input.split(' ').map(v => +v);

const fa = num => {
  let result = 1;
  for (let i = num; i > 1; i--) {
    result *= i;
  }
  return result;
}

function solution(n, k) {
  return n === k ? 1 : fa(n) / (fa(n - k) * fa(k));
}
console.log(solution(n, k));