const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution();

function solution() {
  let count = 0;
  for (let i=0; i < input.length - 1; i++) {
    const palindrome = input[i];
    const num = palindrome.split('').map(v => +v);
    for (let j =0; j < palindrome.length; j++) {
      if (num[j] !== num[num.length - 1 - j]) {
        count++;
      }
    }
    if (count > 0) {
      console.log('no');
    } else {
      console.log('yes');
    }
    count = 0;
  }
}