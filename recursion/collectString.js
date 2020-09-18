const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

function collectStrings(values) {
  let result = [];
  for (let key in values) {
    if (typeof values[key] === "string") {
      result.push(values[key]);
    } else {
      result = result.concat(collectStrings(values[key]));
    }
  }
  return result;
}

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
