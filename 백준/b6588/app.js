const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(v => +v);

solution();

function solution() {
  let ans = "";
  const max = Math.max(...input);

  let isPrime = new Array(max + 1).fill(true);

  isPrime[0] = false;
  isPrime[1] = false;

  for (let i = 2; i * i < max; i++) {
    if (isPrime[i]) {
      let multiple = 2;

      while (i * multiple < max) {
        isPrime[i * multiple] = false;
        multiple++;
      }
    }
  }

  input.map((item) => {
    for (let i = 3; i <= item; i++) {
      if (isPrime[i] && isPrime[item - i]) {
        ans += `${item} = ${i} + ${item - i}\n`;
        break;
      }
      console.log(isPrime[i]);
    }
  });
  console.log(ans);
}