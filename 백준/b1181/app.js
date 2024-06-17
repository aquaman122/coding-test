const { group } = require('console');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let n = +input.shift();

solution(n)

function solution(n) {
    // write here  
    const sorted = [];
    const lengthArr = input.map(str => str.length);
    const max = Math.max.apply(null, lengthArr);
    const min = Math.min.apply(null, lengthArr);
    
    for (let i =min; i <= max; i++) {
        const group = [];
        for (let j =0; j < n; j++) {
            if (input[j].length === i) {
                if (group.indexOf(input[j]) === -1) group.push(input[j]);
            }
        }
        if (group.length > 1) {
            sorted.push(...group.sort());
        } else {
            sorted.push(...group);
        }
    }
    console.log(sorted.join('\n'));
}