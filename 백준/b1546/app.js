const fs = require('fs');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const count = +input[0];
const score = input[1].split(' ').map((item) => +item);


solution(count, score)

function solution(count, score) {
    // write here
  const scoreMax = Math.max(...score);
  let scores = [];
  for (let i =0; i < count; i++) {
    scores.push(score[i] / scoreMax * 100);
  }
  console.log(scores.reduce((acc, cur) => acc += cur) / count);
}