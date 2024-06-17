const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [yMax, xMax] = input.shift().split(' ').map(v => +v);
const map = input.map(v => v.split('').map(v => +v));
const check = Array.from(Array(yMax), () => Array(xMax).fill(0));

const bfs = (row, col) => {
  const queue = [];
  queue.push([row, col]);
  check[row][col] = 1;
  let dx = [0, 0, -1, 1];
  let dy = [-1, 1, 0, 0];
  while(queue.length) {
    let [x, y] = queue.shift();
    for (let i =0; i< 4; i++) {
      let [nx, ny] = [x + dx[i], y + dy[i]];
      if (nx < 0 || ny < 0 || nx >= yMax || ny >= xMax)continue;
      if (map[nx][ny] && !check[nx][ny]) {
        check[nx][ny] = check[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }
}
bfs(0, 0);
console.log(check[yMax-1][xMax-1]);