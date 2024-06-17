const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const [N, M] = input.shift().split(' ').map(v => +v);

solution(N, M)

function solution(N, M) {
  // write here
  const basket = new Array(N).fill().map((v, i) => i + 1);
  for (let i =0; i < M; i++) {
    const [a, b] = input[i].split(' ').map(v => +v);
    let arr = [];
    for (let j =a - 1; j < b; j++) {
      arr.push(basket[j]);
    };
    arr.reverse();
    basket.splice(a-1, b-a+1, ...arr);
  }
  console.log(basket.join(' '));
}
