const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let [n, m, v] = input.shift().split(" ").map(Number);
let graph = Array.from(Array(n + 1), () => []);
for (let i =0; i < m; i++) {
    let [from, to] = input[i].split(' ').map(v => +v);
    graph[from].push(to);
    graph[to].push(from);
}
graph.forEach(v => {
    v.sort((a, b) => a - b);
})

solution(graph, v);

function solution(graph, v) {
    let visited = new Array(n + 1).fill(false);
    let answer_dfs = [];

    const DFS = (v) => {
        if (visited[v]) return;
        visited[v] = true;
        answer_dfs.push(v);
        graph[v].forEach((vertex) => {
            if(!visited[vertex]) {
                DFS(vertex);
            }
        });
    };
    DFS(v);
    console.log(answer_dfs.join(' '));
    // 초기화;
    visited.fill(false);
    let answer_bfs = [];

    const BFS = (vStart) => {
        const willVisit = [vStart];
        let v;
        while (willVisit.length !== 0) {
            v = willVisit.shift();
            if (visited[v]) {
                continue;
            }
            visited[v] = true;
            answer_bfs.push(v);
            graph[v].forEach((vertex) => {
                if(!visited[vertex]) {
                    willVisit.push(vertex);
                }
            })
        }
    }
    BFS(v);
    console.log(answer_bfs.join(' '));
}