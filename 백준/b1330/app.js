const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [a, b] = fs.readFileSync(filePath).toString().split(' ').map(v => +v);

solution(a, b);

function solution(a, b) {
    // write here
    if (a === b) {
        console.log('==');
    } else {
        a > b ? console.log('>') : console.log('<');
    }
}