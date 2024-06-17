const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = input.shift();

solution(n);

function solution(n) {
  function gcd(a, b) {
    while(b !== 0) {
      let r = a%b;
      a = b;
      b = r;
    }
    return a;
  }

  const answer = [];

  for (let i =0; i < n; i++) {
    const arr = input[i].split(' ').map(v => +v);
    const t = arr.shift();
    arr.sort((a, b) => b - a);
    let result = 0;

    for (let j = 0; j < t; j++) {
      for (let k = j + 1; k < t; k++) {
        let common = gcd(arr[j], arr[k]);
        result += common;
      }
    }
    answer.push(result);
  }
  console.log(answer.join('\n').trim());
}