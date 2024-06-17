const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input[0];
const arr = input[1].split(' ').map(v => +v);

solution(n, arr)

function solution(n, arr) {
    // write here
    console.log(`${Math.min(...arr)} ${Math.max(...arr)}`);
}
