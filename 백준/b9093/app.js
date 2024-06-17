const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const test = +input.shift();

solution(test)

function solution(test) {
    // write here

    for (let i = 0; i < test; i++) {
        let words = input[i].split(' ');
        let answer = words.map((word) => word.split('').reverse().join('')).join(' ');
        console.log(answer);
    }
}
