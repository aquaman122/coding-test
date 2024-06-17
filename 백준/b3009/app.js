const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution();

function solution() {
  let arrX = [];
  let arrY = [];
  let x;
  let y;
  for (let i =0; i < input.length; i++) {
    const [X, Y] = input[i].split(' ').map(v => +v);
    arrX.push(X);
    arrY.push(Y);
  }
  arrX.sort();
  arrY.sort();

  x = arrX[1] === arrX[0] ? arrX[2] : arrX[0];
  y = arrY[1] === arrY[0] ? arrY[2] : arrY[0];

  console.log(x, y);

}