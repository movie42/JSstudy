// 함수는 인자로 받는 원시값을 변경하지 않는다.

const num = 0;

function mutation(num) {
  return num + 1;
}

const mutationNumber = mutation(num);

// console.log(num, mutationNumber);

const string = "constant";

function mutationStr(str) {
  return str.slice(0, 2);
}

const mutationString = mutationStr(string);

// console.log(string, mutationString);

//배열

const names = ["ko", "kim", "kang"];

const namesCopy = names.map((value) => value);

names.push("kwan");
// console.log(names);
// console.log(namesCopy);

function map(arr, func) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(func(arr[i]));
  }
  return newArr;
}

const namesCopy2 = map(names, (value) => value + "2");

// console.log(namesCopy2);
namesCopy2.push("koo");
// console.log(namesCopy2);

// 객체
// 객체는 함수에 들어가면 변경된다.

const user = {
  name: "constant",
};

function mutationObj(obj) {
  return (obj.name = "mutation");
}

const mutationName = mutationObj(user);

// console.log(user, mutationName);

// 배열
// 함수에 인자로 들어간 배열도 함수안에서 값이 조작된다.
const arr = [1, 2];

function mutationList(array) {
  return array.pop();
}

const mutationNumberArray = mutationList(arr);

// console.log(arr, mutationNumberArray);

// 깊은 복사

const user2 = {
  name: "constat2",
  family: {
    name: "mutation",
  },
};

function deepCopyObjArray(obj) {
  const newObj = {};

  function isObject(value) {
    return Object.prototype.toString.call(value) === "[object Object]";
  }

  for (let key in obj) {
    if (isObject(obj[key])) {
      newObj[key] = deepCopyObjArray(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }

  return newObj;
}

const newUser2 = deepCopyObjArray(user2);

newUser2["name"] = "mutation";
newUser2["family"]["name"] = "constant";

console.log(user2, newUser2);
