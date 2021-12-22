// 함수는 인자로 받는 원시값을 변경하지 않는다.

const num = 0;

function mutation(num) {
  return num + 1;
}

const mutationNumber = mutation(num);

console.log(num, mutationNumber);

const string = "constant";

function mutationStr(str) {
  return str.slice(0, 2);
}

const mutationString = mutationStr(string);

console.log(string, mutationString);

// 객체
// 객체는 함수에 들어가면 변경된다.

const user = {
  name: "constant",
};

function mutationObj(obj) {
  return (obj.name = "mutation");
}

const mutationName = mutationObj(user);

console.log(user, mutationName);

// 배열
// 함수에 인자로 들어간 배열도 함수안에서 값이 조작된다.
const arr = [1, 2];

function mutationList(array) {
  return array.pop();
}

const mutationNumberArray = mutationList(arr);

console.log(arr, mutationNumberArray);

const numberArray = [1, 2, 3, 4];

function deepCopyArray(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
}

const deepCopyNumberArray = deepCopyArray(numberArray);

deepCopyNumberArray.pop();

console.log(numberArray, deepCopyNumberArray);

const user2 = {
  name: "constat2",
  family: {
    name: "mutation",
  },
};

function deepCopyObjArray(obj) {
  const newObj = {};

  for (let key in obj) {
    if (typeof obj[key] === "object") {
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
