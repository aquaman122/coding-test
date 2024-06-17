const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();

let s = input;

solution(s)

function solution(s) {
  let count = 0;
  const numbers = Array(10).fill().map((v, idx) => idx);
  numbers.forEach((v, i) => {
    for (let i =0; i < s.length; i++) {
      if (v === Number(s[i])) {
        count++;
      }
    }
  });
  count === s.length ? console.log(true) : console.log(false);
}
