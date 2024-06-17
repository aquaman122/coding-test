const fs = require('fs');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map(x => x.split(' ').map((x) => +x));

const n = +input.shift();

solution(n)

function solution(n) {
    // write here

    let arr = new Array(100).fill().map((el) => new Array(100).fill(false));

    for (let  i =0; i < n; i++) {
        const x = input[i][0];
        const y = input[i][1];

        for (let j = 0; j < 10; j++) {
            for (let k =0; k < 10; k++) {
                arr[x + j][y + k] = true;
            }
        }
    }
    let result = arr.reduce((past,curr) => {
        for (let el of curr) {
            if (el) past++;
        }
        return past;
    }, 0);
    console.log(result);
}