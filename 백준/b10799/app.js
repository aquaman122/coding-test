const fs = require('fs');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [expression] = input;

solution(expression)

function solution(expression) {
    // write here
  const splitExpression = expression.split('');
  let stack = [];
  let answer = 0;

  for (let i =0; i< splitExpression.length; i++) {
    const string = splitExpression[i];

    if (string === '(' && splitExpression[i + 1] === ')') {
      answer += stack.length;
      i++;
    } else if (string === '(') {
      stack.push(string);
    } else if (string === ')') {
      stack.pop();
      answer++;
    }
  }
  return answer;
}

const answer = solution(expression);
console.log(answer);