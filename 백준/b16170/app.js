const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const date = new Date();
const year = date.getFullYear();
const month = date.getMonth()+1;
const day = date.getDate();

console.log(`${year}\n${month}\n${day}`);