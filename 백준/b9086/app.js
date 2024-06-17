const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [T, ...strings] = input

solution(strings);

function solution(strings) {
    const answer = [];
    strings.forEach((string) => {
        answer.push(`${string[0]}${string[string.length -1 ]}`);
    });

    console.log(answer.join('\n'));
}