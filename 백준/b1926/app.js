const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map((v) => +v);

const arr = input.slice(1).map(v => v.split(' ').map(v => +v));

// 상 하 좌 우
const dx = [-1, 1, 0, 0];
const dy = [0, 0 ,-1, 1];

let visited = Array.from({ length: n }, () => Array(m).fill(false));

let pictureCount = 0;
let maxArea = 0;

const bfs = (x, y) => {
  let queue = [[x, y]];
  visited[x][y] = true;
  let area = 1;

  while (queue.length) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && nx < n && ny >= 0 && ny < m && !visited[nx][ny] && arr[nx][ny] === 1) {
        visited[nx][ny] = true;
        queue.push([nx, ny]);
        area++;
      }
    }
  }
  return area;
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (!visited[i][j] && arr[i][j] === 1) {
      pictureCount++;
      maxArea = Math.max(maxArea, bfs(i, j));
    }
  }
}

console.log(pictureCount);
console.log(maxArea);