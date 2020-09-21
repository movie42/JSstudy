class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //push
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  //pop
  pop() {
    if (!this.head) return undefined;
    let popNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = popNode.prev;
      this.tail.next = null;
      popNode.prev = null;
    }
    this.length--;
    return popNode;
  }

  //shift
  shift() {
    if (!this.head) return undefined;
    let shiftNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shiftNode.next;
      this.head.prev = null;
      shiftNode.next = null;
    }
    this.length--;
    return shiftNode;
  }

  //unshift
  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  //get
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let mid = this.length / 2;
    if (index >= mid) {
      let startTail = this.tail;
      for (let i = this.length - 1; i !== index; i--) {
        startTail = startTail.prev;
      }
      return startTail;
    } else {
      let startHead = this.head;
      for (let i = 0; i !== index; i++) {
        startHead = startHead.next;
      }
      return startHead;
    }
  }

  //set
  set(index, val) {
    let value = this.get(index);
    if (value !== null) {
      value.val = val;
      return true;
    }
    return false;
  }

  //insert
  insert(index, val) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length - 1) !!this.push(val);
    let newNode = new Node(val);
    let prevNode = get(index - 1);
    let nextNode = prevNode.next;
    if (prevNode !== null) {
      (prevNode.next = newNode), (nextNode.prev = newNode);
      (newNode.next = nextNode), (newNode.prev = prevNode);
      this.length++;
      return true;
    }
  }

  //remove
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let removeNode = get(index);
    let beforNode = removeNode.prev;
    let afterNode = removeNode.next;
    if (removeNode !== null) {
      (beforNode.next = afterNode), (afterNode.prev = beforNode);
      (removeNode.next = null), (removeNode.prev = null);
      this.length--;
      return removeNode;
    }
    return null;
  }
}

let list = new DoublyLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(7);
list.push(8);
list.push(9);
list.push(10);
list.push(11);
