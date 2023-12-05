function allPairsShortestPaths(graph) {
    var matrix = (rows, cols) => new Array(cols).fill(0).map((o, i) => new Array(rows).fill(Infinity))
    var distance = matrix(graph.length, graph.length) // creating distance matrix of infinite distance
    
    for(v1 = 0; v1 < graph.length; v1++){ // putting numbers into the right spots
        for(v2 = 0; v2 < graph.length; v2++){
            if(v1 == v2){
                distance[v1][v2] = 0
            }
            else if(distance[v1][v2] > graph[v1][v2]){
                distance[v1][v2] = graph[v1][v2]
            }
        }
    }

    for(k = 0; k < graph.length; k++){ //finding shortest path
        for(i = 0; i < graph.length; i++){
            for(j = 0; j < graph.length; j++){
                if(distance[i][j] > distance[i][k] + distance[k][j]){
                    distance[i][j] = distance[i][k] + distance[k][j]
                }
            }
        }
    }

    return distance;
}

//console.log(allPairsShortestPaths([[0,2,3,4,1], [1,0,1,4,5], [1,2,0,1,1], [1,2,3,0,5], [1,2,3,4,0]])) debugging
