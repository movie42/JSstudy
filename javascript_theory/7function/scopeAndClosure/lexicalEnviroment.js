// https://ko.javascript.info/closure#ref-893
// 원하는 값만 골라내기

// console.log(arr.filter((value) => value >= 3 && value <= 6));

function isBetween(min, max) {
  return function (value) {
    return value >= min && value <= max;
  };
}

function isArray(array) {
  return function (value) {
    return array.includes(value);
  };
}

function _filter(array, func) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (func(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(_filter(arr, isBetween(3, 6)));

console.log(arr.filter(isBetween(3, 6)));
console.log(arr.filter(isArray([1, 2, 10])));

let users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" },
];

function byField(string) {
  return function (a, b) {
    return a[string] > b[string] ? 1 : -1;
  };
}

console.log(users.sort(byField("name")));

function makeArmy() {
  let shooters = [];

  let i = 0;
  while (i < 10) {
    let j = i;
    let shooter = function () {
      // shooter 함수
      console.log(j); // 몇 번째 shooter인지 출력해줘야 함
    };
    shooters.push(shooter);
    i++;
  }

  return shooters;
}

let arm = makeArmy();

arm[5]();
