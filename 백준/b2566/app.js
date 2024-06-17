const fs = require('fs');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');



solution()

function solution() {
    // write here
    let answer = [];
    let totArr = [];
    for (let i =0; i < 9; i++) {
        totArr.push(input[i].split(' ').map(Number));
    }

    let flatArr = totArr.flat();

    let maxVal = flatArr.slice().sort((a, b) => b - a)[0];
    
    const maxNumIdx = flatArr.indexOf(maxVal);
    const ver = Math.floor(maxNumIdx / 9) + 1;
    const hor = maxNumIdx % 9 + 1;
    console.log(maxVal);
    console.log(`${ver} ${hor}`);
}