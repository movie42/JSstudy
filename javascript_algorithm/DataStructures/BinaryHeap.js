// MaxBinaryHeap

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    this.values.push(element);
    console.log(element);
    this.bubbleUp();
  }

  // 나는 es6 버전의 variable swapping을 하는 것이 더 직관적이고 이해하기가 쉬운 것 같다.
  // 처음에는 [parent, element] = [element, parent]; 이렇게 적었더니 this.values안에서 교환이 일어나지 않았는데
  // 아마도 그 이유는 참조를 parent와 element로만 이해하고 this.values라고 생각하지 않아서 parent와 element는 교환하지만 this.values는 교환하지 않는것같다.
  // 그래서 아래처럼 바꿨다. 차라리 이럴꺼면 parent와 element 선언이 필요할까? 싶다.
  /*
  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (element <= parent) break;
      [this.values[parentIndex], this.values[index]] = [element, parent];
      index = parentIndex;
    }
  }
  */

  // 이게 위보다 더 나은것같다.
  bubbleUp() {
    let idx = this.values.length - 1;
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      if (this.values[idx] <= this.values[parentIdx]) break;
      [this.values[parentIdx], this.values[idx]] = [
        this.values[idx],
        this.values[parentIdx],
      ];
      idx = parentIdx;
    }
  }

  maxExtract() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDown();
    }
    return max;
  }

  bubbleDown() {
    let index = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * index + 1;
      let rightChildIdx = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}

let heap = new MaxBinaryHeap();

heap.insert(39);
heap.insert(41);
heap.insert(18);
heap.insert(55);
heap.insert(27);
heap.insert(12);
heap.insert(33);

console.log(heap.values);
