const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map((x) => +x);

let n = input.shift();

solution(n)

function solution(n) {
    // write here
    const arr = [];

    for (let i =0; i < n; i++) {
        arr.push(input[i]);
    }
    console.log(arr.sort().join('\n'));
}