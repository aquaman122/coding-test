const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input.map((item) => +item);

solution(input[0], input[1]);

function solution(A, B) {
    // write here

    console.log(A, B);
    
    if ( A > 0 ) {
        B > 0 ? console.log("1") : console.log("4");
    } else if ( A < 0) {
        B > 0 ? console.log("2") : console.log("3");
    }
}