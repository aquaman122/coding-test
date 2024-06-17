const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('');

const s = input;

solution(s)

function solution(s) {
  // console.log(s.sort((a, b) => {
  //   if (a > b) return -1;
  //   else if ( a < b) return 1;
  //   else return 0;
  // }).join(''));
  console.log(s.
                reverse()
                .join('')
    );
}
