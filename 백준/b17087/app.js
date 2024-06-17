const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map((x) => x.split(' '));

const base = parseInt(input[0][1]);
const [...eachDistance] = input[1].map(v => Math.abs(v - base));

solution(base, ...eachDistance)

function solution(base, ...eachDistance) {
  const getGCD = (a, b) => {
    let r;
    while(b) {
      r = a%b;
      a = b;
      b = r;
    }
    return a;
  };
  let tmp = getGCD(eachDistance[0], eachDistance[1]);
  if (eachDistance.length === 1) console.log(eachDistance[0]);
  else if (eachDistance.length === 2) console.log(tmp);
  else {
    for (let i = 2; i < eachDistance.length; i++) {
      tmp = getGCD(tmp, eachDistance[i])
    }
    console.log(tmp);
  }
}
