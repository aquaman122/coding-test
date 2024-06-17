const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = +input.shift();
let array = '';
  for (let i =0; i < input.length; i++) {
    array = input[i].split(' ').map(v => +v);
  }

solution(n, array)

function solution(n, array) {
  let arr = [];
  array.forEach(v => {
    arr.push(Math.abs(v - n));
  })
  const min = Math.min(...arr);

  let check = [];
  for (let i =0; i < arr.length; i++) {
    if (arr[i] === min) {
      check.push(array[i]);
    }
  }
  console.log(Math.min(...check));
}
