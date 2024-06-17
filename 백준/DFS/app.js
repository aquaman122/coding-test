const fs = require('fs');
const { type } = require('os');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution();

function solution() {
    // DFS = > depth first search;
    const graph = {
        A: ["B", "C"],
        B: ["A", "D"],
        C: ["A", "G", "H", "I"],
        D: ["B", "E", "F"],
        E: ["D"],
        F: ["D"],
        G: ["C"],
        H: ["C"],
        I: ["C", "J"],
        J: ["I"]
    };

    const DFS = (graph, startNode) => {
        const visited = [];
        let needVisit = [];

        needVisit.push(startNode);

        while(needVisit.length !== 0) { // 모든 곳을 돌때까지 
            const node = needVisit.shift(); // 큐
            if(!visited.includes(node)) {
                visited.push(node);
                needVisit = [...graph[node], ...needVisit];
            }
        }
        return visited;
    }
    console.log(DFS(graph, "A"));
}