const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(v => +v);

solution();

function solution() {
    // write here
  for (let i = 0; i < input.length; i++) {
    let gcd = 0;
    let numbers = []
    for (let j = 1; j < input[i]; j++) {
      if (input[i] % j === 0) {
        gcd += j;
        numbers.push(j);
      }
    }
    if (input[i] === gcd) {
      console.log(`${input[i]} =`, numbers.map((item, idx) => item).join(' + '));
    } else if (input[i] === -1) {
      continue;
    }
    else if (input[i] !== gcd) {
      console.log(`${input[i]} is NOT perfect.`);
    }
  }
}