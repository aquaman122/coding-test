const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = Number(fs.readFileSync(filePath).toString().trim());

function factorial(n) {
  if(n === 0 || n === 1) {
    return 1n;
  }

  return BigInt(n) * factorial(n - 1);
}

let result = factorial(input);

let resultArr = String(result).split('');

let count = 0;

while(true) {
  let popedNum = resultArr.pop();

  if (popedNum === '0') {
    count++;

    continue;
  }

  break;
}

console.log(count);