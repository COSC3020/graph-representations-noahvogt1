function convertToAdjList(adjMatrix) {
    let adjList = {};

    for (let i = 0; i < matrix.length; i++) {
    adjList[i] = [];
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 1) {
        adjList[i].push(j);
      }
    }
  }

  return adjList;
}
