const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution();

function solution() {
  const ans = [];
  for (let i =0; i < input.length; i++){
    const arr = input[i].split('');
    
    for (let j =0; j < arr.length; j++) {
      const ascii = arr[j].charCodeAt();

      if (ascii >= 65 && ascii <= 90) {
        if (ascii + 13 <= 90) {
          ans.push(String.fromCodePoint(ascii + 13));
        } else if (ascii + 13 > 90) {
          ans.push(String.fromCodePoint((ascii + 13) - 26)); 
        }
      } else if (ascii >= 97 && ascii <= 122) {
        if (ascii + 13 <= 122) {
          ans.push(String.fromCodePoint(ascii + 13));
        } else {
          ans.push(String.fromCodePoint((ascii +13) - 26));
        }
      } else if (ascii === 32) {
        ans.push(String.fromCodePoint(32));
      } else if (ascii >= 48 && ascii <= 57) {
        ans.push(String.fromCodePoint(ascii));
      }
    }
    console.log(ans.join(''));
  }
}