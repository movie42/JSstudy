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
}

const BTS = new BinarySearchTree();

BTS.insert(55);
BTS.insert(22);
BTS.insert(72);
BTS.insert(19);
BTS.insert(1);

console.log(BTS);

console.log(BTS.find(55));
console.log(BTS.find(43));
