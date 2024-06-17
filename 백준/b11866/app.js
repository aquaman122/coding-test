const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();

const [n, k] = input.split(' ').map(v => +v);

solution(n, k);

function solution(n, k) {
  const answer = [];
  const arr = new Array(n).fill().map((v, i) => i + 1);
  for (let i =0; i < n; i++) {
    for (let j = 1; j <= k; j++) {
      if (j === k) {
        answer.push(arr.shift());
      } else {
        arr.push(arr.shift());
      }
    }
  }
  console.log(`<${answer.join(', ')}>`);
}