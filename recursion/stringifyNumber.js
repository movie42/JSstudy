let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

const stringifyNumbers = (objValue) => {
  // 먼저 obj를 반복할 함수를 만든다.
  for (let key in objValue) {
    if (typeof objValue[key] === "number") {
      objValue[key] = objValue[key].toString();
    } else {
      stringifyNumbers(objValue[key]);
    }
  }
  return objValue;
};

console.log(stringifyNumbers(obj));

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
