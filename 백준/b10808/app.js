const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('');

const s = input;

solution(s);

function solution(s) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const counts = new Array(26).fill(0);

  s.forEach(i => counts[alphabet.indexOf(i)]++);

  console.log(counts.join(' '));
}