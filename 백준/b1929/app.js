const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

const [M, N] = input.map(v => +v);

solution(M, N)

function solution(M, N) {

  const array = new Array(N + 1).fill(true).fill(false, 0 ,2);

  for (let i = 2; i <= Math.ceil(Math.sqrt(N)); i++) {
    if (array[i]) {
      for (let j = i * i; j <= N; j+= i) {
        array[j] = false;
      }
    }
  }

  const answer = [];
  for (let i = M; i < N; i++) {
    if(array[i]) {
      answer.push(i);
    }
  }
  console.log(answer.join('\n'));
}

