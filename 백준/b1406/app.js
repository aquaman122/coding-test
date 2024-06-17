const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let lStack = input[0].split('');
let rStack = [];
let test = +input[1];

solution(lStack, rStack, test)

function solution(lStack, rStack, test) {
    // write here
    for (let i = 2; i < 2 + test; i++) {
        let [cmd, value] = input[i].split(" ");
        if (cmd === "L" && lStack.length) rStack.push(lStack.pop());
        else if (cmd === "D" && rStack.length) lStack.push(rStack.pop());
        else if (cmd === "B") lStack.pop();
        else if (cmd === "P") lStack.push(value);
      }
      
      let answer = lStack.join("");
      answer += rStack.reverse().join("");
      console.log(answer);
}