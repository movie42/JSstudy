// capitalizeFirst 함수에 arr를 주면 함수는 arr 각각의 값의 첫번째 문자를 대문자로 변환하여 새로운 배열을 반환한다.

const capitalizeFirst = (arr) => {
  let result = [];
  if (arr.length > 0) {
    result.push(arr[0].slice(0, 1).toUpperCase() + arr[0].slice(1));
    return (result = result.concat(capitalizeFirst(arr.slice(1))));
  }
  return result;
};

console.log(capitalizeFirst(["car", "taco", "banana"]));
