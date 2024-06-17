const fs = require('fs');
const { arrayBuffer } = require('stream/consumers');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


solution()

function solution() {
    // write here
    const nums = input.map(v => v.split(' ').map(v => +v));

    nums.forEach( v => {
        if (v[1] % v[0] === 0) {
            console.log('factor');
        } else if (v[0] % v[1] === 0)  {
            console.log('multiple');
        } else if (v[1] === 0 && v[0] === 0) {
            return;
        } else {
            console.log('neither');
        }
    })
}