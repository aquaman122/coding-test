const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, x] = input[0].split(' ').map(v => +v);
const arr = input[1].split(' ').map(v => +v);

solution(n, x, arr)

function solution(n, x, arr) {
    // write here
    let answer = arr.filter(item => item < x);
    console.log(answer.join(' '));
}