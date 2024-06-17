const fs = require('fs');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const count = +input[0];

solution(count)

function solution(count) {
    // write here

    for (let i = 1; i <= count; i++) {
        let count = 0;
        let num = 0;
        
        for (let j = 0; j < input[i].length; j++) {
            if (input[i][j] === "O") {
                count++
            } else {
                count = 0;
            }
            num += count;
        }

        console.log(num);
    }
}