const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let t = input.shift();

solution(input);

function solution(input) {
  let quarter = 0;;
  let dime = 0;
  let nickel = 0;
  let penny = 0;
  input.forEach(item => {
    if (item >= 25) {
      quarter = Math.floor(item / 25);
      item -= 25 * quarter;
    } else {
      quarter = 0;
    }
    if (item >= 10) {
      dime = Math.floor(item / 10);
      item -= 10 * dime
    } else {
      dime = 0;
    }
    
    if (item >= 5) {
      nickel = Math.floor(item / 5);
      item -= 5 * nickel;
    } else {
      nickel = 0;
    }
    if (item >= 1) {
      penny = Math.floor(item / 1);
      item -= penny;
    } else {
      penny = 0;
    }
    console.log(`${quarter} ${dime} ${nickel} ${penny}`);
  })
  
}