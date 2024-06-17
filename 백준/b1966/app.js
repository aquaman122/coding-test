const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, ...testcases] = input;

solution(n, testcases);

function solution(n, testcases) {
  let numbers = [];
  for (let i =0; i < n; i++) {

    let count = 1;
    let location = Number(testcases[i * 2].split(' ')[1]); // M
    let queue = testcases[i * 2 + 1].split(' ').map(v => +v);

    while(true) {
      const item = queue.shift();
      if (Math.max(...queue) <= item && location === 0) {
        console.log(count);
        break;
      } else if (Math.max(...queue) > item && location === 0) {
        queue.push(item);
        location = queue.length - 1;
      } else if (Math.max(...queue) > item) {
        queue.push(item);
        location--;
      } else if (Math.max(...queue) <= item) {
        count++;
        location--;
      }
    }
  }
}