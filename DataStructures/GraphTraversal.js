// Graph Traversal

class Graph {
  constructor() {
    this.adjacenctList = {};
  }

  addVertax(vertex) {
    if (!this.adjacenctList[vertex]) {
      this.adjacenctList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacenctList[vertex1] && this.adjacenctList[vertex2]) {
      this.adjacenctList[vertex1].push(vertex2);
      this.adjacenctList[vertex2].push(vertex1);
    }
    if (!this.adjacenctList[vertex1]) {
      this.addVertax(vertex1);
      this.adjacenctList[vertex1].push(vertex2);
      this.adjacenctList[vertex2].push(vertex1);
    }
    if (!this.adjacenctList[vertex2]) {
      this.addVertax(vertex2);
      this.adjacenctList[vertex1].push(vertex2);
      this.adjacenctList[vertex2].push(vertex1);
    }
  }

  removeEdge(vertex1, vertex2) {
    this.adjacenctList[vertex1] = this.adjacenctList[vertex1].filter(
      (v) => v !== vertex2
    );
    this.adjacenctList[vertex2] = this.adjacenctList[vertex2].filter(
      (v) => v !== vertex1
    );
  }

  removeVertex(vertex) {
    let remove = this.adjacenctList[vertex];
    for (let i = 0; i < remove.length; i++) {
      this.adjacenctList[remove[i]] = this.adjacenctList[remove[i]].filter(
        (v) => v !== vertex
      );
      delete this.adjacenctList[vertex];
    }
  }

  // DFS

  DFSRecursive(start) {
    const result = [];
    const storeVisited = {};
    const adjacenctList = this.adjacenctList;
    (function foundVertex(vertex) {
      if (!vertex) return null;
      storeVisited[vertex] = true;
      result.push(vertex);
      adjacenctList[vertex].forEach((neighbor) => {
        if (!storeVisited[neighbor]) {
          return foundVertex(neighbor);
        }
      });
    })(start);
    return result;
  }

  DFSIterative(start) {
    let stack = [];
    let result = [];
    stack.push(start);
    let labled = {};
    while (stack.length) {
      let vertex = stack.pop();
      let adjacenctList = this.adjacenctList;
      if (!labled[vertex]) {
        result.push(vertex);
        labled[vertex] = true;
        adjacenctList[vertex].forEach((neighbor) => stack.push(neighbor));
      }
    }
    return result;
  }

  BFS(start) {
    let result = [];
    let visited = {};
    let queue = [];
    queue.push(start);
    while (queue.length) {
      let current = queue.shift();
      if (!visited[current]) {
        result.push(current);
        visited[current] = true;
        this.adjacenctList[current].forEach((neighbor) => {
          queue.push(neighbor);
        });
      }
    }
    return result;
  }
}

let graph = new Graph();

graph.addVertax("A");
graph.addVertax("B");
graph.addVertax("C");
graph.addVertax("D");
graph.addVertax("E");
graph.addVertax("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

console.log(graph.adjacenctList);

// console.log(graph.DFSIterative("A"));
console.log(graph.BFS("A"));
