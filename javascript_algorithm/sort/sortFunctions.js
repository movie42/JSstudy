let n = 6;
let numbers = "13 5 11 7 23 15";

function selectSort(n, data) {
  let numbers = data.split(" ").map((number) => +number);
  let minNumber;
  for (let i = 0; i < n; i++) {
    minNumber = i;
    for (let j = i + 1; j < n; j++) {
      if (numbers[minNumber] > numbers[j]) {
        minNumber = j;
      }
    }
    [numbers[i], numbers[minNumber]] = [numbers[minNumber], numbers[i]];
  }

  return numbers.join(" ");
}

console.log("select sort", selectSort(n, numbers));

function bubbleSort(n, data) {
  let numbers = data.split(" ").map((value) => +value);

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (numbers[j] > numbers[j + 1]) {
        [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
      }
    }
  }

  return numbers.join(" ");
}

console.log("bubble sort", bubbleSort(n, numbers));

function specialSort(n, data) {
  let numbers = data.split(" ").map((value) => +value);

  numbers.sort((a, b) => a - b);

  return numbers.join(" ");
}

n = 8;
numbers = "1 2 3 -3 -2 5 6 -6";

console.log(specialSort(n, numbers));

function insertionSort(n, data) {
  const numbers = data.split(" ").map((value) => +value);

  for (let i = 0; i < n; i++) {
    const currentValue = numbers[i];
    for (let j = i - 1; j >= 0 && numbers[j] > currentValue; j--) {
      [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
    }
  }
  return numbers.join(" ");
}

n = 6;
numbers = "11 7 5 6 10 9";

console.log("insertionSort", insertionSort(n, numbers));

function cacheMemory(n, data) {
  const [cacheSize, dataLength] = n.split(" ").map((value) => +value);
  const numbers = data.split(" ").map((value) => +value);
  const cache = [];

  for (let i = 0; i < dataLength; i++) {
    let currentValue = numbers[i];
    if (cache.length > 0) {
      for (let j = 0; j < cache.length; j++) {
        if (cache[j] === currentValue) {
          cache.filter((value) => value !== cache[j]);
          cache.unshift(currentValue);
          break;
        } else {
          cache.unshift(currentValue);
          break;
        }
      }
    } else {
      cache.unshift(currentValue);
    }
  }

  return cache.slice(0, cacheSize).join(" ");
}

n = "5 9";
numbers = "1 2 3 2 6 2 3 5 7";

console.log("cacheMemory", cacheMemory(n, numbers));

// 반 번를 1부터 N까지 부여

n = 9;
numbers = "120 125 152 130 135 135 143 127 160";

function outputOrderNumber(n, data) {
  const numbers = data.split(" ").map((value) => +value);
  const sortNumbers = numbers.map((value) => value).sort((a, b) => a - b);
  const answer = [];
  for (let i = 0; i < n; i++) {
    if (numbers[i] !== sortNumbers[i]) {
      answer.push(i + 1);
    }
  }
  return answer.join(" ");
}

console.log("outputOrderNumber", outputOrderNumber(n, numbers));

// 좌표 정렬 나의 풀이지만... sort를 사용해서 더 간략하게 풀 수 있다.

function coordinationSort(n, data) {
  let coordinations = [];
  let obj = {};
  let answer = [];
  for (let i = 0; i < n; i++) {
    coordinations.push(data[i].split(" ").map((value) => +value));
  }

  for (let i = 0; i < coordinations.length; i++) {
    if (!obj[coordinations[i][0]]) {
      obj[coordinations[i][0]] = [coordinations[i]];
    } else {
      obj[coordinations[i][0]] = [
        ...obj[coordinations[i][0]],
        coordinations[i],
      ];
    }
  }

  for (let i in obj) {
    for (let j = 0; j < obj.length - 1; j++) {
      if (obj[i][j][1] > obj[i][j + 1][1]) {
        [obj[i][j], obj[i][j + 1]] = [obj[i][j + 1], obj[i][j]];
      } else if (j === obj.length - 1) {
        break;
      }
    }
    answer.push(...obj[i]);
  }
  return answer;
}

function coordinationSort2(n, data) {
  let coordinations = [];
  for (let i = 0; i < n; i++) {
    coordinations.push(data[i].split(" ").map((value) => +value));
  }

  coordinations.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });

  return coordinations;
}

n = 5;
numbers = ["2 70", "1 3", "1 2", "2 500", "3 6"];

// console.log(coordinationSort(n, numbers));
console.log(coordinationSort2(n, numbers));
