const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const T = +input.shift();

solution(T);

function solution(T) {
  for (let i = 0; i < T;  i++) {
    const [N, M] = input[i].split(' ').map(v => +v);
    const DP = Array.from(Array(N + 1), () => Array(M + 1).fill(0));

    for (let j = 1; j < M; j++) {
      DP[N][M] = DP[N -1][M - j];
    }
    console.log(DP[N][M]);
  }
}