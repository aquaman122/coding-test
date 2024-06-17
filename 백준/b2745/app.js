const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [n, b] = fs.readFileSync(filePath).toString().trim().split(' ');

solution(n, b);

function solution(n, b) {
  n = n.split('').reverse();
  b = +b;
  let result = 0;

  for (let i =0; i < n.length; i++) {
    const utf = n[i].charCodeAt();

    if (utf >= 65 && utf <= 90) {
      result += (utf - 55) * b ** i;
    } else {
      result += Number(n[i]) * b ** i;
    }
  }
 console.log(result);
}