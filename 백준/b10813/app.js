const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input.shift().split(' ').map(v => +v);

solution(n, m)

function solution(n, m) {
  // write here
  let arr = new Array(n).fill().map((item, i) => i + 1);
  
  for (let i =0; i < m; i++) {
    let [I, J] = input[i].split(' ').map(v => +v);
    let indexA = I - 1;
    let indexB = J - 1;
    let changeI = arr[indexA];
    let changeJ = arr[indexB];
    arr[indexA] = changeJ;
    arr[indexB] = changeI;
  }
  console.log(arr.join(' '));
  
}