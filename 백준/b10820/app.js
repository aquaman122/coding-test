const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution();

function solution() {
  // 소문자 대문자 숫자 공백
  const ans = [];
  for (let i =0; i < input.length; i++) {
    const str = input[i].split('');
    if (input.length === 0) continue;
    let strArr = [0, 0, 0, 0];
    for (let j =0; j < str.length; j++) {
      let ascii = str[j].charCodeAt();
      if (ascii >= 97 && ascii <= 122) {
        strArr[0]++;
      } else if (ascii >= 65 & ascii <=90) {
        strArr[1]++;
      } else if (ascii >= 48 && ascii <=57) {
        strArr[2]++;
      } else if (ascii === 32) {
        strArr[3]++;
      }
    }
    ans.push(strArr.join(' '));
  }
  console.log(ans.join('\n'));
}