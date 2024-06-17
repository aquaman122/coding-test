const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


solution(+input[0])

function solution(N) {
    // write here
    let num = N;
    let sum;

    let count = "";

    while(true) {
        count++;

        sum = (num % 10) + Math.floor(num / 10);
        num = (num % 10) * 10 + sum % 10;

        if (num === N) {
            break;
        }
    }
    console.log(count);
}