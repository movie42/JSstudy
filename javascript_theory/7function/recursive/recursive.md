재귀적 순회

> 출처
> [재귀적 순회](https://ko.javascript.info/recursion#ref-3148)  
> [재귀적 순회](../recursive/recursiveTraversal.js)

### 예제

1. 피보나치 함수 재귀 호출

```javascript
function fibonacci(number) {
  if (number <= 1) {
    return 1;
  }

  return fibonacci(number - 1) + fibonacci(number - 2);
}

console.log(fibonacci(10));

function fibonacciMemo(number, memo = {}) {
  if (number < 2) {
    return 1;
  }

  return fibonacciMemo(number - 1, memo) + fibonacciMemo(number - 2, memo);
}
```

2. 하노이 탑

```javascript
// n = 원반의 갯수
// a, b, c는 각각 탑 A, B, C를 나타냄

function hanoi(n, a, b, c) {
  if (n < 1) return;
  // n-1개의 원반을 a->b로 옮김(c를 거쳐서)
  hanoi(n - 1, a, c, b);
  // n-1개의 원반을 b->a로 옮김(c를 거쳐서)
  hanoi(n - 1, b, a, c);
}
```

3. 퀵 정렬

```javascript
function quickSort(data) {
  if (data.length < 2) {
    return data;
  }
  const pivot = data[0];
  const left = [];
  const right = [];

  for (let i = 0; i < data.length; i++) {
    if (pivot > data[i]) {
      left.push(data[i]);
    } else if (pivot < data[i]) {
      right.push(data[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([100, 44, 2, 1, 63, 13, 10]));
```
