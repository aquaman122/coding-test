const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [a, b, c] = fs.readFileSync(filePath).toString().split(' ').map(v => +v);

solution(a, b, c)

function solution(a, b, c) {
    // write here
    console.log(a + b + c);
}