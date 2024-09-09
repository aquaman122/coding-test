const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution()

function solution(left, right) {
  let answer = 0;
  
  for (let i = left; i <= right; i++) {
      const measure = [];
      // 1. 단순 무식
      // 2. 주어진 수 절반만
      // 3. 제곱근
      for (let j =1; j <= i; j++) {
          if ( i % j === 0) {
              measure.push(j);
          }
      }
      
      if (measure.length % 2 === 0) {
          answer += i;
      } else {
          answer -= i;
      }
  }
  return answer;
}
