const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

[T, ...person] = input;

solution(T, person);

function solution(T, person) {
  const rank = [];
  const kgCmTable = person.map(kgCm => kgCm.split(' ').map(v => +v));
  for (let i =0; i < T; i++) {
    let counter = 0;
    for (let j = 0; j < T; j++) {
      if (i !== j) {
        if (
          kgCmTable[i][0] < kgCmTable[j][0] &&
          kgCmTable[i][1] < kgCmTable[j][1]
        ) {
          counter++;
        }
      }
    }
    rank.push(counter + 1);
  }
  console.log(rank.join(' '));
}