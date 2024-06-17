const fs = require('fs');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(v => +v);


solution()

function solution() {
    // write here
    let dwarf = null;

    for (let i =0; i < input.length - 1; i++) {
      for (let j = i + 1; j < input.length; j++) {
        const sum = input.reduce((acc, curr) => {
          return acc + curr;
        }, 0);
        if (sum - input[i] - input[j] === 100) {
          dwarf = input.filter((height) => height !== input[i] && height !== input[j]);
        };
      }
    }
    console.log(dwarf.sort((a, b) => a - b).join('\n'));
}