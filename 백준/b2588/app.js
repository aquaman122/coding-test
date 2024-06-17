const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [a, b] = fs.readFileSync(filePath).toString().split('\n');


solution(a, b);

function solution(a, b) {
    // write here   
    
    let splitB = b.split('');
    let oneB = splitB[b.length - 1]
    let tenB = splitB[b.length - 2];
    let hunB = splitB[b.length - 3];
    let one = a * oneB;
    let ten = a * tenB;
    let hun = a * hunB;
    
    console.log(`${one}\n${ten}\n${hun}\n${one + ten*10 + hun*100}`);
}