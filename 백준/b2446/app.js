const { reverse } = require('dns');
const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = +input;

solution(n);

function solution(n) {
  let result = [];
  let reverseResult = [];

  let blank = 0;
  let star = n * 2 - 1;

  for (let i = 1; i <= n; i++) {
    result.push(' '.repeat(blank) + '*'.repeat(star));

    blank = i;
    star -= 2;
  }

  reverseResult = result.slice(0, -1).reverse().join('\n');

  console.log(result.join('\n'));
  console.log(reverseResult);
}