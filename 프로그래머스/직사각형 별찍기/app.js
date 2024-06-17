const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();

const [a, b] = input.split(' ').map(v => +v);

solution(a, b)

function solution(a, b) {
  let output = '';
  // b  세로
  for (let i = 0; i < b; i++) {
    // a 가로
    for (let j =0; j < a; j++) {
      output += '*';
    }
    output += '\n';
  }
  console.log(output);
}
