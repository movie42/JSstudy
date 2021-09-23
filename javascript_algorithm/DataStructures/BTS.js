// Binary Search Tree

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (val === current.value) return undefined;
        if (current.value > val) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if (current.right === null) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }

  find(val) {
    if (this.root === null) return false;
    let current = this.root,
      found = false;
    while (current && !found) {
      if (current.value < val) {
        currnet = current.right;
      } else if (current.value > val) {
        current = current.right;
      } else {
        found = true;
      }
      if (!found) return undefined;
      return current;
    }
  }

  BFS() {
    let data = [];
    let queue = [];
    let node = this.root;
    queue.push(this.root);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  DFSPreOrder() {
    let data = [];
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }

  DFSPostOrder() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }

  DFSInOrder() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
}

const BTS = new BinarySearchTree();

BTS.insert(10);
BTS.insert(6);
BTS.insert(15);
BTS.insert(3);
BTS.insert(8);
BTS.insert(20);

console.log(BTS);

// console.log(BTS.find(55));
// console.log(BTS.find(43));

// console.log(BTS.BFS());
// console.log(BTS.DFSPreOrder());
// console.log(BTS.DFSPostOrder());
console.log(BTS.DFSInOrder());
