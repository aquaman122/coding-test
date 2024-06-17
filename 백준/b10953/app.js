const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let T = +input.shift();

solution(T);

function solution(T) {
  for (let i =0; i < T; i++) {
    const [a, b] = input[i].split(',').map(v => +v);
    console.log(a + b);
  }
}