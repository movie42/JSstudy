// vertex : a node
// edge : node를 연결하는 연결 선

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
}

let graph = new Graph();

graph.addVertax("JeonJu");
graph.addVertax("Seoul");
graph.addVertax("Busan");
graph.addVertax("GangWoan");
graph.addVertax("YeoSu");

graph.addEdge("JeonJu", "Seoul");
graph.addEdge("Seoul", "Busan");
graph.addEdge("Seoul", "GangWoan");
graph.addEdge("Seoul", "YeoSu");

console.log(graph.adjacenctList);

graph.removeVertex("Seoul");

console.log(graph.adjacenctList);
