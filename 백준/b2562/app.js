const fs = require('fs');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution()

function solution() {
    // write here
    let arr = [];
    for (let i =0; i < input.length; i++) {
        arr.push(+input[i]);
    }
    let max = Math.max(...arr);
    let idx = arr.indexOf(max) + 1;

    console.log(`${max}\n${idx}`);
}