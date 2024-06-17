const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let array = +input;
solution(array);

function solution(array) { 
    var answer = 0;
    let arr = [];
    console.log(arr);
    answer = arr[Math.ceil(arr.length - 1) % 2];
}