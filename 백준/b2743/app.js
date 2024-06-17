const fs = require('fs');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('');

let str = input;

solution(str)

function solution(str) {
    // write here
    console.log(str.length);
}