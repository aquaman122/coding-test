const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let [n, m] = input.shift().split(' ').map(v => +v);
const city = [];
for (let i =0; i < n; i++) {
    city.push(input[i].split(' ').map(v => +v));
}

solution(city)

function solution(city) {
    // write here
    const house = [];
    const chicken = [];
    
}