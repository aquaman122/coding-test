const fs = require('fs');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ').map((item) => +item);


solution(input)

function solution(input) {
    // write here

    const chess = [1, 1, 2, 2, 2, 8];

    let answer = input.map ((i, idx) => {
      return chess[idx] - i;
    })

    console.log(...answer);
}