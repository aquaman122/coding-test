const fs = require('fs');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let numbers = input.map((num) => Number(num));

solution(numbers)

function solution(numbers) {
  // write here
  let map = new Map();

  for (let i =0; i< numbers.length; i++) {
    map.set(numbers[i], 1);
  }

  for (let i =1; i <= 30; i++) {
    if(!map.has(i)) {
      console.log(i);
    }
  }
}