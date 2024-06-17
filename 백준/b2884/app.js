const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [h, m] = fs.readFileSync(filePath).toString().split(' ').map(v => +v);

solution(h, m);

function solution(h, m) {
    // write here
    m -= 45;
    if (m < 0) {
        m += 60;
        h -= 1;

        if (h < 0) {
            h = 23;
        }
    }
    console.log(`${h} ${m}`)
}