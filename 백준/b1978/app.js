const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const isPrime = (n) => {
  if (n === 1) {
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

const [c, nums] = input;

solution(c, nums);

function solution(c, nums) {
  console.log(nums.split(' ').map(v => +v).filter(v => isPrime(v)).length);
}

