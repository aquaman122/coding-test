const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let n = +input;

solution(n);

function solution(n) {
    // write here
  let result = [];
  for (let i =1; i< input; i++) {
    let side = ' '.repeat(input - i);
    let middle = '*'.repeat(i*2-1);
    result.push(side + middle)
  }

  for (let i = input; i>= 1 ; i--) {
    let side = ' '.repeat(input-i);
    let middle = '*'.repeat(i*2-1);
    result.push( side + middle);
  }
  console.log(result.join('\n'))
}