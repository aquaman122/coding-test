const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let x = +input.shift();
let n = +input.shift();

solution(x, n)

function solution(x, n) {
    // write here
    let result = 0;
    for (let i =0; i < n; i++) {
        const [price, num] = input[i].split(' ').map(v => +v);
        result += price * num;
    }
    result === x ? console.log('Yes') : console.log('No');
}