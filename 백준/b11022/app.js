const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


T = +input[0];


solution(T)

function solution(T) {
    // write here

    for (let i = 1; i <= T; i++) {
        let num = input[i].split(' ').map((item) => +item);
        let A = num[0];
        let B = num[1];

        console.log(`Case #${i}: ${A} + ${B} = ${A + B}`);
    }
}