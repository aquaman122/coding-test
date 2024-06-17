const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map(v => +v);

let n = input.shift();

solution(n)

function solution(n) {
    // write here
  let ans = [];
  let stack = [];
  let stackNum = 1;
  for (let i = 0; i < n; i++) {
    let num = input[i];
    while(stackNum <= num) {
        stack.push(stackNum);
        ans.push('+');
        stackNum++;
    }
    let stackPop = stack.pop();
    ans.push('-');
    if (stackPop !== num) {
      ans = ['NO'];
      break;
    }
  }
  console.log(ans.join('\n'));
}