const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();


solution()

function solution() {
    // write here
  let result = '';
  for (let i = 1; i <= +input; i++) {
    let star= '*'
    result += star;
    console.log(result);
  }
}