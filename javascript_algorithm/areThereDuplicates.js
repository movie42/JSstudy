// frequency ver.

function areThereDuplicatesF(...value) {
  if (value.length === 0) return false;
  let data = {};
  for (let i = 0; i < value.length; i++) {
    data[value[i]] = (data[value[i]] || 0) + 1;
  }
  for (let i = 0; i < value.length; i++) {
    if (data[value[i]] > 1) {
      return true;
    } else {
      return false;
    }
  }
}

// multipointer ver.
function areThereDuplicatesM(...value) {
  if (value.length === 0) return false;
  let i = 0;
  let j = 1;
  while (j < value.length) {
    if (value[i] === value[j]) {
      j++;
    } else {
      i++;
      value[i] = value[j];
      j++;
    }
  }
  console.log(value);
  if (i + 1 === value.length) return false;
  return true;
}

// console.log(areThereDuplicatesF(1, 2, 3, 4, 5));
console.log(areThereDuplicatesM(1, 2, 3, 5, 7, 9, 10));
