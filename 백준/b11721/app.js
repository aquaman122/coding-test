const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();

solution();

function solution() {
  for (let i = 0; i <= input.length; i += 10) {
    console.log(input.slice(i, i + 10));
  }  
}