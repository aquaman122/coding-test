const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [n, b] = fs.readFileSync(filePath).toString().trim().split(' ');

n= +n;
b= +b;

solution(n, b);

function solution(n, b) {
  let result= [];
  
  while (n >= b) {
    let remainder = n % b;
    let quotient = Math.trunc(n / b);

    if (remainder >= 10) {
      result.push(String.fromCharCode(remainder + 55));
    } else {
      result.push(remainder);
    }
    n = quotient;
  }

  if (n >= 10) {
    result.push(String.fromCharCode(n + 55));
  } else {
    result.push(n);
  }
  console.log(result.reverse().join(''));
}