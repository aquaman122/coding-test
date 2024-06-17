const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('');

const iter = input.length;

solution(iter);

function solution(iter) {
  const ans = [];
  for (let i =0; i < iter; i++) {
    const candidate = input.join('');
    ans.push(candidate);

    input.shift();
  }
  ans.sort();

  console.log(ans.join('\n'));
}