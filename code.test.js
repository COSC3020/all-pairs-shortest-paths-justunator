const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');

assert(JSON.stringify(allPairsShortestPaths([[0,2,3,4,1], [1,0,1,4,5], [1,2,0,1,1], [1,2,3,0,5], [1,2,3,4,0]])) === JSON.stringify([[ 0, 2, 3, 4, 1 ],[ 1, 0, 1, 2, 2 ],[ 1, 2, 0, 1, 1 ],[ 1, 2, 3, 0, 2 ],[ 1, 2, 3, 4, 0 ]]));
assert(JSON.stringify(allPairsShortestPaths([[11,22,3,42,1], [11,0,1,4,5], [1,2,10,1,12], [1,2,3,0,5], [1,2,3,5,7]])) === JSON.stringify([[ 0, 3, 3, 4, 1 ],[ 2, 0, 1, 2, 3 ],[ 1, 2, 0, 1, 2 ],[ 1, 2, 3, 0, 2 ],[ 1, 2, 3, 4, 0 ]]));
assert(JSON.stringify(allPairsShortestPaths([[11,22], [4,5]])) === JSON.stringify([[ 0, 22 ], [ 4, 0 ]]));
assert(JSON.stringify(allPairsShortestPaths([])) === JSON.stringify([]));
assert(JSON.stringify(allPairsShortestPaths([[]])) === JSON.stringify([[0]]));
assert(JSON.stringify(allPairsShortestPaths([[], [1]])) === JSON.stringify([[0, Infinity], [1, 0]]));
assert(JSON.stringify(allPairsShortestPaths([[0, Infinity, Infinity], [1,0,1], [4,0,0]])) === JSON.stringify([ [ 0, Infinity, Infinity ], [ 1, 0, 1 ], [ 1, 0, 0 ] ]));
