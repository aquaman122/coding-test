const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let words = fs.readFileSync(filePath).toString().split('\n');
let maxLength =  Math.max(...words.map(v => v.length));


solution();

function solution() {
    // write here
    const answer = [];
    for (let i = 0; i < maxLength; i++) {
        for (let j = 0; j < words.length; j++) {
            answer.push(words[j][i]);
        }
    }
    console.log(answer.join(''));
}