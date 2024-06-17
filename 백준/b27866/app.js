const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let str = input.shift();
let n = +input;

solution(str, n);

function solution(str, n) {
   console.log(str[n - 1]);
}