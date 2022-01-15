function sort(array) {
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

  let sorted = [...quickSort(array), "complete"];
  return sorted;
}

console.log(sort([44, 100, 2, 35, 1, 23]));
