const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [a, b, c] = fs.readFileSync(filePath).toString().split(' ').map(v => +v);

solution(a, b, c);

function solution(a, b, c) {
    // write here
    let nums = [a, b, c];
    if (a === b && a === c) {
        console.log(10000 + a * 1000);
    } else if ( a === b || b === c || a === c ) {
        a === b || a === c ? console.log(1000 + a*100) : console.log(1000 + b*100);
    } else {
        console.log(Math.max(...nums) * 100);
    }
}