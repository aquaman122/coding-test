const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const n = input.shift();

solution(n)

function solution(n) {
    // write here
    // 빈 배열
    const answer = [];
    const arr = [];
    for (let i =0; i < n; i++) {
      switch (input[i]) {
        case 'pop':
          answer.push(arr.length === 0 ? -1 : arr.pop());
          break;
        case 'size':
          answer.push(arr.length);
          break;
        case 'empty':
          answer.push(arr.length === 0 ? 1 : 0);
          break;
        case 'top':
          answer.push(arr.length === 0 ? -1 : arr[arr.length - 1]);
          break;
        default :
          arr.push(input[i].split(' ')[1]);
          break;
      }
    }
    console.log(answer.join('\n'));
}