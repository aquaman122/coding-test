const fs = require('fs');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const testCase = input[0];



solution(testCase)

function solution(testCase) {
    // write here

    let sum = 0;
    
    for (let i = 1; i <= testCase; i++) {
        let score = input[i].split(' ').map((item) => +item);
        let num = score.shift();
        let count = 0;
        let avg = score.reduce((acc, v) => acc += v * 1, 0);

        avg /= num;

        for (let j = 0; j <= num; j++) {
            if (score[j] > avg) {
                count++;
            }
        }

        let result = ((count / num) * 100).toFixed(3);

        console.log(result + "%");
    }
}