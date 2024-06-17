const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const [N, A, M, B] = input.map(v => v.split(' ').map(v => +v));
A.sort((a, b) => a - b);
solution(N, A, M, B);

function solution(N, A, M, B) {
    // 이분 탐색법
    const binarySearch = (list, target, left, right, mid) => {
        mid = Math.floor((left + right) / 2);

        if (right < left) {
            return list[mid] === target ? 1 : 0;
        }

        if (list[mid] > target) {
            right = mid - 1;
            console.log(right);
        } else {
            left = mid + 1;
        }

        return binarySearch(list, target, left, right, mid);
    }

    const result = B.map(v => binarySearch(A, v, 0, A.length -1, 0));
    console.log(result.join('\n'));
    
    /*
    const array = new Set(A);
    const result = B.map(v => array.has(v) ? 1 : 0);
    console.log(result.join('\n'));
    */
}