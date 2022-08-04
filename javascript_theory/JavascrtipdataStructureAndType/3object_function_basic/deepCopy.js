const userA = {
  name: "A",
  age: 23,
  address: {
    contury: "Korea",
    city: "Seoul",
  },
  visit: false,
  isPrototype: function (visit) {
    console.log(true);
  },
};

// 깊은 복사 1
// 매우 느림, 메서드를 만나면 undefined으로 값을 할당
const userB = JSON.parse(JSON.stringify(userA));

// 깊은 복사 2
// 재귀 함수 사용

function deepCopy(obj) {
  if (obj === {} || typeof obj !== "object") {
    return obj;
  }

  const copyObj = {};
  for (let key in obj) {
    copyObj[key] = deepCopy(obj[key]);
  }
  return copyObj;
}

const userC = deepCopy(userA);
userC.address.contury = "Thiland";

console.log("userA", userA);
console.log("userC", userC);
