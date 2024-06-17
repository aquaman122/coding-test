const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let n = +input;

solution(n)

function solution(n) {
    // write here
    let result = 1;

    for (let i = 1; i <= n * 1; 1++) {
        result *= i;
    }
    console.log(result);
}