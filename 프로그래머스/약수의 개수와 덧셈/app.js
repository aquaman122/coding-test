const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ').map(v => +v);

const [left, right] = input;

solution(left, right)

function solution(left, right) {
  let answer = 0;
  let count = 0;
  for (let i = left; i <= right; i++) {
    for (let j = 0; j <= i; j++) {
      if( i % j === 0) {
        count++;
      }
    }

    if (count % 2 === 0) {
      answer += i;
      count = 0;
    } else {
      answer -= i;
      count = 0;
    }
  }
  console.log(answer);
}
