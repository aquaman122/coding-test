const fs = require('fs');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ').map((item) => +item);

let N = +input;

solution(N)

function solution(N) {
    // write here
  let count = 0;
  for (let i =1; i <= N; i++) {
    let nArr = String(i);
    if ( i < 100) {
      count++
    }
    if ( i < 1000 ) {
      let firstNum = Number(nArr[1]) - Number(nArr[0]);
      let secoundNum = Number(nArr[2]) - Number(nArr[1]);
      if (firstNum === secoundNum) {
        count++;
      }
    }
    if ( i < 10000) {
      let firstNum = Number(nArr[1]) - Number(nArr[0]);
      let secoundNum = Number(nArr[2]) - Number(nArr[1]);
      let thirdNum = Number(nArr[3]) - Number(nArr[2]);
      if (firstNum === secoundNum && secoundNum === thirdNum) {
        count++;
      }
    }
  }
  console.log(count);
}