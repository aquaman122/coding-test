const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(v => +v);

solution(N, M);

function solution(N, M) {
  const basket = new Array(N).fill().map((v, i) => i + 1);
  const stack = [];

  for (let i =0; i < M; i++) {
    const arr = input[i].split(' ').map(v => +v);
    const [I, J, K] = arr;

    basket.push(basket.splice())
  }
  console.log(stack);
}