// Dijkstra's Algorithm
// Greed Algorithm중에 하나라고 한다.

class WeightGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push({ node: vertex2, weight });
      this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
      this.adjacencyList[vertex1].push({ node: vertex2, weight });
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
      this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }
  }
}

let weightGraph = new WeightGraph();

weightGraph.addEdge("A", "B", 5);

console.log(weightGraph.adjacencyList["A"]);
