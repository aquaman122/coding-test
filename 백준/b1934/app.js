const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = +input.shift();

solution(n);

function solution(n) {
  let ans = [];

  for (let i =0; i < n; i++) {
    let [a, b] = input[i].split(' ').map(v => +v);

    let originalA = a;
    let orignialB = b;

    while(a % b !== 0) {
      let r = a % b;

      if (r !== 0) {
        a = b;
        b = r;
      }
    }

    let min = originalA * orignialB / b;
    ans.push(min);
  }
  console.log(ans.join('\n'));
}