const fs = require('fs');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const N = +input.shift();
const nums = input[0].split(' ').sort((a, b) =>a-b).map(v => +v);

solution(N, nums)

function solution(N, nums) {
    // write here
  const firstNum = nums[0];
  const lastNum = nums[nums.length - 1];
  let result = 0;

  nums.length >= 2 ? result = firstNum * lastNum: result = firstNum * firstNum;
  console.log(result);
}