const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();

const [price, money, count] = input.split(' ').map(v => +v);

solution(price, money, count)

function solution(price, money, count) {
  let answer = 0;
  for (let i =1; i <= count; i++) {
    answer += price * i;
  }
  console.log(answer - money);
}
