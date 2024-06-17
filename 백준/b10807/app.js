const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = input.shift();
const nums = input.shift().split(' ').map(v => +v);
const v = +input;

solution(n, nums, v)

function solution(n, nums, v) {
  // write here
  let answer = nums.filter(item => item === v).length;
  console.log(answer);
}
