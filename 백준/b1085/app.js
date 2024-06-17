const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [x, y, w, h] = input[0].split(' ').map(v => +v);

solution(x, y, w, h);

function solution(x, y, w, h) {
  let answer = [];

  answer.push((w - x), (h - y), (x - 0), (y - 0));
  console.log(Math.min(...answer));
}