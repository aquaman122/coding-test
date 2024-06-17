const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

T = +input.shift();

solution(T)

function solution(T) {
    // write here
    for (let i = 0; i < T; i++) {
        const [a, b] = input[i].split(' ').map(v => +v);
        console.log(a + b);
    }
}