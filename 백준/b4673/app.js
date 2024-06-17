const fs = require('fs');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


solution()

function solution() {
    // write here
    let arr = [];
    let answer = [];
    
    for (let i = 1; i <= 10000; i++) {
      let N = 0;
      let stringNumber = String(i);
      for (let j = 0; j < stringNumber.length; j++) {
        N += Number(stringNumber[j]);
      }
      let nNum = i + N;
      arr.push(nNum);
    }
    
    for (let i = 1; i <= 10000; i++) {
      if (arr.indexOf(i) === -1) {
        answer += i + "\n";
      }
    }
    
    console.log(answer);
}