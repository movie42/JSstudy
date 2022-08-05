class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  find(value) {
    let node = this.head;

    while (node.value !== value) {
      node = node.next;
    }

    return node;
  }

  append(value) {
    const node = new Node(value);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  insert(node, newValue) {
    const newNode = new Node(newValue);
    newNode.next = node.next;
    node.next = newNode;
  }

  remove(value) {
    let preNode = this.head;
    while (preNode.next.value !== value) {
      preNode = preNode.next;
    }

    if (preNode.next !== null) {
      preNode.next = preNode.next.next;
    }
  }

  display() {
    let currentNode = this.head;
    let displayString = "[";
    while (currentNode !== null) {
      displayString += `${currentNode.value}, `;
      currentNode = currentNode.next;
    }
    displayString = displayString.substring(0, displayString.length - 1);
    displayString += "]";
    return displayString;
  }
}

const linkedList = new SinglyLinkedList();
linkedList.append(2);
linkedList.append(1);
linkedList.append(4);
linkedList.append(5);
linkedList.append(7);
linkedList.insert(linkedList.find(4), 19);
linkedList.remove(4);

console.log(linkedList.display());

console.log(linkedList.find(4));
