const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

let arr = input;

solution(arr)

function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  arr.length < 2 ? [-1] : 0;
}
