const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(v => +v);

const n = input.shift();
const sorted = input.sort((a , b) => a - b);

solution(n, sorted)

function solution(n, sorted) {
    // write here
    for (let i =0; i < n; i++) {
        console.log(sorted[i]);
    }
}