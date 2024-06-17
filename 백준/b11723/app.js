const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const t = input.shift();

solution(t);

function solution(t) {
  const ans = [];
  let s = 0;
  for (let i = 0; i < t; i++) {
    const [op, x] = input[i].split(' ');
    switch (op) {
      case 'add':
        s = s | x ;
        break;
      case 'remove':
        if ((s & x) === x) s -= x;
        break;
      case 'check':
        ans.push((s & x) === x ? 1 : 0);
        break;
      case 'toggle':
        s = (s & x) === x ? s - x : s + x;
        break;
      case 'all':
        s = 0b11111111111111111111;
        break;
      case 'empty':
        s = 0;
        break;
      default:
        break;
    }
  }
  console.log(ans);
}