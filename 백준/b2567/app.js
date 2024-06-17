const fs = require('fs');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n').map(x => x.split(' ').map((x) => +x));

const n = +input.shift();

solution(n)

function solution(n) {
    // write here
    let arr = new Array(100).fill().map((el) => new Array(100).fill(false));
    let ovPart = 0;
    for (let i =0; i < n; i++) {
        const x = input[i][0];
        const y = input[0][i];

        for (let j = 0; j < 10; j++) {
            for (let k = 0; k < 10; k++) {
                if (!arr[x + j][y + k]) {
                    arr[x + j][y + k] = true;
                } else {
                    ovPart++;
                }
            }
        }
    }
    let colorPart = arr.reduce((past, cur) => {
        for (let el of cur) {
            if (el) past++;
        }
        return past;
    }, 0)
    let empty = 400 - (colorPart + ovPart); // 최대 400 - 색칠부분에서 색칠안된부분 
    let answer = (ovPart + empty) - colorPart;
    console.log(answer);
}