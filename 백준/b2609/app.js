const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

let [a, b] = input.map((x) => +x);

solution(a, b);

function solution(a, b) {
    // write here

    // 유클리드 호제법
    let i = a;
    let j = b;

    while (i % j !== 0) {
        let n = i % j;
        if (n !== 0) {
            i = j;
            j = n;
        }
    }
    console.log(j);
    console.log(a * b / j);
}