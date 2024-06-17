const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map((x) => x.trim().split(' ').map((x) => +x));

const [n, m] = input.shift();

solution(n, m)


function solution(n, m) {
  // write here
  const array = Array.from(Array(n), () => Array(m).fill(0));

  for (let i =0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      array[i][j] = input[i][j] + input[i + n][j];
    }
  }
  
  let answer = '';
  for (let i =0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      answer += array[i][j].toString() + ' ';
    }
    answer += '\n';
  }
  console.log(answer);
}