const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');

function floydWarshall(graph) { 
    let dist = [];
    for (let i = 0; i < graph.length; i++) {
        dist[i] = [];
        for (let j = 0; j < graph.length; j++) {
        if (i === j) {
            dist[i][j] = 0;
        } else if (!isFinite(graph[i][j])) {
            dist[i][j] = Infinity;
        } else {
            dist[i][j] = graph[i][j];
            }
        }
    }
    
    for (let k = 0; k < graph.length; k++) {
        for (let i = 0; i < graph.length; i++) {
            for (let j = 0; j < graph.length; j++) {
                if (dist[i][j] > dist[i][k] + dist[k][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }
    
    return dist;
} // code taken from: https://reintech.io/blog/javascript-implementing-floyd-warshall-algorithm

g = [[0,2,3,4,1], [1,0,1,4,5], [1,2,0,1,1], [1,2,3,0,5], [1,2,3,4,0]]
assert(JSON.stringify(allPairsShortestPaths(g)) === JSON.stringify(floydWarshall(g)));