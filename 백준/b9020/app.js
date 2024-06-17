const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const T = +input.shift();

solution(T);

function solution(T) {
  const n = 2;
  const m = 10000;

  let prime = [];
  for (let i = n; i <= m; i++) {
    prime[i] = i;
  }
  for (let i = 2; i <= m; i++) {
    if (prime[i] === 0) continue;
    for (let j = i + i; j <= m; j += i) {
      prime[j] = 0;
    }
  }
  prime = prime.filter(n => n !== 0);
  
  for (let i =0; i < T; i++) {
    const num = Number(input[i]);
    let answer = [];
    // 주어진 수의 절반보다 작은 소수만 탐색
    for (let j = 0; prime[j] < num / 2 + 1; j++) {
      // (주어진 수 - 소수)가 소수인지
      const index = prime.indexOf(num - prime[j]);

      if (index !== -1) {
        answer.push([prime[j], prime[index]]);
      }
    }
    if (answer.length !== 0) {
      const a = answer.pop();
      console.log(`${a[0]} ${a[1]}`);
    }
  }
}