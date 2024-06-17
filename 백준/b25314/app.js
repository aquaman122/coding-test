const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let n = +input;


solution(n)

function solution(n) {
    // write here
  const answer = [];
  for (let i =0; i < Math.floor(n / 4); i++) {
    answer.push('long');
  }
  console.log(`${answer.join(' ')} int`);
}
